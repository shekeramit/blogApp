import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateBlog } from '../features/BlogSend';
const Createblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState({
    blogTitle: "",
    blogDescription: "",
    imageUrl: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      const blogData = {
        blogTitle: Data.blogTitle,
        blogDescription: Data.blogDescription,
        imageUrl: Data.imageUrl,
      };
      dispatch(CreateBlog(blogData));
      if(Response){
        alert("Blog created Succesfully")
        navigate('/')
      }
  };

  return (
      <div className="container mx-auto mt-8">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl text-center font-bold mb-6">Create a New Blog</h2>
              <div className="mb-4">
                  <label htmlFor="blogTitle" className="block text-gray-700 font-bold mb-2">Blog Title</label>
                  <input
                      type="text"
                      id="blogTitle"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      placeholder="Enter your blog title"
                      value={Data.blogTitle}
                      name='blogTitle'
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="mb-4">
                  <label htmlFor="blogDescription" className="block text-gray-700 font-bold mb-2">Blog Description</label>
                  <textarea
                      id="blogDescription"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      placeholder="Enter your blog description"
                      rows="4"
                      name='blogDescription'
                      value={Data.blogDescription}
                      onChange={handleChange}
                      required
                  ></textarea>
              </div>
              <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL</label>
                  <input
                      type="text"
                      id="image"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      placeholder="Enter image URL"
                      name='imageUrl'
                      value={Data.imageUrl}
                      onChange={handleChange}
                  />
              </div>
              <button type="submit" className="bg-indigo-500 text-center text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors">Submit</button>
          </form>
      </div>
  );
};

export default Createblog;