import React from "react";

const LandingPage = function () {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 items-center">
          <img
            src="https://www.pnglib.com/wp-content/uploads/2021/02/sliced-raw-avocado-png_60224153158f3.png"
            alt=""
          />
          <div>
            <h2 className="text-6xl">HERBY</h2>
            <p>frutas y verduras</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
