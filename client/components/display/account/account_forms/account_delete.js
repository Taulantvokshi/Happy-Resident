import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {deselect} from '../../../../store/assiaistance'
import {RemoveIcon} from '../../../../icons/icon_component'
import {newEntry, clearMessage} from '../../../../store/alerts'
import {logout} from '../../../../store/user'
const AccountDelete = ({
  deselectSetting,
  isValidPassword,
  passwordResponse,
  clearPreviousState,
  deleteUser,
  redirecting
}) => {
  const [password, setPassword] = useState('')
  const [next, setNext] = useState(false)

  useEffect(
    () => {
      if (passwordResponse.status) {
        setNext(!next)
      }
    },
    [passwordResponse.status]
  )

  const handleSubmit = e => {
    e.preventDefault()
    isValidPassword(password, 'isValidPassword')
    setPassword('')
  }
  return (
    <div className="AccountDelete">
      <div
        onClick={() => {
          deselectSetting()
          clearPreviousState()
        }}
        className="float-x"
      >
        <RemoveIcon color="var(--color-grey-dark-2)" size="8" />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{display: next ? 'none' : 'flex'}}
        className="accountPassword_form-oldPassword"
      >
        <h3>Enter Pasword</h3>
        <div className="accountPassword_form-oldPassword--input">
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="accountPassword_form-oldPassword--input--old new-password-input"
          />
          <button className="accountOldBtn" type="submit">
            click
          </button>
        </div>
      </form>

      <div style={{height: next ? '70%' : '0'}} className="AccountDelete_div">
        <div
          style={{display: next ? 'flex' : 'none'}}
          className="AccountDelete_div-flex"
        >
          <div className="AccountDelete_div-flex--text">
            <h3>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </h3>
          </div>

          <div className="AccountDelete_div-flex--buttons">
            <div
              onClick={() => {
                deselectSetting()
                clearPreviousState()
              }}
              className="accountNewBtn delete-btn"
            >
              <h3>cancel</h3>
            </div>
            <div
              onClick={() => {
                deleteUser({}, 'deleteUser')
                deselectSetting()
                clearPreviousState()
                setNext(!next)
                redirecting()
              }}
              style={{backgroundColor: 'var(--color-error)'}}
              className="accountNewBtn delete-btn"
            >
              <h3>delete</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    deselectSetting: () => dispatch(deselect()),
    isValidPassword: (data, option) => dispatch(newEntry(data, option)),
    deleteUser: (data, option) => dispatch(newEntry(data, option)),
    clearPreviousState: () => dispatch(clearMessage()),
    redirecting: () => dispatch(logout())
  }
}

const mapState = state => {
  return {passwordResponse: state.alerts.postedMessage}
}

export default connect(mapState, dispatchState)(AccountDelete)
