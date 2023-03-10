import { createSlice } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(login.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

console.log(authSlice);

// export const { addContact, deleteContact } = authSlice.actions;
export default authSlice.reducer;

// __________________________________________________________
//   .addCase(fetchAddContact.pending, store => {
//     store.isLoading = true;
//   })
//   .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
//     store.isLoading = false;
//     store.items.push(payload);
//   })
//   .addCase(fetchAddContact.rejected, (store, { payload }) => {
//     store.isLoading = false;
//     store.error = payload;
//   })
//   .addCase(fetchDeleteContact.pending, store => {
//     store.isLoading = true;
//   })
//   .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
//     store.isLoading = false;
//     const index = store.items.findIndex(item => item.id === payload);
//     store.items.splice(index, 1);
//   })
//   .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
//     store.isLoading = false;
//     store.error = payload;
//   });
