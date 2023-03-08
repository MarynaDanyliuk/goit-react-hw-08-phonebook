import css from '../LoginPage/LoginPage.module.css';

import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.page_title}>Login page</h2>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
