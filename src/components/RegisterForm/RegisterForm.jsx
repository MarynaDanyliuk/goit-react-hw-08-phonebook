import css from '../RegisterForm/RegisterForm.module.css';

import TextField from 'components/TextField/TextField';
import useForm from 'services/useForm';
import initialState from './initialState';
import fields from './fields';

export const RegisterForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  return (
    <form className={css.register_form} onSubmit={handleSubmit}>
      <TextField onChange={handleChange} {...fields.name} />
      <TextField onChange={handleChange} {...fields.email} />
      <TextField onChange={handleChange} {...fields.password} />
    </form>
  );
};
