import React from 'react';
import store from './store';
import { EDIT_RESOURCE } from './actions'

module.exports = React.createClass({
  getInitialState: function() {
    let currentState = store.getState().ninjaTurtles
    console.log('Table initial state: ' + JSON.stringify(currentState));

    return({data: currentState});
  },

  componentWillMount: function() {
    store.subscribe(this.handleStateChange);
  },

  componentWillUnmount: function() {
    store.unsubscribe();
  },

  handleStateChange: function() {
    let newState = store.getState().ninjaTurtles
    console.log('Table got new state: ' + JSON.stringify(newState));
    this.setState({data: newState})
  },

  onclick: function(e){
    var id = $(e.target).data('id');
    store.dispatch({ type: EDIT_RESOURCE, id });

    e.stopPropagation();
  },

  render: function(){
    var self = this;

    var rows = this.state.data.map(function(row){
      var href = '#' + row.id

      return(
        <tr key={row.id}>
          <td>{row.id}</td>
          <td><a href={href} data-id={row.id} onClick={self.onclick}>{row.name}</a></td>
          <td>{row.weapon}</td>
        </tr>
      );
    });

    return(
      <table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              Weapon of Choice
            </th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
});
