import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import Logo from "../../assets/meta-logo.png";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useNavigate();

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
    menuHandler();
    history.replace("/login");
  };

  let newStr = "";

  for (const s of user) {
    newStr += s;
    if (s === "@") {
      break;
    }
  }
  const truncatedString = newStr.replace("@", "");
  

  const btnContent = isAuthenticated ? "Logout" : "Login";
  const getStartedContent = isAuthenticated
    ? ` ${truncatedString}`
    : "Sign Up";

  const mobileMenu = (
    <div className="w-11/12 max-w-2xl mt-4 lg:hidden">
      <ul className=" flex-col px-6 text-ash  ">
        <li className="py-3  hover:text-blue " >
          <NavLink to="/" activeclassname="text-blue" onClick={menuHandler}>
            Home
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/listings"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Properties
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/brands"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
           Our Brands
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/brands"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Invest
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/brands"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Plots
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/brands"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Khoties And Villas
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/brands"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Listing
          </NavLink>
        </li>
        <li className="py-3  hover:text-blue ">
          <NavLink
            to="/blogs"
            activeclassname="text-blue"
            onClick={menuHandler}
          >
            Blogs
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-between py-3 pl-6">
        <button
          className="text-blue font-medium text-base pr-5"
          onClick={isAuthenticated ? handleLogout : menuHandler}
        >
          {!isAuthenticated ? <Link to="/login">{btnContent}</Link> : "Logout"}
        </button>
        <button
          className="flex items-center ml-6 bg-blue text-white font-bold text-xs p-3 px-3 rounded-lg shadow-md "
          onClick={menuHandler}
        >
          {" "}
          {isAuthenticated && (
            <div className="mr-3">
              <FaUser />
            </div>
          )}
          <Link to="/signup">{getStartedContent}</Link>
        </button>
      </div>
    </div>
  );

  return (
    <header className="z-50 w-full fixed bg-white top-0 p-4 px-6 lg:px-20 ">
      <nav className="flex lg:flex items-center justify-between px-6 font-Poppins">
        <div className="flex items-center ">
          <div className="w-28">
            <img src={Logo} alt="meta-realtors" className="w-full" />
          </div>
        </div>
         <div className="flex flex-col items-center justify-evenly">
         <ul className="hidden lg:flex text-ash mb-2">
          <li className="hover:text-blue ">
            <NavLink to="/home" activeclassname="text-blue" className="px-4">
              Home
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/brands" activeclassname="text-blue" className="px-4">
              Our brands
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/invest" activeclassname="text-blue" className="px-4 ">
              Invest
            </NavLink>
          </li>
           <li className=" hover:text-blue ">
            <NavLink to="/plots" activeclassname="text-blue" className="px-4 ">
              Plots
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/flats" activeclassname="text-blue" className="px-4 ">
              Flats
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/kothi-villas" activeclassname="text-blue" className="px-4 ">
              Khoties & Villas
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/listings" activeclassname="text-blue" className="px-4 ">
              Listing
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/blog" activeclassname="text-blue" className="px-4 ">
              Blogs
            </NavLink>
          </li>
        </ul>
     <ul className="hidden lg:flex text-ash">
          <li className=" hover:text-blue ">
            <NavLink to="/home-loan" activeclassname="text-blue" className="px-4 ">
              Home Loan
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/buy" activeclassname="text-blue" className="px-4 ">
              Buy Property
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/sell" activeclassname="text-blue" className="px-4 ">
              Sell Property
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/contact-us" activeclassname="text-blue" className="px-4 ">
              Contact Us
            </NavLink>
          </li>
          <li className=" hover:text-blue ">
            <NavLink to="/about-us" activeclassname="text-blue" className="px-4 ">
              About Us
            </NavLink>
          </li>
        </ul>
         </div>
        <div className="pl-18 hidden lg:flex ">
          <button
            className="text-blue font-medium text-base pr-5"
            onClick={isAuthenticated ? handleLogout : () => null}
          >
            {!isAuthenticated ? (
              <Link to="/login">{btnContent}</Link>
            ) : (
              "Logout"
            )}
          </button>
          <button className="flex items-center bg-blue text-white border-2 border-blue font-bold text-xs py-2 px-4  hove:border-1 hover:outline-blue rounded-lg shadow-md ">
            {isAuthenticated && (
              <div className="mr-3 ">
                <FaUser />
              </div>
            )}
            <Link to="/signup">{getStartedContent}</Link>
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TiThMenu className="text-5xl p-2" />
            ) : (
              <CgClose className="text-5xl p-2" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenu && mobileMenu}
    </header>
  );
};

export default MainHeader;
