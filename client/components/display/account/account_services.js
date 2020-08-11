import React from 'react'
import {serviceClicked} from '../../../store/assiaistance'
import {connect} from 'react-redux'

const AccountServices = ({
  serviceName,
  buttonName,
  text,
  color,
  currentService
}) => {
  const handleClick = e => {
    currentService(e.currentTarget.textContent)
  }

  return (
    <div className="account_services">
      <div className="account_services-changePasword">
        <div className="account_services-changePasword-info">
          <h3 className="account_services-changePasword-info--title">
            {serviceName}
          </h3>
          <h4
            style={{display: !text ? 'none' : 'block'}}
            className="account_services-changePasword-info--email"
          >
            {text}
          </h4>
        </div>
        <div
          onClick={handleClick}
          style={{backgroundColor: color}}
          className="account_services-changePasword-button"
        >
          <h4>{buttonName}</h4>
        </div>
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    currentService: data => dispatch(serviceClicked(data))
  }
}
export default connect(null, dispatchState)(AccountServices)
