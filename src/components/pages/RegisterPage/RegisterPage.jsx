import css from 'components/pages/RegisterPage/RegisterPage.module.css';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.page_title}>Register page</h2>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
