import css from './Navigation.module.css';

// import { UserMenu } from '../UserMenu';
import { NavAuth } from 'components/Navigation/NavAuth/NavAuth';

export const Navigation = () => {
  return (
    <div className={css.container}>
      {/* <UserMenu /> */}
      <NavAuth />
    </div>
  );
};
