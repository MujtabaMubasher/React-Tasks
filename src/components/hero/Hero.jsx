import React from "react";

const Hero = () => {
    return (
      <div className="flex items-center justify-between bg-black text-white px-16 py-16 relative">
        
        <div className="max-w-lg ml-6">
          <h1 className="text-4xl font-light uppercase">IT IS TIME FOR</h1>
          <h2 className="text-5xl font-bold text-green-500 mt-2">A CHANGE</h2>
          <h3 className="text-4xl font-bold bg-green-500 text-black inline-block px-4 py-2 mt-2">
            WORKSHOP
          </h3>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni atque saepe est labore numquam itaque incidunt?
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-[#40CF06] text-black font-semibold">
            FOLLOW US
          </button>
        </div>
  
        <div className="relative">
          <img
            src="/programming.jpg"
            alt="Workshop"
            className="w-[550px] h-[350px] object-cover  border-4 border-black"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  