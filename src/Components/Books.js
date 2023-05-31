import React from "react";
const Books = (props) => {
  return (
    <>
      <div class="flex flex-col justify-between  ">
        <div className="overflow-hidden  ">
          <img className="w-full h-[220px]" src={props.img} alt={props.name} />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold truncate text-xl mb-2">{props.name}</div>
          <div class="font-bold text-base text-gray-500 mb-2">
            {props.category}
          </div>
          <p class="text-gray-700 text-base truncate mb-2">
            {props.description}
          </p>
          <div className="font-sans text-lg text-gray-500 ">
            MRP: ₹{props.price}
          </div>
        </div>
        <div class="px-6 pb-2">
          <button className="w-[230px] h-[40px] text-xl text-white font-sans font-bold rounded-md bg-red-500 hover:bg-red-700">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;
