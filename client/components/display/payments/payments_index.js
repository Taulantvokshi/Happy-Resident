import React, {useState} from 'react'
import Checkout from './payment'
import MyApp from '../calendar/calendar'
const Payments = () => {
  const [getDate, setDate] = useState(new Date())

  const getSelectedDate = date => {
    setDate(date)
  }

  const month = getDate.toDateString()

  return (
    <div className="payments">
      <div className="payments_display">
        <div className="payments_display-calendar">
          <h1>Select the date for when you want to pay</h1>
          <MyApp getDate={getSelectedDate} />
          <h1>{month}</h1>
        </div>

        <div className="payments_display-checkout">
          <Checkout />
        </div>
      </div>
    </div>
  )
}

export default Payments
