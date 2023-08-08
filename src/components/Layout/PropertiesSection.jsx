import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropertiesItem from "../Data/PropertiesItem";

import { useGetPropertyListMutation } from "../../redux/services/propertySlice";
import Loader from "../UI/Loader";
import Error from "../UI/Error";


const Properties = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [resData, setResData] = useState([]);

  const [propertyList] = useGetPropertyListMutation();
  
  useEffect(()=>{
    const handleSubmit = async (event) => {
      setIsFetching(true);
      try {
        const res = await propertyList().unwrap();
        
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
        numOfBed={property?.rooms}
        numOfBath={property?.baths}
        size={property?.area}
        price={property?.price}
        address={property?.title}
        image={property?.coverPhoto?.url}
        state={property?.state}
        rentType={property?.rentFrequency}
      />
    );
  });

  
  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32 mb-6">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
          Explore Our Listed  <span className="text-blue">Properties</span>
          </h1>
          <p className="text-center text-ash">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            facilis libero, esse recusandae nam veniam aut accusamus.
          </p>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row">
          {isFetching && <Loader />}
          {!isFetching && mappedList}
          {/* {!isFetching && mappedList?.length === 0 && <Error />} */}
        </ul>
        <div className="flex items-center  justify-center px-4 pb-3 pt-5">
          <Link to="/listings">
            <button className="font-Poppins bg-silverLite border-2 border-blue text-blue font-medium text-base px-8 py-2 rounded-md shadow-lg hover:bg-blue hover:text-white">
              Explore All
            </button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
