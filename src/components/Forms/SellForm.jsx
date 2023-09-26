import React, { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/userSlice";
import { useDispatch,useSelector } from "react-redux";
import logo from "../../assets/navlogo.jpeg";
import axios from 'axios'
import {
  useCreatePropertyMutation,
} from "../../redux/services/propertySlice";
import environment from "../../redux/environment";

const LoginForm = () => {
  const [createProperty] = useCreatePropertyMutation();
  const [image, setImage] = useState("");
  const [type, setType] = useState();
  const [havePark, setHavePark] = useState();
  const [haveParking, setHaveParking] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [filesUploads, setFilesUploads] = useState([])
  const [filesUploadsProgress, setFilesUploadsProgress] = useState(0)
  const [getFiles, setGetFiles] = useState([])
  
  const options = [
    { value: "FLAT", label: "FLAT" },
    { value: "PLOT", label: "PLOT" },
    { value: "VILLA", label: "VILLA" },
    { value: "KOTHI", label: "KOTHI" },
    { value: "COMMERCIAL", label: "COMMERCIAL" },
  ];
  const options2 = [
    { value: true, label: "Available" },
    { value: false, label: "Not Available" },
  ];
  const options3 = [
    { value: "Parking", label: "Parking" },
    { value: "Waterfront", label: "Waterfront" },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Views", label: "Views" },
    { value: "Appliances", label: "Appliances" },
    { value: "Historic", label: "Historic" },
    { value: "Energy", label: "Energy" },
    { value: "Construction", label: "Construction" },
    { value: "Finishes", label: "Finishes" },
    { value: "Storage", label: "Storage" },
    { value: "Pool", label: "Pool" },
    { value: "Furnished", label: "Furnished" },
    { value: "Tenancy", label: "Tenancy" },
    { value: "Exclusive", label: "Exclusive" },
  ];
  const featureHandler = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  
  
  const userId = useSelector((state) => state.auth.userId);
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isLoading, setIsLoading] = useState(false);
  let [form,setForm] = useState({
    title: "",
   createdby_id: "",
    description: "",
   images: "",
    type: "",
   bedrooms: "",
   bathrooms: "",
   size: "",
   price: "",
   parking: "",
   parkOrGarden: "",
   features: [],
   address: "",
   contactNo: "",
   ownerName: "",
 })

  
  
  const submit = async (event) => {
   
    event.preventDefault()
    console.log(image);
    form = {...form,
      Features : selectedValue,
      parking : haveParking,
      parkOrGarden : havePark,
      createdby_id : userId,
      type : type,
      images :  image,
      isActive : false
    }


    try {
      const res = await createProperty(form).unwrap();
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
  useEffect(()=>{
    imageUpload()
  },[filesUploads])
  
  
  const imageUpload = () => {
       const formData = new FormData()
  
      for(let i = 0; i < filesUploads.length; i++){
        formData.append('file', filesUploads[i])
      }
    
 try {
  axios
  .post(environment.baseUrl + "api/v1/property/uploadImage", formData)
  .then((res) => {

    if (res.data.code === 200) {
      toast.success(res.data.message);
      setImage(res.data.data)
    } else {
      // toast.error(res.data.message);
    }
    if (!res) {
      throw new Error("Data Fetch Failed!");
    }
  });
 } catch (error) {
  console.log(error);
 }
  };
  
  const update = event => {
    const target = event.currentTarget

    setForm({
        ...form,
        [target.name]: target.type === 'checkbox'
            ? target.checked
            : target.value
    })
}

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
                   onChange={update}
                   name="title"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="password">
                   Price <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="number"
                   onChange={update}
                   name="price" 
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
                   onChange={update}
                   name="address"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="text">
                   Number Of Bed <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="number"
                   onChange={update}
                   name="bedrooms"
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
                   type="number"
                   onChange={update}
                   name="bathrooms"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="text">
                   Size in Sq Yard<span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="number"
                   onChange={update}
                   name="size" 
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
                   onChange={update}
                   name = "state"
                 />
               </div>
               <div className="flex flex-col mb-5">
                 <label className="text-ash text-lg" htmlFor="password">
                   Type <span className="text-[#dc2626]">*</span>
                 </label>
                 <Select
                   className=" outline-none rounded-l-lg w-full p-1 bg-silver"
                   options={options}
                   name="type"
                   onChange={(data) => {
                     setType(data.value);
                   }}
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
                   type="number"
                   onChange={update}
                   name="contactNo"
                 />
               </div>
               <div className="flex flex-col">
                 <label className="text-ash text-lg" htmlFor="text">
                   Owner Name <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
                   id="text"
                   type="text"
                   onChange={update}
                   name="ownerName" 
                 />
               </div>
             </form>
             <form>
               <div className="flex flex-col w-[300px] pl-16">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                   Features <span className="text-[#dc2626]">*</span>
                 </label>
                 <Select
                  options={options3}
                  isMulti
                  value={options3.filter(obj => selectedValue.includes(obj.value))} 
                  classNamePrefix="select"
                  onChange={featureHandler}
                  isClearable
                />
               </div>
               <div className="flex flex-col w-[300px] pl-16">
               <label className="text-ash text-lg" htmlFor="text">
               Upload file <span className="text-[#dc2626]">*</span>
                 </label>
                 <input
                   class="cursor-pointer dark:border-gray-600 dark:placeholder-gray-400
                   bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 rounded-lg"
                   type="file"
                   id="file-image"
                   multiple
                   accept="image/*"
                   onChange={(e)=>setFilesUploads(e.target.files)}
                 />
               </div>
             </form>
    
           </div>
           <div className="flex flex-col lg:flex-row items-center justify-between">
           <form >
               <div className="flex flex-col  w-[240px] mb-5">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                 Parking <span className="text-[#dc2626]">*</span>
                 </label>
                 <Select
                  options={options2}
                  onChange={(data) => {
                    setHaveParking(data.value);
                  }}
                />
               </div>
       
             </form>
             <form className="w-7/12 flex flex-col items-left">
               <div className="flex flex-col pl-16 ">
                 <label className="text-ash pb-2 text-lg" htmlFor="text">
                 Park or Garden <span className="text-[#dc2626]">*</span>
                 </label>
                 <Select
                  options={options2}
                  onChange={(data) => {
                  setHavePark(data.value);
                  }}
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
                   name = 'description'
                   onChange={update}
                 />
               </div>
             </form>
    
           </div>
           
           <button onClick={submit} className="bg-blue font-medium w-full text-white py-3 rounded-lg">
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
