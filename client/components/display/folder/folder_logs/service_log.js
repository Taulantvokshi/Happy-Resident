import React from 'react'
import {Fridge} from '../../../../icons/maintenance_icons'
import {connect} from 'react-redux'
import {deleteAssistances} from '../../../../store/archives'
import {selectedIcon, names} from '../../../../util/maintenance-generate-icons'
const ServiceLog = ({content, deleteItem}) => {
  const IconComponent = selectedIcon(content.appliance)
  return (
    <div className="singleServiceLog">
      <div className="singleServiceLog_icon">
        {names.includes(content.appliance) ? (
          <IconComponent size="40" color="var(--color-grey-dark-2)" />
        ) : (
          <h1>{content.appliance}</h1>
        )}
      </div>
      <div className="singleServiceLog_date">
        <h3>12/14/2019</h3>
        <h4>posted request</h4>
      </div>

      <div>
        <h3>Fridge</h3>
        <h4>appliance name</h4>
      </div>

      <div onClick={() => deleteItem(content.id)}>
        <h3 id="cancel-icon">cancel</h3>
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {deleteItem: id => dispatch(deleteAssistances(id))}
}

export default connect(null, dispatchState)(ServiceLog)
