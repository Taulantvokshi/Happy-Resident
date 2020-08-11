/*eslint complexity:*/
import axios from 'axios'
const initalSatate = {
  postedMessage: '',
  signUpErrors: {}
}

//Action Creator
const POSTED_MESSAGE = 'POSTED_MESSAGE'
const SIGNUP_ERRORS = 'SIGNUP_ERRORS'
const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const clearMessage = () => dispatch => {
  dispatch({
    type: CLEAR_MESSAGE,
    message: ''
  })
}

export const newEntry = (data, option) => async dispatch => {
  try {
    let responseData = null
    switch (option) {
      case 'newPhoneNumber':
        responseData = await axios.put('/api/account', {phoneNumber: data})
        break
      case 'newAssistance':
        responseData = await axios.post('/api/assistance', {...data})
        break
      case 'newMovingRequest':
        responseData = await axios.post('/api/account', {...data})
        break
      case 'isValidPassword':
        responseData = await axios.post('/api/account/check-pass', {
          password: data,
          status: 'isPass'
        })
        break
      case 'newPassword':
        responseData = await axios.post('/api/account/check-pass', {
          password: data,
          status: 'changePass'
        })
        break
      case 'deleteUser':
        responseData = await axios.post('/api/account/check-pass', {
          status: 'deleteUser'
        })
        break
      default: {
        break
      }
    }

    dispatch({
      type: POSTED_MESSAGE,
      messages: responseData.data
    })
  } catch (error) {
    dispatch({
      type: POSTED_MESSAGE,
      messages: error.response.data
    })
  }
}
//a

export default (state = initalSatate, action) => {
  switch (action.type) {
    case POSTED_MESSAGE:
      return {...state, postedMessage: action.messages}
    case CLEAR_MESSAGE:
      return {...state, postedMessage: action.message}
    case SIGNUP_ERRORS:
      return {...state, signUpErrors: action.messages}
    default: {
      return state
    }
  }
}
