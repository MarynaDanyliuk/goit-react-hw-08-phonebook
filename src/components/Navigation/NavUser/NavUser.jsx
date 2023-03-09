// import { NavLink } from 'react-router-dom';

import css from './NavUser.module.css';

export const NavUser = () => {
  return (
    <div className={css.navigation}>
      {/* <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <span className={css.decoration_elem}>|</span> */}
      <button>Logout</button>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
    </div>
  );
};
