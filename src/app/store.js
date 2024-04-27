import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import expensesReducer from './expensesReducer';
import expensesSlice from './expensesSlice';
import authenticationSlice from './authenticationSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';

export const store = configureStore({
  reducer: {
    //expensesReducer:expensesReducer
    expensesSlice:expensesSlice,
    authenticationSlice:authenticationSlice

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(ToastMiddleware)
});
