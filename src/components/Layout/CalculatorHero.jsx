import React from "react";
import hero from "../../assets/home2.jpg";
import { Link } from "react-router-dom";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
  
  } from "react-icons/fa";

const Hero = () => {
    
    const socialIcons = [
        { id: 1, icon: <FaTwitter /> },
        {
          id: 2,
          icon: <FaFacebookF />,
          link: "https://www.facebook.com/metarealtors/",
        },
        {
          id: 3,
          icon: <FaInstagram />,
          link: "https://www.instagram.com/metarealtors3/",
        },
        {
          id: 4,
          icon: <FaYoutube />,
          link: "https://www.youtube.com/@metarealtors1020/featured",
        },
      ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <p className="md:leading-normal  leading-10 text-blue font-bold">
            <span className="text-blue">
            Reach your home ownership goals with our help.
            <br /> Partner with us to make your dream a reality.
        
        </span>
          </p>
          <h4 className="md:text-2xl text-lg md:leading-normal  leading-5 mt-4 font-bold text-black">
          Home loans that fulfil your needs
          </h4>
          <p className="btn-primary mt-8">
          We understand the value of home ownership. Which is why, our business looks beyond extending home loans to guiding you throughout the journey step by step.
          </p>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {socialIcons.map((item) => (
                <Link target="_blank" to={item?.link} key={item.id}>
                  <div className="mr-3 bg-white p-2 rounded-full text-blue mb-6 lg:mb-0 ">
                    {item.icon}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;