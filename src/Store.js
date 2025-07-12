import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Productslice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
