import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, title, image, price } = product;

  return (
    <Link
      to={`/details/${id}`}
      className="relative  text-zinc-200 h-auto sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[20%] border rounded-xl p-3 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative h-[70%] w-full border rounded-md mb-2 overflow-hidden ">
        <img
          className="w-full h-full object-cover hover:scale-105 bg-white"
          src={image}
          alt={title}
        />
      </div>
      <h1 className="mt-1 text-sm font-semibold text-center leading-tight line-clamp-2">
        {title}
      </h1>
      <h4 className="mt-1 opacity-50 text-xs font-semibold text-zinc-000">
        Price : ${price}
      </h4>
    </Link>
  );
};

export default Card;
