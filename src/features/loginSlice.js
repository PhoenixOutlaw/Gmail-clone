import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  login:null ,
};



export const loginSlice = createSlice({
  name: 'login',
  initialState,
 
  reducers: {
    login: (state,action) => {
      state.login= action.payload;
    },
    logout: (state) => {
      state.login= null;
    },
   
  },
 
});

export const { login, logout } = loginSlice.actions;
export const selectlogin=(state)=> state.login.login;
export default loginSlice.reducer;

