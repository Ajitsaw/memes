import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import memeReducer from "./features/Memes"
import setDark from './features/dark';
import isAlert from './features/Alert'

const store = configureStore({
  reducer: {
    savedMemes: memeReducer,
    darkState: setDark,
    setAlert: isAlert
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

