import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/serviceApiAuth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signup(data);
      // console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// export const fetchAddContact = createAsyncThunk(
//   'contacts/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addContact(data);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/delete',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.deleteContact(id);
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );
