import React, { useEffect, useRef } from "react";
import BlogPosts from "../components/Layout/BlogPosts";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Blog = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef} className="bg-silver pt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Best property dealership blogs in Mohali,Chandigarh
        </title>
        <meta
          name="description"
          content=" Find Best blog for property dealership in Mohali, Chandigarh and get best ideas on property investment and help you to sell or buy a property with less effort."
        />
        <meta
          name="keywords"
          content="Blog for real estate, Best blog about properties, Blogs for Buy and sell flats, blogs for real estate agents, blog ideas for real estate, Indian Real Estate Blog, Best Real Estate Blogs, Essential Real Estate Blogs"
        />
      </Helmet>
      <BlogPosts />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Blog;
