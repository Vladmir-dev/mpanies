import React from "react";
import Scard from "./Scard";

const CardList = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
        <div className="mt-[20px] grid md:grid-cols-4 grid-cols-2 mr-15">
          {data.map((item, index) => (
            <div key={index}>
              <Scard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center m-[100px]">
          <h1>EMPTY</h1>
        </div>
      )}
    </div>
  );
};

export default CardList;
