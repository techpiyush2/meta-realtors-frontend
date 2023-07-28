import React, { Fragment, useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { useGetPropertyListMutation } from "../../redux/services/bayut";
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
        console.log(data);
        if (!data) {
          throw new Error("Authentication Failed!");
        }
      
      } catch (error) {
        console.log('error something', error);
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
