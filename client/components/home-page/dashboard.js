import React, {useEffect} from 'react'
import {Display, Infobar, Sidebar, Toolbar} from '../../components'
import {me} from '../../store'
import {connect} from 'react-redux'
const Dashboard = ({logMe, user}) => {
  useEffect(() => {
    logMe()
  }, [])
  return (
    <div className="dashboard">
      <div className="empty_space" />
      <Toolbar />
      <Sidebar />
      <Infobar />
      <Display currUser={user} />
    </div>
  )
}
const dispatchState = dispatch => {
  return {logMe: () => dispatch(me())}
}

const mapState = store => {
  return {user: store.user}
}
export default connect(mapState, dispatchState)(Dashboard)
