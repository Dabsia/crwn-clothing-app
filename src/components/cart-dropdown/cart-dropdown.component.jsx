import React from 'react'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropDown = ({cartItems, dispatch}) => {
    const navigate = useNavigate()

    const checkOutToPay = () => {
        
        navigate('/checkout')
        dispatch(toggleCartHidden())
    }
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(cartItem => (
         <CartItem key = {cartItem.id} name = {cartItem.name} imageUrl = {cartItem.imageUrl} quantity = {cartItem.quantity} price = {cartItem.price}/>
        )) :  <span className='empty-message'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick = {checkOutToPay}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)