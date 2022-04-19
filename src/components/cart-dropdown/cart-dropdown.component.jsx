import React from 'react'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropDown = ({cartItems}) => {
    
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => (
         <CartItem key = {cartItem.id} name = {cartItem.name} imageUrl = {cartItem.imageUrl} quantity = {cartItem.quantity} price = {cartItem.price}/>
        ))
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown)