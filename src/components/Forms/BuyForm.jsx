import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const HeroForm = () => {
  const phraseInputRef = useRef();
  const history = useNavigate();

  const options = [
    { value: "FLAT", label: "FLAT" },
    { value: "PLOT", label: "PLOT" },
    { value: "VILLA", label: "VILLA" },
    { value: "KOTHI", label: "KOTHI" },
  ];

  const options2 = [
    { value: 1, label: "1 BHK" },
    { value: 2, label: "2 BHK" },
    { value: 3, label: "3 BHK" },
    { value: 4, label: "4 BHK" },
    { value: 5, label: "5 BHK" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();

    // const enteredPhrase = phraseInputRef.current.value;

    // if (enteredPhrase.trim().length <= 2) {
    //   return;
    // }

    history(`/listings`);
  };

  return (
    <>
      <p className="font-Poppins font-bold  mt-20 text-xl text-center mb-3">
      <span className="text-white ">Property Type</span>
      <span className="text-white px-16">Bedroom</span>
      </p>
      
      <div className="mx-auto  rounded-xl bg-silverLite shadow-md border-2 border-blue border-r-0 ">
        <form onSubmit={handleSearch} className="flex  items-center w-full">
          <label htmlFor="text"></label>

          <Select
            className=" ml-2 outline-none rounded-l-lg w-full p-1 bg-silver"
            options={options}
          />
          <Select
            className=" outline-none rounded-l-lg w-full p-1 bg-silver"
            options={options2}
          />

          <button className="bg-blue ml-2 p-4 rounded-r-lg border-2 border-blue ">
            <BiSearchAlt className="text-white font-bold" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HeroForm;
