import css from './Navigation.module.css';

import { useSelector } from 'react-redux';

import { isUserLogin } from '../../redux/auth/auth-selectors';

// import { UserMenu } from '../UserMenu';
import { NavAuth } from 'components/Navigation/NavAuth/NavAuth';
import { NavUser } from 'components/Navigation/NavUser/NavUser';

export const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={css.container}>
      {!isLogin && <NavAuth />}
      {isLogin && <NavUser />}
    </div>
  );
};
