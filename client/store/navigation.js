const initalSatate = {
  url: ''
}

//Action Creator
const NAV_CLICK = 'NAV_CLICK'

export const navigationIconClicked = data => {
  return dispatch => {
    dispatch({
      type: NAV_CLICK,
      urlPath: data
    })
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case NAV_CLICK:
      return {...state, url: action.urlPath}
    default: {
      return state
    }
  }
}
