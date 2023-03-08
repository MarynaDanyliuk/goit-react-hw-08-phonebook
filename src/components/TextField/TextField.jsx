import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from '../TextField/TextField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
