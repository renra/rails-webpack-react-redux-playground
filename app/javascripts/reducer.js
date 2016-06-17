import data from './data'
import { EDIT_RESOURCE, UPDATE_RESOURCE } from './actions'

const initialState = {
  editingResource: {},
  ninjaTurtles: data
}

module.exports = function Reducer(state = initialState, action){
  function findTurtle(id) {
    return state.ninjaTurtles.find(function(turtle){
      return turtle.id == id
    });
  }

  function findTurtleIndex(id) {
    return state.ninjaTurtles.findIndex(function(turtle){
      return turtle.id == id
    });
  }

  switch(action.type){
    case EDIT_RESOURCE:
      console.log(action);

      let editingTurtle = findTurtle(action.id)
      if(!editingTurtle) {
        return state
      }

      return Object.assign({}, state, {editingResource: editingTurtle})
    case UPDATE_RESOURCE:
      console.log(action);

      let idx = findTurtleIndex(action.id)

      if(!idx) {
        return state
      }

      let turtle = state.ninjaTurtles[idx]
      let turtles = state.ninjaTurtles

      let updatedTurtle = Object.assign(
        {},
        turtle,
        {id: action.id, name: action.name, weapon: action.weapon}
      )

      turtles[idx] = updatedTurtle;

      return Object.assign(
        {},
        state,
        {
          editingResource: updatedTurtle,
          ninjaTurtles: turtles
        }
      )
    default:
      return state
  }
}
