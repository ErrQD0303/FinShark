import React from "react";
import { Link } from "react-router-dom";
import "react-icons/fa";
import { FaHome } from "react-icons/fa";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <nav className="z-9999 absolute bottom-0 left-0 top-0 block w-64 -translate-x-full transform flex-row flex-nowrap bg-white px-6 py-4 shadow-xl transition-all duration-300 ease-in-out md:z-10 md:translate-x-0">
      <button className="text-blueGray-700 border-blueGray-100 -right-24-px z-9998 absolute top-1/2 flex h-10 w-6 cursor-pointer items-center justify-center rounded-r border border-b border-l-0 border-r border-t border-solid border-transparent bg-white text-xl leading-none focus:outline-none md:hidden">
        <i className="fas fa-ellipsis-v"></i>
      </button>

      <div className="mx-auto flex min-h-full w-full flex-col flex-wrap items-center justify-between overflow-y-auto overflow-x-hidden px-0">
        <div className="relative z-40 mt-4 flex h-auto w-full flex-1 flex-col items-center items-stretch overflow-y-auto overflow-x-hidden rounded bg-white opacity-100">
          <div className="flex list-none flex-col md:min-w-full md:flex-col">
            <Link
              to="company-profile"
              className="text-blueGray-500 text-medium block flex pb-4 pt-1 font-bold uppercase no-underline md:min-w-full"
            >
              {<FaHome />}
              <h6 className="ml-3">Company Profile</h6>
            </Link>
            <Link
              to="income-statement"
              className="text-blueGray-500 text-medium block flex pb-4 pt-1 font-bold uppercase no-underline md:min-w-full"
            >
              {<FaHome />}
              <h6 className="ml-3">Income Statement</h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
