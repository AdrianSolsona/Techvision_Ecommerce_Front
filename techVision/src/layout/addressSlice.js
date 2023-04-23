import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
    name: 'address',
    initialState: {
      ChoosenAddress: {}
    },
    reducers: {
      addChoosenAddress: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
      
    }
    
});

//exporto las ACCIONES.....
export const { addChoosenAddress } = addressSlice.actions;

export const userAddress = (state) => state.address;

export default addressSlice.reducer;