import React from 'react'
import {Search} from '../../icons/icon_component'
const ToolbarSearch = () => {
  return (
    <div className="toolbar_navigation-search">
      <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <button type="submit" className="search__button">
          <Search size="17" color="var(--color-grey-dark-3)" />
        </button>
      </form>
    </div>
  )
}

export default ToolbarSearch
