import React, {useState, useRef, useEffect} from 'react'
import generateIcons from '../../../util/maintenance-generate-icons'
import {applianceSelect} from '../../../store/assiaistance'
import {MaintenanceForm} from '../../../components'
import {connect} from 'react-redux'

const IconBox = ({clickedIcon}) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    const selectedIcon = e.currentTarget.children[0].textContent
    setClicked(!clicked)
    clickedIcon(selectedIcon)
  }

  const getClickBack = () => {
    setClicked(!clicked)
  }
  const allIcons = generateIcons()
  return (
    <div className="maintenance_box">
      {allIcons.map((icon) => {
        return (
          <div
            onClick={handleClick}
            key={Date.now().toString() + icon.classNames}
            className={icon.classNames + ' ' + icon.boxIcon}
          >
            <p className={icon.iconText}>{icon.iconName}</p>
            <icon.iconComponent color="var(--color-grey-dark-2)" size="60" />
          </div>
        )
      })}
      <div
        style={{
          height: clicked ? '115%' : '0',
          visibility: clicked ? 'visible' : 'hidden',
        }}
        className="maintenance_more"
      >
        <div
          className="maintenance_more-form"
          style={{
            visibility: clicked ? 'visible' : 'hidden',
            opacity: clicked ? '1' : '0',
          }}
        >
          <MaintenanceForm getClickBack={getClickBack} />
        </div>
      </div>
    </div>
  )
}
const dispatchState = (dispatch) => {
  return {clickedIcon: (data) => dispatch(applianceSelect(data))}
}
export default connect(null, dispatchState)(IconBox)
