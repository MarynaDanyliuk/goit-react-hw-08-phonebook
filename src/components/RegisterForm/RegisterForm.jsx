// import css from '../pages/RegisterPage/RegisterPage.module.css';

import TextField from 'components/TextField/TextField';
import useForm from 'services/useForm';
import initialState from './initialState';

export const RegisterForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <TextField />
      <TextField />
      <TextField />
    </form>
  );
};
