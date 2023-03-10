import axios from 'axios';

// const authInstance = axios.create({
//   baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
// });

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await authInstance.post('./users/signup', data);
  setToken(result.token);
  // console.log(result);
  return result;
};

export const login = async data => {
  const { data: result } = await authInstance.post('./users/login', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export default authInstance;
