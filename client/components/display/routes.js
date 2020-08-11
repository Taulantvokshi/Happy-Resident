//React
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import history from '../../history'
//Routes
import {withRouter, Route, Switch} from 'react-router-dom'
//Redux

import {connect} from 'react-redux'
import {navigationIconClicked} from '../../store/navigation'
//Local
import {
  LogIn,
  SignUp,
  Account,
  Maintenance,
  Payments,
  Home,
  Folder,
  Calendar,
  Raport
} from '../../components'

const Display = ({isLoggedIn, loadInitialData, historyUrl}) => {
  useEffect(
    () => {
      loadInitialData()
      historyUrl(history.location.pathname)
    },
    [history.location.pathname]
  )

  return (
    <section className="display">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={Maintenance} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/payments" component={Payments} />
            <Route path="/folder" component={Folder} />
            <Route path="/account" component={Account} />
          </Switch>
        )}
        <Route path="/" component={LogIn} />
      </Switch>
    </section>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    historyUrl: data => dispatch(navigationIconClicked(data)),
    loadInitialData() {
      // dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Display))

/**
 * PROP TYPES
 */
Display.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
