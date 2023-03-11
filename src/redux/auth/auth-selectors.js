export const isUserLogin = ({ auth }) => auth.isLogin;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getUser = ({ auth }) => auth.user;

export const selectIsRefreshing = ({ auth }) => auth.selectIsRefreshing;

// console.log(isUserLogin);
