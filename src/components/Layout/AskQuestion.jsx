import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import askImage from "../../assets/aska.jpg";

const AskQuestion = () => {
  ``;
  return (
    <section className="mt-16 h-auto pb-10 lg:pt-6 overflow-hidden flex justify-center items-center">
      <img className=" brightness-75 w-auto h-[580px] rounded-lg" src={askImage} alt="" />
      <div className="flex justify-center px-10 absolute z-30 flex-col ">
        <div className="w-full px-12 text-white">
          <h2 className="text-3xl mb-4">Ask a question</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <form className="text-black" action="#">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Firstname"
                className="border border-gray-400 py-1 px-2"
              />
              <input
                type="text"
                placeholder="Surname"
                className="border border-gray-400 py-1 px-2"
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="number"
                placeholder="Number"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Question"
                className="border border-gray-400 h-16 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input type="checkbox" className="border w-5  border-silver" />
              <span>
                I accept the{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mt-5">
              <button className="bg-blue font-medium w-full text-white py-3 rounded-lg">
                Email Agent
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
