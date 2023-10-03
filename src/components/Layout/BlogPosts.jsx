import React, { Fragment, useEffect,useState } from "react";
import BlogItems from "../Data/BlogItems";
import Error from "../UI/Error";
import Loader from "../UI/Loader";
import { ToastContainer, toast } from 'react-toastify';

import { useBlogListMutation} from "../../redux/services/blogSlice";

const BlogPosts = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState([]);

  const [blogList] = useBlogListMutation();
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsLoading(true);
  
      try {
        const res = await blogList({isActive : true}).unwrap();
        if(res.code===200){
          toast.success(res.message)
        }else{
          toast.error(res.message)
        }

          
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
        
        setResData(res.data)
      } catch (error) {
        console.log('error',error);
        toast.error('Network Error')
        
      }
      setIsLoading(false);
    };
    
    handleSubmit()
    
  },[])
  
  const mappedList = resData?.map((blog) => {
    return (
      <BlogItems
        key={blog._id}
        id={blog._id}
        title={blog.title}
        date={blog.blogyr}
        image={blog.image}
      />
    );
  });

  return (
    <Fragment>
        <ToastContainer />
      
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-center px-auto">
          <div className="mb-8">
            <h1 className="font-Poppins font-bold text-4xl text-center mb-3">
              Latest Information From Our{" "}
              <span className="text-blue">Blog</span>
            </h1>
            <p className="text-center text-ash text-base">
              Stay up to date with all the information about our listed
              properties.
            </p>
          </div>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap">
          {isLoading && <Loader />}
          {!isLoading && mappedList}
          {/* {!isLoading && mappedList.length === 0 && <Error />} */}
        </ul>
      </section>
    </Fragment>
  );
};

export default BlogPosts;