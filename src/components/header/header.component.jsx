import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { logoutUser } from '../../redux/auth/auth.actions';

import { useSelector, useDispatch } from 'react-redux';


const Header = ({ currentUser, hidden }) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    const logout = useCallback(() => {
        dispatch(logoutUser())
    }
        , [dispatch])
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {
                    isLoggedIn ? <div className='option' onClick={logout}>
                        SIGN OUT
                    </div>
                        :
                        <Link className='option' to='/auth'>SIGN IN</Link>
                }
                <CartIcon />

            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);