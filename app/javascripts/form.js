import React from 'react';
import store from './store';
import { UPDATE_RESOURCE } from './actions'

module.exports = React.createClass({
  getInitialState: function() {
    let currentResource = store.getState().editingResource
    console.log('Form initial state: ' + JSON.stringify(currentResource));

    return(currentResource);
  },

  componentWillMount: function() {
    store.subscribe(this.handleStateChange);
  },

  componentWillUnmount: function() {
    store.unsubscribe();
  },

  handleStateChange: function() {
    let newResource = store.getState().editingResource
    console.log('Form got new state: ' + JSON.stringify(newResource));
    this.setState(newResource)
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value})
  },

  handleWeaponChange: function(e) {
    this.setState({weapon: e.target.value})
  },

  handleUpdate: function() {
    var name = this.state.name.trim();
    var weapon = this.state.weapon.trim();

    store.dispatch({ type: UPDATE_RESOURCE, id: this.state.id, name: name, weapon: weapon });
  },

  render: function() {
    return(
      <div>
        <div>
          <span>Name: </span>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        <div>
          <span>Weapon: </span>
          <input
            type="text"
            value={this.state.weapon}
            onChange={this.handleWeaponChange}
          />
        </div>

        <div>
          <button onClick={this.handleUpdate}>Update</button>
        </div>
      </div>
    )
  }
})
