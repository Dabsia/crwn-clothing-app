import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loading-icons';
import { userRegister } from '../../redux/auth/auth.actions';


import './sign-up.styles.scss';

const SignUp = () => {

  const dispatch = useDispatch()
  const message = useSelector(state => state.auth.message)

  const isLoading = useSelector(state => state.auth.isLoading)



  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const userRegData = {
    displayName, email, password
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (displayName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      alert('please fill in the form correctly')
    }
    else if (password !== confirmPassword) {
      alert('Password do not match')
    }
    else {
      dispatch(userRegister(userRegData))
    }

  }


  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          label='Display Name'
        // required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          label='Email'
        // required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          label='Password'
        // required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          label='Confirm Password'
        // required
        />
        <CustomButton type='submit'>{isLoading ? <TailSpin speed={.75} stroke="#000000" strokeOpacity={1} /> : 'SIGN UP'} </CustomButton>
      </form>
      <p className='messageWarning' >{message}</p>
    </div>
  );
}


export default SignUp;