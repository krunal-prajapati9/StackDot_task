import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, id: Date.now() });
    },

    
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
