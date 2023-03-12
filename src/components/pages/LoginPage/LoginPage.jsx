import css from '../LoginPage/LoginPage.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import initialState from '../../LoginForm/initialState';

import { LoginForm } from '../../LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operations';
import {
  isUserLogin,
  getAuth,
  // isUserLoaded,
  // errorLogin,
} from 'redux/auth/auth-selectors';

// import { isUserLoaded } from '../../../redux/auth/auth-selectors';

const LoginPage = () => {
  const [state, setState] = useState({ ...initialState });
  const isLogin = useSelector(isUserLogin);
  const isUserLoggedIn = useSelector(getAuth);
  // const isLoaded = useSelector(isUserLoaded);
  // const isError = useSelector(errorLogin);
  // console.log(isLogin);
  const dispatch = useDispatch();
  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
    dispatch(login({ email, password }));
    if (isLogin && !isUserLoggedIn.token) {
      alert(`User isn't register yet!`);
      setState({ email, password });
      return false;
    }
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

// if (isError) {
//   alert(`User isn't register yet!`);
//   setState(prevState => {
//     return { ...prevState, email, password };
//   });
//   // return <Navigate to="/login" />;
// }

// const handleLogin = data => {
//   dispatch(login(data));
// };

// if (isError) {
//   alert(`${email} isn't register yet!`);
//   // setState(email);
//   // console.log(state);
//   return false;
// }
// const { email, password } = state;
