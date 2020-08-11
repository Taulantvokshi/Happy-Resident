import React from 'react'

const RentLog = ({n}) => {
  return (
    <div className="singleRentLog">
      <div className="singleRentLog_month">
        <h3>Novermber</h3>
        {/* <h5> Date </h5> */}
      </div>

      <div className="singleRentLog_date">
        <h3>2/3/1990</h3>
        <h5> Date of payment </h5>
      </div>

      <div className="singleRentLog_late">
        <h3> 3 DAYS </h3>
        <h5> Late Payment </h5>
      </div>

      <div className="singleRentLog_amount">
        <h3>$2600</h3>
        {/* <h5>Rent Amount </h5> */}
      </div>
    </div>
  )
}

export default RentLog
