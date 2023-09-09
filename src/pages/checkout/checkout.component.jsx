import React from 'react'
import './checkout.styles.scss'
import { connect, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-checkout-btn/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Desciption</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                })
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            {
                total > 0 && isLoggedIn &&
                <><div className='textWarning' >
                    *Please use the following test credit card for payments
                    <br />
                    4242 4242 4242 4242 -Exp: 12/34 - cvv: 123
                </div>

                    <StripeCheckoutButton price={total} />
                </>
            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)