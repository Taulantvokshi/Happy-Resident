import React, {useState} from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/dist/style.css'
import {connect} from 'react-redux'
import {newEntry} from '../../../../store/alerts'
import {deselect} from '../../../../store/assiaistance'
import {RemoveIcon} from '../../../../icons/icon_component'
const AccountPhone = ({updatePhone, deselectSetting}) => {
  const [number, setNumber] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    updatePhone(number, 'newPhoneNumber')

    if (number.length === 17) {
      deselectSetting()
    }
    setNumber('')
  }

  return (
    <div onSubmit={handleSubmit} className="accountPhone">
      <form className="accountPhone_form">
        <div
          onClick={() => {
            deselectSetting()
            setNumber('')
          }}
          className="float-x"
        >
          <RemoveIcon color="var(--color-grey-dark-2)" size="8" />
        </div>
        <div className="accountPhone_form-div">
          <h3 style={{marginBottom: '0.5rem'}}>Enter Phone number</h3>
          {/* <PhoneInput
            inputStyle={{color: 'inherit'}}
            onChange={value => setNumber(value)}
            className="new-password-input"
            defaultCountry="us"
            value={number}
            disableDropdown={true}
            disableSearchIcon={true}
            countryCodeEditable={false}
          /> */}
        </div>
        <div className="accountPhone_form-button">
          <button className="accountNewBtn" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    updatePhone: (data, option) => dispatch(newEntry(data, option)),
    deselectSetting: () => dispatch(deselect())
  }
}

export default connect(null, dispatchState)(AccountPhone)
