import React, { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";
import PropertyDetailItems from "../components/Data/PropertyDetailItems";

import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";

import { useGetPropertyDetailsMutation} from "../redux/services/propertySlice";

const ListingDetail = () => {
  
  const {propertyId} = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState(null);

  const [getPropertyDetails] = useGetPropertyDetailsMutation();
  
  useEffect(()=>{
    const handleSubmit = async () => {
      setIsLoading(true);
  
      try {
        let dataToBeSend = {propertyId }
        const res = await getPropertyDetails(dataToBeSend).unwrap();
        console.log(res);
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
        
        setResData(res.data)
      } catch (error) {
        console.log('error',error);
      }
      setIsLoading(false);
    };
  
    handleSubmit()
    
  },[])
  

  return (
    <Fragment>
      
      {/* <section
        className="mx-auto bg-silver px-2 md:px-16 lg:px-20 py-20 pt-20 md:py-16"
      >
        <div className="my-20">
          {!isLoading && (
            <PropertyDetailItems
              key={resData?._id}
              id={resData?._id}
              numOfBed={resData?.rooms}
              numOfBath={resData?.baths}
              size={resData?.area}
              price={resData?.price}
              address={resData?.title}
              image={resData?.coverPhoto?.url}
              state={resData?.state}
              rentType={resData?.rentFrequency}
              description={resData?.description}
              amenities={resData?.amenities}
              photos={resData?.photos}
              phoneNumber={resData?.phoneNumber}
              agencyName={resData?.agency?.name}
              contactName={resData?.contactName}
              logo={resData?.agency?.logo?.url}
            />
          )}
          {isLoading && <Loader />}
          {!isLoading && data.length === 0 && <Error />}
        </div>
      </section> */}
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;
