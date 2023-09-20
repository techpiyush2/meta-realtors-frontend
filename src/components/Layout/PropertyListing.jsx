import React, { Fragment ,useState,useEffect} from "react";
import PropertiesItem from "../Data/PropertiesItem";
import { ToastContainer, toast } from 'react-toastify';

import { useGetPropertyListMutation } from "../../redux/services/propertySlice";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import Pagination from '../Layout/Pagination'


const Properties = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resData, setResData] = useState([]);

  const [getPropertyList] = useGetPropertyListMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsFetching(true);
  
      try {
        const res = await getPropertyList().unwrap();
        if(res.code===200){
          toast.success(res.message)
        }else{
          toast.error(res.message)
          
        }
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
        
        setResData(res.data)
        
      } catch (error) {
        console.log('error',error);
        toast.error('Network Error')
        
      }
      setIsFetching(false);
    };
    
    handleSubmit()
    
  },[])
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = resData.slice(firstPostIndex, lastPostIndex);

  

  const mappedList = currentData?.map((property) => {
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
        <ToastContainer />
      
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
          <Pagination
                totalPosts={resData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
