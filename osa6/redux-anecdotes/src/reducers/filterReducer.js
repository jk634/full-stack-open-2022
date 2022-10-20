import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action) {
      const filt = action.payload;
      state = filt;
      return state;
    },
  },
});

export const { addFilter } = filterReducer.actions;
export default filterReducer.reducer;
