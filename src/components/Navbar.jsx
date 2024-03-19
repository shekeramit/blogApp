import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleLogout = () => {
    navigate('/login');
    console.log('Logout clicked');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <nav className={`bg-gray-800 p-4 ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">MyBlog App</div>
          <div className="flex space-x-4">
          <button className="focus:outline-none" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r-md">Search</button>
         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md" > <Link to={'/createblog'}>Create New</Link></button>
            <div className="relative">
              <button
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleDropdown}
              ><img
                        className="h-8 w-8 rounded-full"
                        src="https://lh3.googleusercontent.com/a/ACg8ocJxVFpM5I5NjMqfCWUBmCK5--Jaqr-vkzxJjDxxbgNTxZyI=s96-c-rg-br100"
                        alt=""
                      />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    View Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Settings
                  </a>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
