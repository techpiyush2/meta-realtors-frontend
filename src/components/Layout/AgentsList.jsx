import React, { Fragment, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPropertyListMutation } from "../../redux/services/propertySlice";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

const AgentsList = () => {


  const [isLoading, setIsLoading] = useState(false);

  const [getPropertyList] = useGetPropertyListMutation();

  
  useEffect(()=>{
    const handleSubmit = async () => {

      setIsLoading(true);

      try {
        const data = await getPropertyList().unwrap();
        
        if(data.status===200){
          toast.success(data.message)
        }
          toast.error(data.message)
          
        if (!data) {
          throw new Error("Authentication Failed!");
        }
      } catch (error) {
        console.log('error something', error);
        toast.error('Network Error')
        
      }
      
      setIsLoading(false);
    };
    
    handleSubmit()
    
  },[])
  


  return (
    <Fragment>
         <div>
          Agent
         </div> <div>
          Agent
          {isLoading && <Loader />}
          <ToastContainer />
          Agent
         </div> <div>
          Agent
         </div> <div>
          Agent
         </div> <div>
          Agent
         </div> <div>
          Agent
         </div>
      
    </Fragment>
  );
};

export default AgentsList;
