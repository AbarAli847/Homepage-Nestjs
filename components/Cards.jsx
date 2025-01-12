import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-50 p-4">
              <img
                src="path-to-image-1.jpg"
                alt="Malware Removal"
                className="w-full h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">
                Malware Removal
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our WordPress Malware Removal Services quickly detect and
                resolve threats.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <p className="text-sm text-gray-500">
                Delivered in{" "}
                <span className="font-bold text-blue-600">2 days</span>
              </p>
              <p className="text-lg font-bold text-blue-800">$99</p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-50 p-4">
              <img
                src="path-to-image-2.jpg"
                alt="WordPress Migration"
                className="w-full h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">
                WordPress Migration
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Seamlessly transfer your website with our WordPress Migration
                services.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <p className="text-sm text-gray-500">
                Delivered in{" "}
                <span className="font-bold text-blue-600">2 days</span>
              </p>
              <p className="text-lg font-bold text-blue-800">$99</p>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-50 p-4">
              <img
                src="path-to-image-3.jpg"
                alt="Fix a Broken WordPress Site"
                className="w-full h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">
                Fix a Broken WordPress Site
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get your WordPress site back on track with our repair services.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <p className="text-sm text-gray-500">
                Delivered in{" "}
                <span className="font-bold text-blue-600">2 days</span>
              </p>
              <p className="text-lg font-bold text-blue-800">$99</p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-50 p-4">
              <img
                src="path-to-image-4.jpg"
                alt="WordPress Website Design"
                className="w-full h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">
                WordPress Website Design
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Transform your online presence with our WordPress Website Design
                services.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <p className="text-sm text-gray-500">
                Delivered in{" "}
                <span className="font-bold text-blue-600">7 days</span>
              </p>
              <p className="text-lg font-bold text-blue-800">$299</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
