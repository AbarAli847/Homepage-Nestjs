import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg w-full mx-auto">
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-3xl font-bold">iCopify</h1>
          <p className="mt-2 text-sm">
            Never Pay Until You're 100% Satisfied - Increasing traffic, leads,
            and sales.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Create New Account</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                form="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                form="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6">
            <label className="flex items-start text-sm">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-600">
                By creating an account, you agree to the
                <a href="#" className="text-blue-600 hover:underline">
                  iCopify Terms of Service
                </a>
                and to occasionally receive marketing emails from us. Please
                read our
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                to learn how we use your personal data.
              </span>
            </label>
          </div>
          <p className="mt-6 text-center text-sm">
            Have an account?
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
