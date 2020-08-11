// import axios from 'axios'
const initalSatate = {
  service: ''
}

const APPLIANCE_SELECTED = 'APPLIANCE_SELECTED'
const DESELECT = 'DESELECT'

export const deselect = () => dispatch => {
  dispatch({
    type: DESELECT,
    deselected: ''
  })
}
//Select an appliance option on maintenance icons
export const applianceSelect = data => dispatch => {
  dispatch({
    type: APPLIANCE_SELECTED,
    selected: data
  })
}

//Select a setting option on user account
export const serviceClicked = data => {
  return dispatch => {
    dispatch({
      type: APPLIANCE_SELECTED,
      selected: data
    })
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case APPLIANCE_SELECTED:
      return {...state, service: action.selected}
    case DESELECT:
      return {...state, service: action.deselected}
    default: {
      return state
    }
  }
}
