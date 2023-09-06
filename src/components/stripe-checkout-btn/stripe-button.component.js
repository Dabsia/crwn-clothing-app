import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const public_key = 'pk_test_51NmEOTJmddPTbupu8tk6rJIW7xP1l1ZONbLxBSzVlkLwUYMRt53zsNIPvx0Ml8985tG4VZPkmKVLQ89WbyvQHSCX002v9kDwS0'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress

            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={public_key}
        />
    )
}

export default StripeCheckoutButton