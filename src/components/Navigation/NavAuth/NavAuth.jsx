import { NavLink } from 'react-router-dom';

import css from './NavAuth.module.css';

export const NavAuth = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <span className={css.decoration_elem}>|</span>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
    </div>
  );
};
