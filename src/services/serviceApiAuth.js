import axios from 'axios';

// const authInstance = axios.create({
//   baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
// });

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signup = data => {
  return authInstance.post('./users/signup', data);
};

export const login = data => {
  return authInstance.post('./users/login', data);
};

// export const signup = async data => {
//   const { data: result } = await authInstance.post('/users/signup', data);
//   return result;
// };
