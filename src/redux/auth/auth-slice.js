import { createSlice } from '@reduxjs/toolkit';

import { signup } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLoaging: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLoaging = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
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
