import React, {useState} from 'react'
import {connect} from 'react-redux'
import {deselect} from '../../../store/assiaistance'
import {newEntry} from '../../../store/alerts'
import {RemoveIcon} from '../../../icons/icon_component'
const MaintenanceForm = ({
  postAssistance,
  selected,
  deselectIcon,
  getClickBack
}) => {
  const [appliance, setAppliance] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleEvent = evt => {
    evt.preventDefault()

    if (!appliance)
      postAssistance({appliance: selected, date, description}, 'newAssistance')
    else postAssistance({appliance, date, description}, 'newAssistance')

    setDate('')
    setDescription('')
    setAppliance('')

    evt.target.appliance.value = ''
    evt.target.description.value = ''
    evt.target.date.value = ''

    deselectIcon()
    getClickBack()
  }

  return (
    <div className="maintenance_nav">
      <div className="maintenance_nav_description">
        <h1>Tell us more!</h1>
        <div
          onClick={() => {
            getClickBack()
          }}
          className="maintenance_nav_description-icon"
        >
          <RemoveIcon color="var(--color-grey-dark-2)" size="8" />
        </div>
      </div>

      <form onSubmit={handleEvent} className="maintenance_nav_form">
        <input
          onChange={e => {
            setAppliance(e.target.value)
          }}
          value={appliance || selected}
          disabled={!!selected}
          name="appliance"
          placeholder="what appleance is broken"
          className="maintenance_nav_form-input"
        />
        <div className="date-div">
          <label style={{fontSize: '0.8rem'}}>
            <span style={{color: 'orangered'}}>*</span>if you dont provide a
            date, we will come to fix the isue any day.
          </label>
          <input
            onChange={e => {
              setDate(e.target.value)
            }}
            value={date}
            name="date"
            type="date"
            className="maintenance_nav_form-input"
          />
        </div>
        <textarea
          onChange={e => {
            setDescription(e.target.value)
          }}
          value={description}
          placeholder="give us more details"
          className="maintenance_nav_form-textArea"
          rows="9"
          cols="35"
          name="description"
          id="textArea"
        />
        <button className="maintenance_nav_form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = store => {
  return {selected: store.assistance.service}
}
const dispatchState = dispatch => {
  return {
    postAssistance: (request, option) => dispatch(newEntry(request, option)),
    deselectIcon: () => dispatch(deselect())
  }
}
export default connect(mapStateToProps, dispatchState)(MaintenanceForm)
