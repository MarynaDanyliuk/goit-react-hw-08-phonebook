import css from '../LoginForm/LoginForm.module.css';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import useForm from 'services/useForm';

import initialState from './initialState';
import fields from './fields';

export const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* <TextField onChange={handleChange} {...fields.name} /> */}
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
