import React from 'react'
import {RemoveIcon} from '../../../../icons/icon_component'
import {deselect} from '../../../../store/assiaistance'
import {connect} from 'react-redux'

const AccountOther = ({deselectServiceClick}) => {
  return (
    <div className="accountOtherInfo">
      <div onClick={() => deselectServiceClick()} className="float-x">
        <RemoveIcon color="var(--color-grey-dark-2)" size="8" />
      </div>
      <h3>In Progress...</h3>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    deselectServiceClick: () => dispatch(deselect())
  }
}

export default connect(null, dispatchState)(AccountOther)
