import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

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

export const setNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch(addNotification(notification));
    setTimeout(() => {
      dispatch(removeNotification());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
