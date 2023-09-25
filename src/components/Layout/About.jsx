import React, { Fragment } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-16 mb-16">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
          <span className="text-blue">Meta Realtors</span> - Making Property searching a enjoyable experience.
          </h1>
          <p className="text-left text-ash">
          Meta Realtors is the No. 1 Real Estate Company of Mohali. We value integrity, openness, commitment, and professionalism as the top real estate brokers in Mohali. In our daily interactions with our clients, we illustrate our basic principles. Numerous clients choose us for their real estate needs because of our dedication and reactivity. We operate in all areas of Tri City, Starting from Mohali, Kharar, Kurali, Zirakpur, Panchkula and Chandigarh. We are into Real Estate business since 8 years. We majorly deal in investments and sale-purchase of : 
          </p>  
         
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
         
          <div className=" lg:mt-0 lg:mx-5">
          
            <div className="flex ">
              <div className="m-8">

               
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" />
                  Plots
                </h2>
               
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Flats
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Modern Living Villa's
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Kothi
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Commercial
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Showrooms
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Booth

                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Industrial Plots

                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Agriculture Land

                </h2>
                
              </div>
            </div>
            <div className=" pt-6">
              <button className=" bg-blue text-white font-bold text-md px-8 py-3 rounded-lg shadow-lg">
               <Link to="/listings" > See More</Link>
              </button>
            </div>
          </div>
        </div>
        
        <h1 className="font-Poppins font-bold text-3xl text-left mt-8">About The Owner
          </h1>
          <p className="text-left text-ash my-4 ">
The proprietor of Meta Realtors is Vishal Vij. He has more than eight years of real estate expertise and has worked with many different clients and companies. He is regarded as the best broker in Mohali and is renowned for providing frank real estate advice and extensive market knowledge. His commitment to clients, responsibility, and honesty are key factors in his success. Young, energetic real estate professionals that are committed and passionate about their career help him.
He has aided thousands of families and companies in realizing their aspirations. In order to better serve his clients, he works with the most recent technology and tools. Vishal approaches every real estate transaction, no matter how big or little, with patience, tenacity, honesty, and integrity.
          </p>  
      </section>
    </Fragment>
  );
};

export default About;
