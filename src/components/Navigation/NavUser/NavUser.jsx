// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// useSelector,
// import { getUser } from '../../../redux/auth/auth-selectors';

import { logout } from '../../../redux/auth/auth-operations';

import css from './NavUser.module.css';

export const NavUser = () => {
  // const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.navigation}>
      {/* <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <span className={css.decoration_elem}>|</span> */}
      <button onClick={onLogout}>Logout</button>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
    </div>
  );
};
