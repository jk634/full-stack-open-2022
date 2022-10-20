import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <div />
  // <Provider store={store}>
  //   <App />
  // </Provider>
);
