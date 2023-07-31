import React, { Fragment ,useState,useEffect} from "react";
import PropertiesItem from "../Data/PropertiesItem";

import { useGetPropertyListMutation } from "../../redux/services/propertySlice";
import Loader from "../UI/Loader";
import Error from "../UI/Error";



const Flat = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState(null);

  const [propertyList] = useGetPropertyListMutation();
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsFetching(true);
  
      try {
        let dataToBeSend = {type : ["FLAT"]}
        const res = await propertyList(dataToBeSend).unwrap();
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
      size={property?.size}
      price={property?.price}
      address={property?.address}
      title= {property?.title}
      isActive = {property?.isActive}
      isDeleted = {property?.isDeleted}
      description ={property?.description}
      image = {property?.images[0]} 
      type = {property?.type} 
      bedrooms = {property?.bedrooms} 
      bathrooms = {property?.bathrooms}
      parking = {property?.parking}
      parkOrGarden ={property?.parkOrGarden}
      Features ={property?.Features} 
      contactNo = {property?.contactNo} 
      ownerName = {property?.ownerName}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            List of <span className="text-blue">Flats</span>
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

export default Flat;
