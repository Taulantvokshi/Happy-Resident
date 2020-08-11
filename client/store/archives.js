import axios from 'axios'

const initalSatate = {
  assisistances: []
}
//Forms
const GET_ASSISTANCE = 'GET_ASSISTANCE '
//Action Creator
export const deleteAssistances = id => async dispatch => {
  try {
    await axios.post('/api/archives/delete', {id: id})
    const assisistances = await axios.get('/api/archives')
    dispatch({
      type: GET_ASSISTANCE,
      allAssistances: assisistances.data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllAssistances = () => async dispatch => {
  try {
    const assisistances = await axios.get('/api/archives')
    dispatch({
      type: GET_ASSISTANCE,
      allAssistances: assisistances.data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case GET_ASSISTANCE: {
      return {...state, assisistances: action.allAssistances}
    }

    default: {
      return state
    }
  }
}
