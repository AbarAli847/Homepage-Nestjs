import { navlinks } from "@/lib/constants";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-950 text-white ">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* <!-- Logo --> */}
          <a>
            <img
              src="/logo1.png"
              alt="Logo"
              className="h-8 mr-3 flex items-center"
            />
            <span className="text-xl font-bold">Your Brand</span>
          </a>

          {/* <!-- Navigation Links --> */}
          <div className="space-x-4">
            {navlinks.map((item, i) => (
              <a href="#" className="hover:text-blue-300" key={i}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
