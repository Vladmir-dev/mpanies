import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "../App.css";

const SkeletonCard = () => {
  return (
    <section>
      {/* <h2 className="section-title">
        <Skeleton duration={1} height={30} width={300} />
      </h2> */}

      <ul className="list">
        {Array(9)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton variant="rectangular" height={400} width={250} />
              <h4 className="card-title ">
                <Skeleton variant="rectangular" height={20} width={250} />{" "}
                &nbsp;
                <Skeleton height={26} width={125} />
              </h4>
              <p className="card-channel">
                <Skeleton height={26} width={125} />
              </p>
              {/* <div className="card-metrics">
                <Skeleton width={`90%`} />
              </div> */}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SkeletonCard;
