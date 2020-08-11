/*eslint complexity:*/
import React from 'react'
import {userSignin} from '../../store/user'
import {connect} from 'react-redux'
import signupErrors from '../../util/sign_up_errors'
const SignUp = ({handleSubmit, formErrors}) => {
  console.log(signupErrors('email', formErrors))
  return (
    <div className="signup_display">
      <div className="signup">
        <form onSubmit={handleSubmit} className="signup_form">
          <div className="signup_form-name ">
            {signupErrors('firstName', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('firstName', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('firstName', formErrors)
                  ? signupErrors('firstName', formErrors).border
                  : ''
              }}
              name="firstName"
              placeholder="first name"
              className="s-input"
            />
          </div>
          <div className="signup_form-last">
            {signupErrors('lastName', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('lastName', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('lastName', formErrors)
                  ? signupErrors('lastName', formErrors).border
                  : ''
              }}
              name="lastName"
              placeholder="last name"
              className="s-input"
            />
          </div>
          <div className="signup_form-email">
            {signupErrors('email', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('email', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('email', formErrors)
                  ? signupErrors('email', formErrors).border
                  : ''
              }}
              name="email"
              placeholder="email"
              className="s-input"
            />
          </div>
          <div className="signup_form-password">
            {signupErrors('password', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('password', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('password', formErrors)
                  ? signupErrors('password', formErrors).border
                  : ''
              }}
              type="password"
              name="password"
              placeholder="password"
              className="s-input"
            />
          </div>
          <div className="signup_form-floor">
            {signupErrors('floor', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('floor', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('floor', formErrors)
                  ? signupErrors('floor', formErrors).border
                  : ''
              }}
              name="floor"
              placeholder="floor"
              className="s-input"
            />
          </div>
          <div className="signup_form-appt">
            {signupErrors('aptNumber', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('aptNumber', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('aptNumber', formErrors)
                  ? signupErrors('aptNumber', formErrors).border
                  : ''
              }}
              name="aptNumber"
              placeholder="appt"
              className="s-input"
            />
          </div>
          <div className="signup_form-res">
            {signupErrors('residentCode', formErrors) ? (
              <label className="signup_form-name--label">
                {signupErrors('residentCode', formErrors).message}
              </label>
            ) : (
              ''
            )}
            <input
              style={{
                borderBottom: signupErrors('residentCode', formErrors)
                  ? signupErrors('residentCode', formErrors).border
                  : ''
              }}
              name="residentCode"
              placeholder="residentcode"
              className="s-input"
            />
          </div>
          <button type="submit" className=" signup_form-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const password = evt.target.password.value
      const email = evt.target.email.value
      const residentCode = evt.target.residentCode.value
      const aptNumber = evt.target.aptNumber.value
      const floor = evt.target.floor.value

      dispatch(
        userSignin({
          firstName,
          lastName,
          email,
          password,
          aptNumber,
          floor,
          residentCode
        })
      )
    }
  }
}
const mapState = store => {
  return {formErrors: store.alerts.signUpErrors}
}
export default connect(mapState, dispatchState)(SignUp)
