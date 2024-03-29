import { configureStore } from '@reduxjs/toolkit';
import Authenticate from '../features/AuthSlice';
import createBlog from '../features/BlogSend';
import takeBlog from '../features/BlogTake';



 const Store=configureStore({
    reducer:{
        auth:Authenticate,
        blog:createBlog,
        blogs:takeBlog,
    }
})

export default Store;