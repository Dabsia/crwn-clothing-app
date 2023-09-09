import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/auth/auth.actions';

import './sign-in.styles.scss';

const SignIn = () => {

  const message = useSelector(state => state.auth.loginMessage)

  const dispatch = useDispatch()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const userLoginData = {
    email, password
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email.length === 0 || password.length === 0) {
      alert('please fill in the form correctly')
    }
    else {
      dispatch(userLogin(userLoginData))
    }

  }


  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
      <p className='messageWarning' >{message}</p>
    </div>
  );
}


export default SignIn;