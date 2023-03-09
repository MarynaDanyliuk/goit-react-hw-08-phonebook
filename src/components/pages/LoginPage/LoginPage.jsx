import css from '../LoginPage/LoginPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from '../../LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className={css.container}>
      <h2 className={css.page_title}>Login page</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
