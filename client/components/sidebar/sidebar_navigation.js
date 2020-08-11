import {
  Calendar,
  Home,
  Card,
  Folder,
  Wrench,
  User
} from '../../icons/icon_component'

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import isIconClicked from '../../util/navigation_icon'

const SidebarNavigation = ({currentUrl, isLoggedIn}) => {
  return (
    <div className="sidebar_navigation">
      <div className="sidebar_navigation-icons">
        {/* <Link to="/main">
          <div
            style={isIconClicked(currentUrl, 'main')}
            className="sidebar_navigation-icons--home"
          >
            <Home size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link>

        <Link to="/calendar">
          <div
            style={isIconClicked(currentUrl, 'calendar')}
            className="sidebar_navigation-icons--calendar"
          >
            <Calendar size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link> */}

        <Link to={isLoggedIn ? '/maintenance' : '/login'}>
          <div
            style={isIconClicked(currentUrl, 'maintenance')}
            className="sidebar_navigation-icons--wrench"
          >
            <Wrench size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link>

        <Link to={isLoggedIn ? '/folder' : '/login'}>
          <div
            style={isIconClicked(currentUrl, 'folder')}
            className="sidebar_navigation-icons--folder"
          >
            <Folder size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link>

        <Link to={isLoggedIn ? '/account' : '/login'}>
          <div
            style={isIconClicked(currentUrl, 'account')}
            className="sidebar_navigation-icons--user"
          >
            <User size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link>
        <Link to={isLoggedIn ? '/payments' : '/login'}>
          <div
            style={isIconClicked(currentUrl, 'payments')}
            className="sidebar_navigation-icons--card"
          >
            <Card size="17" color="var(--color-grey-dark-3)" />
          </div>
        </Link>
      </div>
    </div>
  )
}

const mapState = store => {
  return {
    currentUrl: store.navigation.url,
    isLoggedIn: !!store.user.id
  }
}

export default connect(mapState)(SidebarNavigation)
