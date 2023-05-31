import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../index";
const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // State to control the visibility of search results
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://book-e-sell-node-api.vercel.app/api/book/search?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await response.json();
      setSearchResults(data.result);
      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowResults(false);
  };

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
            {isAuthenticated === false ? (
              <div>
                <ul className="flex flex-row justify-evenly gap-8 align-middle ">
                  <Link to="/Login">
                    <li>Login</li>
                  </Link>
                  <li className="w-[1px] h-[30px] bg-slate-600 "></li>
                  <Link to="/Register">
                    <li>Register</li>
                  </Link>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setUser({});
                }}
              >
                Logout
              </button>
            )}
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
          id="search"
          name="search"
          placeholder="What are you looking for..."
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button
          onClick={handleSearch}
          className="allign-middle h-[40px] w-[130px] rounded-lg text-white text-lg font-semibold bg-lime-500  hover:bg-lime-600"
          type="submit"
        >
          <SearchIcon />
          Search
        </button>
      </div>
      {showResults && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="flex flex-col relative w-[400px] rounded-lg bg-white p-4">
            <div className="w-full flex justify-between text-red-600 pb-1">
              <div className="font-bold text-xl">Books</div>
              <button
                onClick={closeModal}
                className="top-2 right-2  hover:text-gray-700"
              >
                <CloseIcon />
              </button>
            </div>
            <div>
              {searchResults.length > 0 ? (
                searchResults.map((book) => (
                  <div className="pb-2" key={book.id}>
                    <div className="font-bold text-xl">{book.name}</div>
                    <p>{book.description}</p>
                    <div className="font-semibold">{book.price} Rs.</div>
                  </div>
                ))
              ) : (
                <p className="font-semibold">No books found.</p>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Display search results */}
    </>
  );
};

export default Navbar;
