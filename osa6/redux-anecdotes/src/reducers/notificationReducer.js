import { createSlice } from '@reduxjs/toolkit';

const initialState = 'This is initial notification';

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(state, action) {
      const notif = action.payload;
      state = notif;
      return state;
    },
    removeNotification(state, action) {
      state = '';
      return state;
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
