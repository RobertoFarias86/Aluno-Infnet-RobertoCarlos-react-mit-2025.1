import React from "react";

import banner from "../assets/banner.png";


const Banner = () => {
  return (
    <div className="text-center">

      <img
        src={banner}

        alt="Banner do react-mit-2025.1"

        className="img-fluid w-100"

        style={{ maxHeight: "300px", objectFit: "cover" }}

      />
    </div>
  );

};




export default Banner;