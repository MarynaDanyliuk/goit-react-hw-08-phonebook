import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { current } from '../../redux/auth/auth-operations';

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: `column`,
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        color: '#010101',
      }}
    >
      {children}
    </div>
  );
};
