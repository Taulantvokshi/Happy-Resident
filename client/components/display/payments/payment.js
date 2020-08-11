import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import {getPayment} from '../../../store/payments'
class Checkout extends React.Component {
  onToken = token => {
    this.props.getCurrentPayment(token)
  }
  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_42myZSXiZ2cWSHnJ5joTK0DH00mjLq4Oo5"
        amount={Number(this.props.user.rentAmount)}
        email={this.props.user.email}
        name="HappyResident"
        token={this.onToken}
      />
    )
  }
}

const dispatchState = dispatch => {
  return {getCurrentPayment: data => dispatch(getPayment(data))}
}
const mapState = state => {
  return {user: state.user}
}
export default connect(mapState, dispatchState)(Checkout)
