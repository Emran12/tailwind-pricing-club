import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const PricingOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "everything on free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benefits: [
        "everything on  regular",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 mt-8 p-5">
      <h1 className="text-6xl text-white mb-4">Best deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        distinctio natus amet. Rerum, quo nisi sed sunt eaque aut dolorum magni!
        Accusantium fugiat in dignissimos facere obcaecati magnam aut quo rerum
        culpa sint, eligendi laudantium officia sed ipsa natus distinctio sit
        reprehenderit a. Repellat quidem modi, reiciendis labore atque quam.
      </p>
      <div className="grid md:grid-cols-3 gap-8 bg-indigo-300 mt-8">
        {pricingOptions.map((option) => (
          <PricingOption
            key={pricingOptions.id}
            option={option}
          ></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
