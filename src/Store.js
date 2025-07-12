import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const Store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default Store;
