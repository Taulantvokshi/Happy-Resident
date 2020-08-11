import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {userLogin} from '../../store/user'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const LogIn = ({userLogIn}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [guest, setGuest] = useState(['', ''])
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDelay(!delay)
    }, 200)
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()
    if (guest[0] && guest[1]) {
      userLogIn(guest[0], guest[1])
    }
    userLogIn(email, password)
    setPassword('')
    setEmail('')
  }

  if (delay) {
    return (
      <div className="login_display">
        <div className="login">
          <div className="login_container">
            <div className="testing">
              <h6>
                you can
                <Link style={{textDecoration: 'none'}} to="/signup">
                  <span style={{color: 'red', fontSize: '1.2rem'}}>
                    sign-in
                  </span>
                </Link>
                here
              </h6>
            </div>

            <form onSubmit={handleSubmit} className="login_container-form">
              <div>
                <input
                  value={guest[0] || email}
                  name="email"
                  type="text"
                  className="form-input"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  value={guest[1] || password}
                  name="password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div
                onClick={() => {
                  setGuest(['guest@email.com', 'guest1guest'])
                }}
                id="guest"
              >
                <h1> Im a guest</h1>
              </div>
              <button className="form-input--button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="delay">
        <img className="delay-img" src="images/Loader.gif" />
      </div>
    )
  }
}
const dispatchState = dispatch => {
  return {
    userLogIn: (email, password) => dispatch(userLogin(email, password))
  }
}

export default connect(null, dispatchState)(LogIn)
