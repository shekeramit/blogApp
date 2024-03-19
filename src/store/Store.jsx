import { configureStore } from '@reduxjs/toolkit';
import Authenticate from '../slices/AuthSlice';


 const Store=configureStore({
    reducer:{
        auth:Authenticate
    }
})

export default Store;