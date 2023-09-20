import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/userSlice";
import { useDispatch,useSelector } from "react-redux";
import logo from "../../assets/navlogo.jpeg";
const LoginForm = () => {
  const options = [
    { value: "FLAT", label: "FLAT" },
    { value: "PLOT", label: "PLOT" },
    { value: "VILLA", label: "VILLA" },
    { value: "KOTHI", label: "KOTHI" },
    { value: "COMMERCIAL", label: "COMMERCIAL" },
  ];
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isLoading, setIsLoading] = useState(false);

  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [logIn] = useLoginMutation();

  const dispatch = useDispatch();



  const content = isLoading ? "Adding Property" : "Add Property";

  return (
    <>
      <div className="font-Poppins py-16 flex justify-center px-4 md:px-16 bg-silver lg:px-20">
      {!isAuthenticated && (
              <div className="bg-silver mb-10 text-blue font-medium">
                <h4 className="text-center py-10 font-Poppins">
                  <Link to="/login">
                    <button className="bg-blue text-white py-1 px-3 rounded-lg shadow-lg">
                      Login
                    </button>
                  </Link>{" "}
                  to add Properties
                </h4>
              </div>
            )}
        {isAuthenticated&& (
           <div className="bg-white px-4 md:px-7 py-10 w-full lg:w-1/2 rounded-[30px]  shadow-md lg:shadow">
           <div className="flex flex-col items-center pt-5">
             <img className="w-40 mb-4" src={logo} alt="meta realtors logo" />
 
             <h2 className="text-2xl font-medium my-5 ">
               List Your Property in our Website
             </h2>
           </div>
           <div className="flex flex-col lg:flex-row items-center justify-between">
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Title <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="password">
                   Price <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                   x
                 />
               </div>
             </form>
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Address <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="text">
                   Number Of Bed <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
             </form>
           </div>
           <div className="flex flex-col lg:flex-row items-center justify-between">
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Number Of Bathroom <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="text">
                   Size in Sq Yard<span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
             </form>
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   State <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="password">
                   Type <span className="text-[#dc2626]">*</span>
                 </label>
                 <Select
                   className=" outline-none rounded-l-lg w-full p-1 bg-silver"
                   options={options}
                 />
               </div>
             </form>
           </div>
           <div className="flex flex-col lg:flex-row items-center justify-between">
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Phone No <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="text">
                   Owner Name <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
             </form>
             <form className="w-7/12 flex flex-col items-left">
               <div className="flex flex-col pl-16 ">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Features <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                 />
               </div>
               <div className="flex flex-col mt-4 pl-16">
               <label className="text-ash text-lg" htmlFor="text">
               Upload file <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   class="cursor-pointer dark:border-gray-600 dark:placeholder-gray-400
                   bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 rounded-lg"
                   id="file_input"
                   type="file"
                   multiple
                 />
               </div>
             </form>
    
           </div>
           <div >
             <form>
               <div className="flex flex-col mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Description <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-20 py-2 px-4 rounded-lg "
                   id="text"
                   type="text"
                 />
               </div>
             </form>
    
           </div>
           <button className="bg-blue font-medium w-full text-white py-3 rounded-lg">
             {content}
           </button>
         </div>
        )}
       
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;
