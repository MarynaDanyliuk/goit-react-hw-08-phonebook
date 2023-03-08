import css from '../RegisterForm/RegisterForm.module.css';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import useForm from 'services/useForm';

import initialState from './initialState';
import fields from './fields';

export const RegisterForm = ({ onSubmit }) => {
  // state, setState,
  const { handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  return (
    <form className={css.register_form} onSubmit={handleSubmit}>
      <TextField onChange={handleChange} {...fields.name} />
      <TextField onChange={handleChange} {...fields.email} />
      <TextField onChange={handleChange} {...fields.password} />
      <Button>Register</Button>
    </form>
  );
};
