import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  mail:null ,
};



export const mailSlice = createSlice({
  name: 'mail',
  initialState,
 
  reducers: {
    selectedmail: (state,action) => {
      state.mail= action.payload;
    },
    deselect: (state) => {
      state.mail= null;
    },
   
  },
 
});

export const { selectedmail, deselec } = mailSlice.actions;
export const selectopenmail=(state)=> state.mail.mail;
export default mailSlice.reducer;


