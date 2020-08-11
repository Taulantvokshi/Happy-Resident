import React, {useState, useEffect} from 'react'
import {newEntry} from '../../../../store/alerts'
import {deselect} from '../../../../store/assiaistance'
import {RemoveIcon} from '../../../../icons/icon_component'
import {connect} from 'react-redux'

const AccountRequest = ({movingRequest, deselectSetting, isValidRequest}) => {
  const date =
    new Date().getFullYear() + '-' + Number(new Date().getMonth() + 1)

  const [month, setMonth] = useState('')
  const [text, setText] = useState('')
  useEffect(
    () => {
      if (isValidRequest.status) {
        deselectSetting()
      }
    },
    [isValidRequest.status]
  )

  const handleOnChange = ev => {
    ev.preventDefault()

    if (!month)
      movingRequest({date: date, description: text}, 'newMovingRequest')
    else movingRequest({date: month, description: text}, 'newMovingRequest')

    setMonth('')
    setText('')
  }
  return (
    <div className="AccountRequest">
      <div
        onClick={() => {
          deselectSetting()
          setMonth('')
          setText('')
        }}
        className="float-x"
      >
        <RemoveIcon color="var(--color-grey-dark-2)" size="8" />
      </div>
      <form onSubmit={handleOnChange} className="AccountRequest_form">
        <div className="AccountRequest_form_input">
          <label>Enter month and year</label>
          <input
            onChange={ev => setMonth(ev.target.value)}
            value={month || date}
            name="month"
            className="AccountRequest_form_input--month"
            type="month"
          />
        </div>

        <div className="AccountRequest_form_textarea">
          <label>Tell us the reson for leaving</label>
          <textarea
            onChange={ev => setText(ev.target.value)}
            value={text}
            name="text"
            rows="10"
            cols="57"
            className="AccountRequest_form_textarea--text"
            type="areatext"
            placeholder="Details..."
          />
        </div>
        <div className="AccountRequest_form_button">
          <button className="accountNewBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    movingRequest: (data, option) => dispatch(newEntry(data, option)),
    deselectSetting: () => dispatch(deselect())
  }
}

const mapState = state => {
  return {isValidRequest: state.alerts.postedMessage}
}

export default connect(mapState, dispatchState)(AccountRequest)
