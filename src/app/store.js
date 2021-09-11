import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import loginReducer from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    login: loginReducer,
  },
});
