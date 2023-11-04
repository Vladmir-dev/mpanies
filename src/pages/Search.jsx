import React from "react";
import Navbar from "../components/Navbar";
import Scard from "../components/shop/Scard";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const results = useSelector((state) => state.search.results);
  console.log("results hahaha", results);

  return (
    <div>
      <Navbar />
      <div className="mx-[100px]">
        {results == [] ? (
          <div>No Query</div>
        ) : (
          <div className="mt-[100px] grid md:grid-cols-4 grid-cols-1">
            {results.map((item, index) => (
              <Scard item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
