import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContactUsMutation } from "../../redux/services/ContactUs";
import { ToastContainer, toast } from 'react-toastify';

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
  
const Contact = () => {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileNoInputRef = useRef();
  const messageInputRef = useRef();
  
  
  
  
  const [ContactUs] = useContactUsMutation();
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMobileNo = mobileNoInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
   
    const formData = {
      name : enteredName,
      email: enteredEmail,
      mobileNo: enteredMobileNo,
      message: enteredMessage,
    };

    console.log(formData);
    
    try {
      const res = await ContactUs(formData).unwrap();
      if(res.code===200){
        toast.success(res.message)
      }else{
        toast.error(res.message)
        
      }
      if (!res) {
        throw new Error("Data Fetch Failed!");
      }
          
    } catch (error) {
      console.log('error',error);
      toast.error('Network Error')
      
    }
  
  };

   
  
  const socialIcons = [
    { id: 1, icon: <FaTwitter />, link : "https://twitter.com/metarealtors1" }
,
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
    <div className="w-full min-h-screen flex justify-center items-center">
        <ToastContainer />
      
      <div className="flex flex-col md:flex-row  bg-blue  space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-cyan-700 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
          <div className="">
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="text-white text-sm pt-2">
            Thank you for visiting Meta Realtors. We are dedicated to providing you with everything you need to complete your next tile project.If you have a question or comment, please contact us & Get exclusive VIP reports to help you with your next purchase or sale and learn how to invest your time and money wisely in the market!
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 ">
            <p className="font-Poppins w-72 flex items-center text-white text-center lg:text-left">
              <span className="px-2">
                <FaPhoneAlt />{" "}
              </span>{" "}
              79737 40282
            </p>
            </div>
            <div className="inline-flex space-x-2 ">
            <p className="font-Poppins w-72 flex items-center text-white text-center lg:text-left">
              <span className="px-2 text-xl">
                <IoMdMail />{" "}
              </span>{" "}
              metarealtors1@gmail.com
            </p>
            </div>
            <div className="inline-flex space-x-2 ">
            <p className="font-Poppins flex w-72  text-white  lg:text-left">
              <span className="px-2">
                <FaLocationArrow />{" "}
              </span>{" "}
              E-309, Ground Floor, Phase 8A, Industrial Area, Sector 75,
              Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
          {socialIcons.map((item) => (
                <Link target="_blank" to={item?.link} key={item.id}>
                  <div className="mr-3 bg-white p-2 rounded-full text-blue mb-6 lg:mb-0 ">
                    {item.icon}
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute -top-28 -right-28 z-0 bg-teal-400 w-40 h-40 rounded-full"></div>
          <div className="absolute -bottom-16 -left-28 z-0 bg-teal-400 w-40 h-40 rounded-full"></div>
          <div className="relative z-10 w-full md:w-80 h-full bg-white p-8 text-gray-600 rounded-xl shadow-lg">
            <form action="" className="text-blue flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  ref={nameInputRef}
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 ring-blue"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  ref={emailInputRef}
                  className="ring-1 ring-blue ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  ref={mobileNoInputRef}
                  className="ring-1 ring-blue ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here"
                  ref={messageInputRef}
                  required
                  className="ring-1  mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 ring-blue"
                  rows="4"
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="inline-block self-end  bg-blue  text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
