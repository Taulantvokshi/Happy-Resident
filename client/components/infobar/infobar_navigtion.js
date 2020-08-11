import React from 'react'
import {connect} from 'react-redux'
const InfobarNavigation = ({user}) => {
  return (
    <div className="infobar_navigation">
      <div className="infobar_navigation-template">
        <div className="infobar_navigation-template--admin">
          <p id="infobar-info">tenant</p>
        </div>
        <div className="infobar_navigation-template--description">
          <p>RENT AMOUNT</p>
          <p>RENT INCRESE</p>
          <p>PAYMENT</p>
        </div>
      </div>
      <hr className="infobar_navigation-line" />
      <div className="infobar_navigation-details">
        <div className="infobar_navigation-details--box">
          <div className="infobar_navigation-details--box--image">
            {user.id ? (
              <img
                className="infobar_navigation-details--box--image-i"
                src={user.image}
              />
            ) : (
              <img
                className="infobar_navigation-details--box--image-i"
                src="/images/avatar.jpg"
              />
            )}
          </div>
          {user.id ? (
            <p>{`Appartment ${user.aptNumber}`}</p>
          ) : (
            <p>Appartment n/a</p>
          )}
        </div>
        <div className="infobar_navigation-details--info">
          {user.id ? (
            <p>{`$${Math.floor(Number(user.rentAmount / 100))}`}</p>
          ) : (
            <p>$0.000</p>
          )}
          {user.id ? (
            <p style={{color: '#ee6f57'}}>0.20%</p>
          ) : (
            <p style={{color: '#b6e6bd'}}>0%</p>
          )}

          {user.id ? <p>YES</p> : <p>N/A</p>}
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {user: state.user}
}
export default connect(mapState)(InfobarNavigation)
