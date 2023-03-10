// import axios from 'axios';

import authInstance from './serviceApiAuth';

// const contactsInstance = axios.create({
//   baseURL: 'https://63fdea50cd13ced3d7c21a98.mockapi.io/contacts',
// });

export const getAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async data => {
  // const responce = await authInstance.post('/contacts', data);
  // console.log(responce.data);
  // return responce.data;
  const { data: result } = await authInstance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  console.log(data);
  return data;
};
