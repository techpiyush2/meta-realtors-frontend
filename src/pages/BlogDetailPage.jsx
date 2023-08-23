import React, { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";
import BlogDetail from "../components/Data/BlogDetail";
import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";

import { useBlogDetailMutation} from "../redux/services/blogSlice";

const BlogDetailPage = () => {
  
  const {blogId} = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [resData, setResData] = useState({});

  const [blogDetail] = useBlogDetailMutation();
  
  useEffect(()=>{
    const handleSubmit = async () => {
      setIsLoading(true);
  
      try {
        let dataToBeSend = {blogId}
        const res = await blogDetail(dataToBeSend).unwrap();
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
        setResData(res.data)
      } catch (error) {
        console.log('error',error);
      }
      setIsLoading(false);
    };
  
    handleSubmit()
    
  },[])
  

  return (
    <Fragment>
      
      <section
        className="mx-auto bg-silver px-2 md:px-8 lg:px-20 py-20 pt-20 md:py-8"
      >
        <div className="my-6">
          {!isLoading && (
            <BlogDetail
              key={resData?._id}
              type={resData?.type}
              image={resData?.image}
              id={resData?._id}
              description={resData?.description}
              title={resData?.title}
            />
          )}
          {isLoading && <Loader />}
          {/* {!isLoading && data.length === 0 && <Error />} */}
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default BlogDetailPage;
