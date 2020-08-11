import React from 'react'
import {Link} from 'react-router-dom'

const FolderNavigation = () => {
  return (
    <div className="rentNavigation">
      <h4 className="rentNavigation-option-1 rent-nav-text">THIS YEAR</h4>
      <h4 className="rentNavigation-option-2 rent-nav-text">LAST YEAR</h4>
      <h4 className="rentNavigation-option-3 rent-nav-text">ALL TIME</h4>
      <h4 className="rentNavigation-option-4 rent-nav-text">LATE PAYMENTS</h4>
      <h4 className="rentNavigation-option-5 rent-nav-text">SEARCH</h4>
    </div>
  )
}

export default FolderNavigation
