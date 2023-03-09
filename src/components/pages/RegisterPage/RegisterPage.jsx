import css from 'components/pages/RegisterPage/RegisterPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.container}>
      <h2 className={css.page_title}>Register page</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
