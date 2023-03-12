import css from '../LoginForm/LoginForm.module.css';

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import useForm from 'services/useForm';

import initialState from './initialState';
import fields from './fields';

export const LoginForm = ({ onSubmit }) => {
  // console.log(initialState);

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
