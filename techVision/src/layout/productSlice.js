import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      choosenObjectProduct: []
    },
    reducers: {
      addChoosenProduct: (state, action) => {
        return {
          ...state,
          choosenObjectProduct: [...state.choosenObjectProduct,action.payload]
        }
      },
      cleanProductCart: (state,action) =>{
        return{
          ...state,
          choosenObjectProduct:[]
        }
      }
    }

});

//exporto las ACCIONES.....
export const { addChoosenProduct, cleanProductCart } = productSlice.actions;

export const productData = (state) => state.product;

export default productSlice.reducer;



