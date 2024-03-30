import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import group from "../assets/group.svg";
import {loginuser} from '../features/AuthSlice'
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState({
    emailAddress: "",
    password: ""});
  function handleChange(e){
    const { name, value} = e.target;
    setData({...Data, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // Constructing the data object to send to the backend
    const FormData = {
      emailAddress: Data.emailAddress,
      password: Data.password,
    };
    dispatch(loginuser(FormData));
      navigate('/')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-50 font-inter">
    <main className="flex flex-col w-full items-center justify-center flex-1 text-center">
      {/* Parent Container */}
      <div className="flex bg-white rounded-2xl shadow-2xl sm:py-2 md:py-10 lg:py-15">
        {/* Image section */}
        <div className=" p-2 hidden md:block">          
            <div className="">
              <h1 className="text-xl ml-2 text-left text-[#AEADAD]">Welcome to,<spna className="text-green-500">MyBlog App</spna></h1>
              <div className="mt-2 ml-4 text-[#848080]">
                <p className=" flex">Sign up for read and post</p>
                <p className=" flex">Blogs!<span className=" text-green-500 px-8 h-1  bg-green-300 mt-2 ml-2 rounded-2xl"></span></p>
              </div>
              <img src={group} />
            </div>
        </div>
        {/* Sign up */}
        <div className="flex-1 p-2 max-w-md mx-auto md:max-w-2xl">
          <h1 className="font-semibold mb-3 text-[#848080]">Log In</h1>
          {/* Email */}
          <div className="px-3 py-2 text-[#848080] flex-row-reverse">
            <label className="flex ml-11">Email Address</label>
            <input
              type="email"
              className="h-58 top-378 ml-11 pl-2 rounded-sm border border-gray-300 "
              placeholder="Enter your email address "
              name="emailAddress"
              value={Data.emailAddress}
              onChange={handleChange}
              style={{
                width: "420px",
                height: "50px",
                borderRadius: "8px",
                color: "black",
              }}/>
          </div>
          {/* password */}
          <div className=" rounded-2xl text-[#848080] flex  py-2 ">
            <div className="ml-14">
              <label className="flex">Password</label>
              <input
                type="password"
                className="h-58 top-378 pl-2 rounded-sm border border-gray-300 "
                placeholder="Enter your password"
                name="password"
                value={Data.password}
                onChange={handleChange}
                style={{
                  width: "420px",
                  height: "50px",
                  borderRadius: "8px",
                  color: "black",
                }}
              />
            </div>
          </div>
          {/* button */}
          <button className="py-2 ml-10 mt-3 bg-green-500  rounded-2xl" style={{width: "400px"}} onClick={handleSubmit}>log in</button>
          <div className="flex text-[#848080] py-2 ml-16">
            <hr className=" mt-3 ml-2" style={{ width: "180px", height: "2px" }}/><span>or</span><hr className=" mt-3" style={{ width: "180px", height: "2px" }}/>
          </div>
          <div className="text-[#848080] ml-10"><p>Do not have an account? <Link to={"/signup"}><span className=" text-green-500">Create Now</span></Link></p></div>       
        </div>
      </div>
  </main>
</div>
);
}
export default Login;
