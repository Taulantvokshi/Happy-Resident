/*eslint complexity:*/
import React, {useEffect, useState} from 'react'
import {InfobarNavigation} from '../../components'
import {clearMessage} from '../../store/alerts'

import {connect} from 'react-redux'

const Infobar = ({message, isWarning, error, clearMessageAfterTimer}) => {
  let time = 3000
  if (error) time = 9000

  const [useAlert, setAlert] = useState(true)
  useEffect(
    () => {
      setTimeout(() => {
        if (message && alert) {
          clearMessageAfterTimer()
        }
      }, time)
      setAlert(true)
    },
    [message]
  )

  return (
    <section className="infobar">
      <InfobarNavigation />

      <div
        style={{
          height: message && useAlert ? '3.4rem' : '0',
          backgroundColor:
            message && error ? (isWarning ? '#f4d143' : '#f6ad7b') : '#c2e8ce'
        }}
        className="infobar-alert"
      >
        <h1
          style={{opacity: message && useAlert ? '1' : '0'}}
          className="infobar-alert-text"
        >
          {message}
        </h1>
        <div
          onClick={() => {
            setAlert(false)
            clearMessageAfterTimer()
          }}
          style={{opacity: message && useAlert ? '1' : '0'}}
          className="infobar-alert-button"
        >
          <h1>x</h1>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = state => {
  return {
    message: state.alerts.postedMessage.message,
    isWarning: state.alerts.postedMessage.warning,
    error: state.alerts.postedMessage.path
  }
}
const dispatchState = dispatch => {
  return {
    clearMessageAfterTimer: data => dispatch(clearMessage(data))
  }
}
export default connect(mapStateToProps, dispatchState)(Infobar)
