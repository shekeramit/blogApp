import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/BlogTake';
import Bannar from './Bannar';
import Blogcatogery from './Blogcategory';
import { Link } from 'react-router-dom';

export function Blogmain() {
  const dispatch = useDispatch();
  const { callouts, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(callouts);

  return (
    <div className="bg-gray-100">
      <Bannar />
      <Blogcatogery />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-5 lg:max-w-none lg:py-10">
            <div className="mt-2 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.blog_id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageUrl}
                      alt={''}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-2 font-bold text-lg text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.blogTitle}
                    </a>
                  </h3>
                  <p className="text-base text-gray-900">{callout.blogDescription.substring(0, 20) + '...'}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 mb-4 rounded-md" ><Link to={`/${callout.href}`}></Link> read more</button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

