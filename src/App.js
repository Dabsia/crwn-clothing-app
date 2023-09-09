import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import { useSelector } from 'react-redux';

import './App.css'

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { selectCurrentUser } from './redux/user/user.selector';
// import { createStructuredSelector } from 'reselect';
// import { setCurrentUser } from './redux/user/user.actions';
import Hats from './pages/hats/hats.component';
import Jackets from './pages/jackets/jackets.component';
import Sneakers from './pages/sneakers/sneakers.component';
import Women from './pages/women/women.component';
import Men from './pages/men/men.component';
import Contact from './pages/contact/contact.component';
import Callback from './pages/callback';

// const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
// const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
// const ShopPage = lazy(() => import('./pages/shop/shop.component'));
// const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className='parentContainer' >

      <Header />
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>} >
          <Routes>


            <Route exact path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop/hats' element={<Hats />} />
            <Route path='/shop/jackets' element={<Jackets />} />
            <Route path='/shop/sneakers' element={<Sneakers />} />
            <Route path='/shop/women' element={<Women />} />
            <Route path='/shop/men' element={<Men />} />
            <Route path='call' element={<Callback />} />
            <Route
              path='/auth'
              exact
              element={
                isLoggedIn ?
                  (<Navigate to='/' />)
                  :
                  (<SignInAndSignUpPage />)} />


          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App