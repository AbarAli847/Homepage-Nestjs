"use client";
import React, { useState } from "react";

const LoginhtmlForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-md w-full mx-auto">
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-3xl font-bold">iCopify</h1>
          <p className="mt-2 text-sm">
            Never Pay Until You're 100% Satisfied - Increasing traffic, leads,
            and sales.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Log in</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Create An Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginhtmlForm;
