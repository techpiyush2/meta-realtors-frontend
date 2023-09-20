import React, { Fragment ,useState,useEffect} from "react";
import PropertiesItem from "../Data/PropertiesItem";
import { Link } from "react-router-dom";
import { useGetPropertyListMutation } from "../../redux/services/propertySlice";
import Loader from "../UI/Loader";
import Error from "../UI/Error";


const FlatSection = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState([]);

  const [propertyList] = useGetPropertyListMutation();
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsFetching(true);
  
      try {
        let dataToBeSend = {type : ["FLAT"]}
        
        const res = await propertyList(dataToBeSend).unwrap();
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
  
  let renderData = resData.slice(0,4)

  const mappedList = renderData?.map((property) => {
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
      image = {property?.images} 
      type = {property?.type} 
      bedrooms = {property?.bedrooms} 
      bathrooms = {property?.bathrooms}
      parking = {property?.parking}
      parkOrGarden ={property?.parkOrGarden}
      Features ={property?.Features} 
      contactNo = {property?.contactNo} 
      ownerName = {property?.ownerName}
      date = {property?.date}
    />
 
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-2xl text-left mb-3">
            Explore Our Listed  <span className="text-blue">Flat</span>
            </h1>
            <p className="text-left text-ash">
              Stay up to date with all the information about our listed
              properties.
            </p>
          </div>
          <div className="lg:pr-4 pb-3 pt-5">
            <Link to="/flats">
              <button className="font-Poppins bg-silverLite border-2 border-blue text-blue font-medium text-base px-8 py-2 rounded-md shadow-lg hover:bg-blue hover:text-white">
                See More
              </button>
            </Link>
          </div>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row my-6">
          {isFetching && <Loader />}
          {!isFetching && mappedList}
          {/* {!isFetching && mappedList.length === 0 && <Error />} */}
        </ul>
      </section>
    </Fragment>
  );
};

export default FlatSection;
