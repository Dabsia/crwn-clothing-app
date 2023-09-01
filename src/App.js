import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import './App.css'

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';

// const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
// const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
// const ShopPage = lazy(() => import('./pages/shop/shop.component'));
// const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>

        <Header />
        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>} >
            <Routes>


              <Route exact path='/' element={<HomePage />} />
              <Route path='/shop' element={<ShopPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route
                path='/signin'
                exact
                element={
                  this.props.currentUser ?
                    (<Navigate to='/' />)
                    :
                    (<SignInAndSignUpPage />)} />


            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);