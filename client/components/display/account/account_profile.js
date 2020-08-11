import React, {useEffect} from 'react'
import {AccountServices, UploadImage} from '../../../components'
//import {AddIcon} from '../../../icons/icon_component'
import serviceOptions, {allServices} from '../../../util/selected_service'
import {deselect} from '../../../store/assiaistance'
import {connect} from 'react-redux'

const UserProfile = ({service, user}) => {
  useEffect(() => {}, [])
  const SelectedComponent = serviceOptions(service)
  return (
    <div className="account_settings">
      <div className="account_settings_profile">
        <div className="account_settings_profile-imageBox">
          <img
            className="account_settings_profile-imageBox--image"
            src={user.image}
          />
          <div className="account_settings_profile-imageBox--addImage">
            <UploadImage />
          </div>
        </div>
        <div className="account_settings_profile-info">
          <h1 className="account_settings_profile-info--name">
            Taulant Vokshi
          </h1>
        </div>
        <div className="account_settings_profile--services">
          <AccountServices
            serviceName="Change Password"
            buttonName="Change"
            text="taulantus@gmail.com"
          />
          <AccountServices
            serviceName="Change other Information"
            buttonName="Other"
          />
          {/* <AccountServices serviceName="Add Phone Number" buttonName="Add" /> */}

          <AccountServices
            serviceName="Request to move out"
            buttonName="Options"
            color="#f4d143"
          />
          <AccountServices
            serviceName="Delete Account"
            buttonName="Delete"
            text="If you change your mind ask for resident code"
            color="#f6ad7b"
          />
        </div>
        <div
          style={{
            height: service && allServices.includes(service) ? '70%' : '0'
          }}
          className="modal"
        >
          {service && allServices.includes(service) ? (
            <SelectedComponent />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

const mapState = store => {
  return {
    service: store.assistance.service,
    user: store.user
  }
}
const dispatchState = dispatch => {
  return {deselectIcon: () => dispatch(deselect())}
}
export default connect(mapState, dispatchState)(UserProfile)
