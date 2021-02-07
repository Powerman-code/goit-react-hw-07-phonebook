import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
