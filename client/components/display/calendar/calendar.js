import React, {Component, useState, useEffect} from 'react'
import Calendar from 'react-calendar'

const MyApp = ({getDate}) => {
  const [currDate, setCurrDate] = useState(new Date())
  const onChange = date => {
    setCurrDate(date)
    getDate(date)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={currDate} />
    </div>
  )
}

export default MyApp
