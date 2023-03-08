import css from '../RegisterForm/RegisterForm.module.css';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import useForm from 'services/useForm';

import initialState from './initialState';
import fields from './fields';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button>Register</Button>
    </form>
  );
};
