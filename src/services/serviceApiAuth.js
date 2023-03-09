import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
});

export const signup = data => {
  return authInstance.post('/users/signup', data);
};

// const authInstance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// export const signup = async data => {
//   const { data: result } = await authInstance.post('/users/signup', data);
//   return result;
// };
