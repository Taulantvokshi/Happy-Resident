import axios from 'axios'

const initalSatate = {
  payment: {}
}

//Action Creator
//const GET_PAYMENT = 'GET_PAYMENT'

export const getPayment = data => async dispatch => {
  try {
    const process = await axios.post('/api/payments', {...data})

    dispatch({})
  } catch (error) {
    throw new Error(error)
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
