import React, {useState} from 'react'
import {Menu} from '../../icons/icon_component'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'

const ToolbarUser = ({handleClick, user}) => {
  const [hover, setHover] = useState(false)
  return (
    <div className="toolbar_navigation-user toolbar_user">
      <div className="box">
        <div onMouseEnter={() => setHover(true)} className="toolbar_user-menu">
          <Menu size="17" color="var(--color-grey-dark-3)" />
        </div>
        <div
          onMouseLeave={() => setHover(false)}
          style={{
            visibility: hover ? 'visible' : 'hidden',
            opacity: hover ? '1' : '0',
          }}
          className="box-options"
        >
          <div className="box-options_div">
            <div>
              <a href="https://www.linkedin.com/in/taulant-vokshi/">
                <h3>About</h3>
              </a>
            </div>
            {!user.id ? (
              <div>
                <Link to="/login">
                  <h3>Login</h3>
                </Link>
              </div>
            ) : (
              ''
            )}

            {user.id ? (
              <div onClick={handleClick}>
                <h3>Log out</h3>
              </div>
            ) : (
              <div>
                <Link to="/signup">
                  <h3>Sign up</h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="toolbar_user-info">
        {user.id ? (
          <p className="toolbar_user-info--name">
            {user.firstName === 'guest'
              ? 'Taulant Vokshi'
              : user.firstName + ' ' + user.lastName}
          </p>
        ) : (
          ''
        )}
        {user.id ? (
          <p className="toolbar_user-info--appartment">since 2018</p>
        ) : (
          <p className="toolbar_user-info--appartment">no user</p>
        )}
      </div>
    </div>
  )
}
const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  }
}
export default connect(mapState, mapDispatch)(ToolbarUser)
