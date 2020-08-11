import axios from 'axios'

const initalSatate = {
  service: '',
  statusMessage: ''
}

//Action Creator

export default (state = initalSatate, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
