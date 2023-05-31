import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../index.js";
import { Navigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Books from "./Books.js";

const baseURL = "https://book-e-sell-node-api.vercel.app";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sorting, setSorting] = useState("sorted");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(baseURL + "/api/book/all");
        setBooks(response.data.result);
        setTotalPages(Math.ceil(response.data.result.length / 10));
      } catch (error) {
        setError(error);
      }
    };
    fetchBooks();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  const filteredBooks = books
    .filter((book) =>
      book.name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .sort((a, b) => {
      if (sorting === "sorted") {
        return a.name.localeCompare(b.name);
      } else if (sorting === "reverse") {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });

  const displayedBooks = filteredBooks.slice((page - 1) * 8, page * 8);

  const { isAuthenticated } = useContext(Context);
  if (isAuthenticated === false) {
    return <Navigate to={"/login"} />;
  }
  if (error) {
    return (
      <>
        <p>Something Went Wrong: {error}</p>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[#414141] font-bold text-[32px] pb-[15px]">
          Book Listing
        </div>
        <div className="h-[2px] w-[130px] bg-[#F14D54] mb-[30px]"></div>
        <div className="w-[1140px] flex flex-row justify-between font-semibold text-[20px] h-[40px] mb-[20px] px-4">
          <div>Total - {filteredBooks.length} items</div>
          <div className="flex flex-row gap-10 font-normal text-[20px]">
            <input
              className="w-[240px] h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-2"
              type="text"
              label="search"
              id="search"
              name="search"
              placeholder="Search.."
              value={searchKeyword}
              onChange={handleSearchChange}
            ></input>
            <div>
              <span className=" pr-2 text-[16px]">Sort:</span>
              <Select
                className="w-[240px] h-[40px] appearance-none border-0 rounded-sm focus:outline-none pl-3"
                id="sort"
                value={sorting}
                onChange={handleSortingChange}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"sorted"}>A-Z</MenuItem>
                <MenuItem value={"reverse"}>Z-A</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="w-[1140px] grid grid-cols-4 gap-4">
          {displayedBooks.map((book) => {
            return (
              <div
                id={book.id}
                key={book.id}
                className="h-[450px] overflow-hidden pb-1 shadow-lg border-2 border-slate-200 rounded-xl"
              >
                <Books
                  id={book.id}
                  name={book.name}
                  category={book.category}
                  price={book.price}
                  img={book.base64image}
                  description={book.description}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
