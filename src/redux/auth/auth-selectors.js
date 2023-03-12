export const isUserLogin = ({ auth }) => auth.isLogin;
export const isUserLoaded = ({ auth }) => auth.loading;
export const errorLogin = ({ auth }) => auth.error;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getUser = ({ auth }) => auth.user;

// export const selectIsRefreshing = ({ auth }) => auth.selectIsRefreshing;
