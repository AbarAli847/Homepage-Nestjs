import Link from "next/link";
import React from "react";

const OpacityIamge = () => {
  return (
    <div>
      <div className="relative bg-blue-900 text-white h-[400px] flex items-center justify-center">
        {/* Background image  */}
        <div className="absolute inset-0">
          <img
            src="/overlayimage.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Overlay Content  */}
        <div className="relative text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Start Growing your Business Today
          </h1>
          <Link href={""}>
            <button className="mt-4 px-6 py-2 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-200 transition">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpacityIamge;
