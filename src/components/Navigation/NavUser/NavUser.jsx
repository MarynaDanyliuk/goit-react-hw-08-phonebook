import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selectors';

import { logout } from '../../../redux/auth/auth-operations';

import css from './NavUser.module.css';

export const NavUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.navigation}>
      <p className={css.user_email}>{email}</p>
      <button className={css.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
