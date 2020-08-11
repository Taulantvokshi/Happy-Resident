/*eslint complexity:*/
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {RemoveIcon} from '../../../../icons/icon_component'
import {deselect} from '../../../../store/assiaistance'
import {newEntry, clearMessage} from '../../../../store/alerts'

const AccountPassword = ({
  deselectSetting,
  isPasswordValid,
  passwordResponse,
  clearPreviousState
}) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatPasswordBorder, setBorder] = useState(false)
  const [next, setNext] = useState('false')

  useEffect(
    () => {
      if (passwordResponse.status) {
        setNext(!next)
      }
    },
    [passwordResponse.status]
  )

  const handleClick = e => {
    e.preventDefault()
    isPasswordValid(password, 'isValidPassword')
    setPassword('')
  }

  const handleClickNewPassword = e => {
    e.preventDefault()
    if (newPassword !== repeatPassword) {
      setBorder(true)
    } else {
      isPasswordValid(newPassword, 'newPassword')
      deselectSetting()
      setNewPassword('')
      setRepeatPassword('')
      setBorder(false)
    }
  }

  const style = {
    padding: !next ? '0.7rem 2rem' : '0',
    display: !next ? 'block' : 'none'
  }
  const newPasswordStyle = {height: !next ? '100%' : '0px'}
  const hiddeDiv = {display: !next ? 'block' : 'none'}

  return (
    <div className="accountPassword">
      <div className="accountPassword_form">
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
          onSubmit={handleClick}
          style={{display: !next ? 'none' : 'flex'}}
          className="accountPassword_form-oldPassword"
        >
          <h3>Enter Pasword</h3>
          <div className="accountPassword_form-oldPassword--input">
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="accountPassword_form-oldPassword--input--old new-password-input"
            />
            <button className="accountOldBtn" type="submit">
              check
            </button>
          </div>
        </form>

        <form
          onSubmit={handleClickNewPassword}
          style={newPasswordStyle}
          className="accountPassword_form-newPassword"
        >
          <div className="accountPassword_form-newPassword-box">
            <div className="accountPassword_form-newPassword-box-input1">
              <h3 style={hiddeDiv}>New Password</h3>
              <input
                onChange={e => setNewPassword(e.target.value)}
                value={newPassword}
                style={style}
                className=" password-input"
              />
            </div>
            <div className="accountPassword_form-newPassword-box-input2">
              <h3 style={hiddeDiv}>Repeat new Password</h3>
              <input
                onChange={e => setRepeatPassword(e.target.value)}
                value={repeatPassword}
                style={{
                  ...style,
                  border: repeatPasswordBorder ? 'solid 2px red' : ''
                }}
                className=" password-input"
              />
            </div>
          </div>

          <div className="accountPassword_form-buttons">
            <button
              style={{display: !next ? 'block' : 'none'}}
              className="accountPassword_form-buttons-button1 accountNewBtn"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapState = state => {
  return {passwordResponse: state.alerts.postedMessage}
}
const dispatchState = dispatch => {
  return {
    deselectSetting: () => dispatch(deselect()),
    isPasswordValid: (password, option) => dispatch(newEntry(password, option)),
    clearPreviousState: () => dispatch(clearMessage())
  }
}

export default connect(mapState, dispatchState)(AccountPassword)
