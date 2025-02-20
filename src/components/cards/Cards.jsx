import React from "react";

const Card = ({ title, description, image, price }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-80  text-white bg-gray-900 mb-14 hover:shadow-xl transition duration-300">
      <div className="w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>

    
        <div className="mt-3 text-lg font-bold text-green-600">${price}</div>

        <button className="mt-4 w-full bg-[#40CF06] text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
