import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

console.log(filterSlice);

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
