import React, { useState } from "react";
import apple from "../assets/apple.svg";
import google_s from "../assets/google_s.svg";
import group from "../assets/group.svg";
function Signup() {
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    passwordError: "",
  });
  //on change function
  function handleChange(e){
    const { name, value} = e.target;
    setData({...Data, [name]: value });
  }
  // on Submit function
  async function handleSubmit(e) {
    e.preventDefault();
    if (Data.password !== Data.confirmPassword) {
      alert("Passwords do not match");
      setData({
        ...Data,
        passwordError: "Passwords do not match",
      });
      return; // Exit if passwords do not match.
    }
    // Constructing the data object to send to the backend
    const FormData = {
      firstName: Data.firstName,
      lastName: Data.lastName,
      emailAddress: Data.emailAddress,
      password: Data.password,
      confirmPassword: Data.confirmPassword,
      agreeToTerms: Data.agreeToTerms,
    };
    console.log(FormData);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-50 font-inter">
      <main className="flex flex-col w-full items-center justify-center flex-1 text-center">
        {/* Parent Container */}
        <div className="flex bg-white rounded-2xl shadow-2xl sm:py-2 md:py-10 lg:py-15">
          {/* Image section */}
          <div className=" p-4 hidden md:block">
            <div className=" mb-10">
              <div className=" h-6 ">
                <h1 className="text-xl text-left" style={{ color: "#AEADAD" }}>Welcome to,<spna className="text-green-500">MyBlog App</spna></h1>
                <div className="mt-2 ml-3 text-[#777777 ]">
                  <p className="   text-gray-400 flex">Sign up for read and post</p>
                  <p className=" text-gray-400 flex">Blogs!<span className=" text-green-500 px-8 h-1  bg-green-300 mt-3 ml-2 rounded-2xl"></span></p>
                </div>
                <img src={group} />
              </div>
            </div>
          </div>
          {/* Sign up */}
          <div className="flex-1 p-4 max-w-md mx-auto md:max-w-2xl">
            <h1 className="mb-3 font-semibold text-[#848080]">Sign Up</h1>
            {/* firstName lastname */}
            <div className=" rounded-2xl  flex py-2 ">
              <div className="ml-14 ">
                <p className="  text-gray-500 flex" style={{ color: "#848080" }}>First Name</p>
                <input
                  type="text"
                  className="h-58 top-378 pl-2 rounded-sm border border-gray-300 "
                  placeholder="Enter first name "
                  name="firstName"
                  value={Data.firstName}
                  onChange={handleChange}
                  style={{
                    width: "202px",
                    height: "37px",
                    borderRadius: "8px",
                    color: "black",
                  }}
                />
              </div>
              <div className="text-[#848080] px-3 ">
                <p className=" flex">Last Name</p>
                <input
                  type="text"
                  className="h-58 top-378 pl-2 rounded-sm border border-gray-300 "
                  placeholder="Enter last name "
                  name="lastName"
                  value={Data.lastName}
                  onChange={handleChange}
                  style={{
                    width: "202px",
                    height: "37px",
                    borderRadius: "8px",
                    color: "black",
                  }}
                />
              </div>
            </div>
            {/* Email */}
            <div className="  px-3  py-2 text-[#848080] flex-row-reverse">
              <label className="flex ml-11">Email Address</label>
              <input
                type="email"
                className="h-58 top-378 ml-4 pl-2 rounded-sm border border-gray-300 "
                placeholder="Enter your email address "
                name="emailAddress"
                value={Data.emailAddress}
                onChange={handleChange}
                style={{
                  width: "420px",
                  height: "37px",
                  borderRadius: "8px",
                  color: "black",
                }}/>
            </div>
            {/* password */}
            <div className=" rounded-2xl text-[#848080] flex  py-2 ">
              <div className="ml-14">
                <label className="flex" >Password</label>
                <input
                  type="password"
                  className="h-58 top-378 pl-2 rounded-sm border border-gray-300 "
                  placeholder="Enter 8 digit include"
                  name="password"
                  value={Data.password}
                  onChange={handleChange}
                  style={{
                    width: "202px",
                    height: "37px",
                    borderRadius: "8px",
                    color: "black",
                  }}
                />
              </div>
              <div className="px-3 text-[#848080]">
                <label className="text-gray-500  flex">Confirm Password</label>
                <input
                  type="password"
                  className="h-58 top-378 pl-2 rounded-sm border border-gray-300 "
                  placeholder="Confirm Password "
                  name="confirmPassword"
                  value={Data.confirmPassword}
                  onChange={handleChange}
                  style={{
                    width: "202px",
                    height: "37px",
                    borderRadius: "8px",
                    color: "black",
                  }}/>
              </div>
            </div>
            {/* button */}
            <button className="py-2 ml-4 mt-2 bg-green-500  rounded-2xl" style={{width: "400px"}} onClick={handleSubmit}>sign up</button>
            <div className="flex py-2 ml-16 text-[#848080]">
              <hr className="mt-3" style={{ width: "180px", height: "2px" }}/><span>or</span><hr className="mt-3" style={{ width: "180px", height: "2px" }}/>
            </div>
            <div className="flex mt-1 ml-11">
              <div className="  px-3 flex ml-2 rounded-lg border border-gray-300 " style={{ marginRight: "20px" }} >
                <img src={google_s} style={{ width: "25px", marginLeft: "-10px" }}/><label className=" text-black  text-sm mt-2"> Continue with Google</label>
              </div>
              <div className="  px-3  py-2 flex  rounded-lg border border-gray-300" style={{ marginRight: "40px" }}>
                <img src={apple} className="" style={{ width: "30px", marginLeft: "-20px" }} /><label className=" text-black  text-sm">Continue with Apple</label>
              </div>
            </div>         
          </div>
        </div>
    </main>
  </div>
);
}
export default Signup;
