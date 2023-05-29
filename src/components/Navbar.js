import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="pt-[6px] pb-[6px] block bg-[#f14d54]"></div>
      <div className="pl-6 pr-6 h-[92px] bg-white font-sans text-red-600 flex items-center justify-between">
        <div>
          <img
            className="h-[44px] w-[180px]"
            src="https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex flex-row justify-evenly gap-8 align-middle ">
            <Link to="/Login">
              <li>Login</li>
            </Link>
            <li className="w-[1px] h-[30px] bg-slate-600 "></li>
            <Link to="/Register">
              <li>Register</li>
            </Link>
            <li>
              <div className="flex h-[38px] w-[100px] border-[1px] border-[#cccccc] rounded-lg justify-center items-center hover:bg-[#f14d54] hover:text-white">
                <ShoppingCartIcon />
                Cart
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center h-[80px] flex-row bg-[#f4f4f4]">
        <input
          className="appearance-none border-[1px] border-[#cacaca] rounded-lg focus:outline-none pl-3 h-[40px] w-[561px]"
          id="text"
          name="text"
          placeholder="What are you looking for..."
          type="text"
          value=""
        ></input>
        <button
          className="allign-middle h-[40px] w-[130px] rounded-lg text-white text-lg font-semibold bg-lime-500  hover:bg-lime-600"
          type="submit"
        >
          <SearchIcon />
          Search
        </button>
      </div>
    </>
  );
};

export default Navbar;
