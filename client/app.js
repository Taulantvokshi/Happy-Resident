import React, {useEffect} from 'react'
import {me} from './store'
import {connect} from 'react-redux'
import {Main} from './components'
// import Routes from './routes'

const App = ({logMe}) => {
  useEffect(() => {
    logMe()
  }, [])

  return (
    <div>
      <Main />
    </div>
  )
}

const dispatchState = dispatch => {
  return {logMe: () => dispatch(me())}
}
export default connect(null, dispatchState)(App)
