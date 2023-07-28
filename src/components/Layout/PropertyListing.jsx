import React, { Fragment ,useState,useEffect} from "react";
import PropertiesItem from "../Data/PropertiesItem";

import { useGetPropertyListMutation } from "../../redux/services/bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

import { usePropertyListMutation} from "../../redux/services/propertySlice";


const Properties = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState(null);

  const [propertyList] = usePropertyListMutation();
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsFetching(true);
  
      try {
        const res = await propertyList().unwrap();
        console.log(res);
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
        setResData(res.data)
      } catch (error) {
        console.log('error',error);
      }
      setIsFetching(false);
    };
    
    handleSubmit()
    
  },[])
  

  const mappedList = resData?.map((property) => {
    return (
      <PropertiesItem
        key={property?._id}
        id={property?._id}
        // numOfBed={property?.rooms}
        // numOfBath={property?.baths}
        size={property?.area}
        price={property?.price}
        address={property?.title}
        // image={property?.coverPhoto?.url}
        // state={property?.state}
        // rentType={property?.rentFrequency}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            List of <span className="text-blue">Properties</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && mappedList}
            {/* {!isFetching && mappedList?.length === 0 && <Error />} */}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
