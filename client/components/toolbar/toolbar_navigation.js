import React from 'react'
import {ToolbarSearch, ToolbarUser, Logo} from '../../components'
const ToolbarNavigation = () => {
  return (
    <div className="toolbar_navigation">
      <Logo />
      <ToolbarSearch />
      <ToolbarUser />
    </div>
  )
}

export default ToolbarNavigation
