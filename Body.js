import React from "react";
import { data } from "./Constants";
import { Link } from "react-router-dom";
import Filterproducts from "./Filterproducts";
import Carousel from "./Slider";

const Body = () => {
  return (
    <div>
      <Filterproducts />
      <Carousel/>

      <h1 className="text-center p-2 text-3xl font-serif">OUR PRODUCTS</h1>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <div
            className="w-96 shadow-lg p-4 m-4 xl:mx-14 md:mx-3 lg:mx-6 border-slate-500 hover:scale-110 hover:z-10 transition-all duration-500 ease-in-out"
            key={item.id}
          >
            <img alt="imag" className="rounded-md h-56 w-screen" src={item.image} />
            <h2 className="font-bold font-serif text-gray-500">{item.name}</h2>
            <hr />

            <h2 className="text-red-600">{item.price_per_kg}</h2>
            <h2 className="font-serif text-green-500">{item.stock}</h2>

            <h1 className="p-3 bg-orange-400 text-center text-zinc-50 font-bold rounded-md">
              <Link to={"/product_Details/" + item.id}> View Details </Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
