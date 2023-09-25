import React, { Fragment } from "react";
import OurServiceImage from "../../assets/hero2.png";
import { MdOutlineEast } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Consult = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32 mb-16">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Consult with the best property dealer in{" "}
            <span className="text-blue">Mohali</span>
          </h1>
          <p className="text-center text-ash">
            Meta Realtors is a team of trusted & expert property dealers in
            Mohali for your all real estate needs.
          </p>
          <p className="text-center text-ash">
            Our expertise, reputation and high-end services will help multiply
            your objectives
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="px-auto w-1/3 lg:px-10 lg:mr-6 md:pl-0 lg:pl-0">
            <img className="h-full min-[400px] max-[500px]::" src={OurServiceImage} alt="Scraper" />
          </div>
          <div className="mt-10 lg:mt-0 lg:mx-10">
            <h3 className="flex items-center font-Poppins text-ash  text-1xl ">
              <MdOutlineEast className="text-ash mr-8" />
              OUR SERVICES
            </h3>

            <h1 className="font-Poppins text-blue font-bold text-2xl py-2">
              Your Comfort Is Our Priority
            </h1>
            <p className="font-Poppins text-ash mb-4">
            Discover a new level of comfort in our meticulously crafted properties, where luxury and tranquility seamlessly intertwine to create an extraordinary living experience :
            </p>
            <div className="flex mt-2">
              <div className="pr-5">
                <h2 className="flex items-center text-ash mb-2">
                  <BsCheckSquareFill className="text-blue mr-2" /> Transparency
                </h2>
                <p className="font-Poppins text-ash mb-4">
                  Nothing is hidden from our clients. Our staff freely offers
                  all of the information, statistics, and insights that will
                  assist you in making the best decision.
                </p>
                <h2 className="flex items-center text-ash ">
                  <BsCheckSquareFill className="text-blue mr-2" />
                  Trust
                </h2>
                <p className="font-Poppins text-ash mb-4">
                  We are the most trusted real estate dealers in Mohali because
                  of our successful sales transactions and excellent customer
                  feedback.
                </p>

                <h2 className="flex items-center text-ash mb-2">
                  <BsCheckSquareFill className="text-blue mr-2" /> Service
                </h2>
                <p className="font-Poppins text-ash mb-4">
                  We communicate with our clients on a regular basis. We give
                  them sound advice and support them throughout the process.
                </p>
              </div>
            </div>
            <div className=" pt-6">
              <button className=" bg-blue text-white font-bold text-md px-8 py-3 rounded-lg shadow-lg">
                <Link to="/listings">See More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Consult;
