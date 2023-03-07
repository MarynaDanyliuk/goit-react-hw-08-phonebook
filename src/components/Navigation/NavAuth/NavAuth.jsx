import { NavLink } from 'react-router-dom';

export const NavAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink> |
      <NavLink to="/login">Login</NavLink>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
    </div>
  );
};
