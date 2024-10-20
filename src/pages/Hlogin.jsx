import React from "react";
import Health from "../assets/Images/Health2.svg";
const Hlogin = () => {
  return (
    <div>
      <div className="h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]">
        <div className="  w-[100%] space-y-2">
          <div className=" flex items-center justify-center">
            <img src={Health}></img>
          </div>
          <div className="flex items-center text-2xl font-bold mb-6 justify-center">
            WELCOME TO MEDXPERT
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-white p-3 rounded shadow-md w-80 ">
              <h2 className="text-2xl flex items-center justify-center  mb-6">
                Hospital Admin Login
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="hospitalNumber"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Hospital Number
                  </label>
                  <input
                    type="text"
                    id="hospitalNumber"
                    name="hospitalNumber"
                    placeholder="Enter hospital number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hlogin;
