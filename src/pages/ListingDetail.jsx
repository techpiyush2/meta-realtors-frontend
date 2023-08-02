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
  const [resData, setResData] = useState([]);

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
      
      <section
        className="mx-auto bg-silver px-2 md:px-16 lg:px-20 py-20 pt-20 md:py-16"
      >
        <div className="my-20">
          {!isLoading && (
            <PropertyDetailItems
              key={resData?._id}
              id={resData?._id}
              numOfBed={resData?.bedrooms}
              numOfBath={resData?.bathrooms}
              size={resData?.size}
              price={resData?.price}
              address={resData?.title}
              image={resData?.images[0]}
              state={resData?.address}
              rentType={resData?.type}
              description={resData?.description}
              amenities={resData?.Features}
              photos={resData?.images}
              phoneNumber={resData?.contactNo}
              parking={resData?.parking}
              parkOrGarden={resData?.parkOrGarden}
              agencyName={resData?.agency?.name}
              contactName={resData?.ownerName}
              Features={resData?.Features}
              logo={resData?.agency?.logo?.url}
            />
          )}
          {isLoading && <Loader />}
          {/* {!isLoading && data.length === 0 && <Error />} */}
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;
