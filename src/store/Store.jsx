import { configureStore } from '@reduxjs/toolkit';
import Authenticate from '../slices/AuthSlice';
import createBlog from '../slices/BlogSlice';


 const Store=configureStore({
    reducer:{
        auth:Authenticate,
        blog:createBlog,
    }
})

export default Store;