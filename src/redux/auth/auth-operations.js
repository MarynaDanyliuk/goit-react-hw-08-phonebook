import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/serviceApiAuth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);

      // {
      //   data: result;
      // }
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// { data: result }

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
