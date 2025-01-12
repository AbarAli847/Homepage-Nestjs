import { loges } from "@/lib/constants";
import React from "react";

const CompanyLogoes = () => {
  return (
    <div className="bg-slate-200 ">
      <div className="flex flex-wrap justify-center gap-x-32">
        {loges.map((item, index) => (
          <img
            key={index}
            src={item.path}
            alt={item.alt}
            className="w-40 h-40 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoes;
