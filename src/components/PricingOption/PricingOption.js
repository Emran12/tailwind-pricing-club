import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="bg-indigo-300 font-bold text-xl p-4 rounded-lg">{name}</h1>
      <p>
        <span className="text-5xl font-bold">{price}</span>{" "}
        <span className="text-gray-500 font-bold">/mo</span>
      </p>
      <div className="">
        <h2 className="text-left ">Benifits:</h2>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 flex w-full justify-center p-3 rounded-lg mt-4 hover:bg-green-800  text-white font-bold ">
        Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
