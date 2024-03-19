import React from 'react'
import Navbar from './Navbar'
import { Blogmain } from './Blogmain'
import Bannar from './Bannar';
import Blogcatogery from './Blogcategory';
import Pagination from './Pagination';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Bannar/>
        <Blogcatogery/>
        <Blogmain/>
        {/* <Pagination/> */}
    </div>
  )
}

export default Home