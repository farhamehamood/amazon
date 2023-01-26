import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

function Navbar({ logout, ...props }) {
  return (
    <div>
      <div className="h-16 w-full flex items-center   space-x-2 px-2 py-1 bg-[#131921]">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="w-28 flex items-center"
        ></img>

        <div className="space-y-1  items-center border border-[#131921] hover:border-white px-2 ">
          <p className="text-white px-2 text-sm">Home</p>
          <p className="text-bold text-xs text-white">
            <LocationOnIcon />
            Bijapur
          </p>
        </div>

        <div className="flex  h-12">
          <p className="bg-slate-400 p-2  rounded-l  text-base">
            All
            <ArrowDropDownIcon />
          </p>
          <input placeholder="" className=" w-[40rem]"></input>
          <button className="bg-yellow-400 w-10 rounded-r px-2">
            <SearchIcon className="h-6" />
          </button>

          <div className="h-12 px-1 flex">
            <button class="peer flex px-2 py-2 border border-[#131921] hover:border-white  text-white ">
              <span>
                {" "}
                <img
                  src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                  className="mr-2 mt-1 h-5 "
                />
              </span>{" "}
              EN
            </button>

            <div class="hidden peer-hover:flex hover:flex  w-28  flex-col bg-white drop-shadow-lg mt-14 absolute">
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  English
                </label>
              </div>
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Hindi
                </label>
              </div>
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Kannada
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-0 items-center border border-[#131921] hover:border-white ">
          <div className="h-12 px-1 flex">
            <div class=" flex items-center px-2 py-2     text-white ">
              <a> Hello</a>{" "}
            </div>
            <button
              className="text-white hover:border-white"
              onClick={() => logout()}
            >
              SignOut
            </button>
          </div>
        </div>

        <div className="space-y-0 items-center border border-[#131921] hover:border-white h-10 ">
          <p className="text-white text-sm">Return</p>
          <p className="text-bold text-xs text-white">& Orders</p>
        </div>

        <div className="space-y-0 items-center border h-14 border-[#131921] hover:border-white px-2 flex">
          <ShoppingCartCheckoutOutlinedIcon className="h-14 text-white" />
          <p className="text-bold text-xl text-white ">Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
