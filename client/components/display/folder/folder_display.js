/*eslint complexity:*/
import React, {useState, useEffect} from 'react'
import {ServiceLog, RentLog, FolderNavigation} from '../../../components'
import {UpIcon} from '../../../icons/icon_component'
import {getAllAssistances} from '../../../store/archives'
import {connect} from 'react-redux'

const FolderDisplay = ({displayCurrentRequests, getCurrentRequests}) => {
  let me = []
  for (let i = 0; i < 4; i++) {
    me.push(RentLog)
  }

  const [fullScreen, setFullScreen] = useState(false)
  const onClickHandler = () => {
    setFullScreen(!fullScreen)
  }

  useEffect(() => {
    getCurrentRequests()
  }, [])

  return (
    <div className="folderDisplay">
      <div className="rentLog" style={{height: fullScreen ? '94%' : '64%'}}>
        <div className="rentLog_sideButton">
          <h3>RENT LOGS</h3>
        </div>

        <div className="rentLog_display">
          <FolderNavigation />
          <div className="rentLog_display-rents">
            {me.map((Rent, i) => {
              return <Rent n={i} key={i + 'sass'} />
            })}
          </div>
          <div className="rentLog_display-fullScreen" onClick={onClickHandler}>
            {!fullScreen ? (
              <h3 className="full-screen">FULL SCREEN</h3>
            ) : (
              <h3 className="full-screen">LESS SCREEN</h3>
            )}
          </div>
        </div>
      </div>

      <div style={{height: fullScreen ? '5%' : '35%'}} className="servicedLog">
        <div onClick={onClickHandler} className="servicedLog_sideButton">
          {fullScreen ? (
            <UpIcon color="white" />
          ) : (
            <h3 style={{opacity: !fullScreen ? '1' : '0'}}>SERVICES</h3>
          )}
        </div>
        <div
          style={{
            visibility: !fullScreen ? 'visible' : 'hidden',
            opacity: !fullScreen ? '1' : '0',
            transition: 'opacity 0.2s, visibility 0.2s'
          }}
          className="servicedLog_display"
        >
          {displayCurrentRequests && displayCurrentRequests.length ? (
            displayCurrentRequests.map(item => {
              return <ServiceLog key={item.id} content={item} />
            })
          ) : (
            <div className="servicedLog_display-noRequest">
              <h1>No Request</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    getCurrentRequests: () => dispatch(getAllAssistances())
  }
}

const mapState = state => {
  return {
    displayCurrentRequests: state.archives.assisistances
  }
}

export default connect(mapState, dispatchState)(FolderDisplay)
