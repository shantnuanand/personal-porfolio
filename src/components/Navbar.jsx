import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-headingColor text-white flex justify-between items-center pr-6 sticky top-0">
      <div className="flex justify-between items-center">
        <div>
          <img
            className="invert h-[80px] w-[80px] p-6"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            href="github"
          />
        </div>
        <div className="flex list-none">
          <li className="ml-4">Products</li>
          <i className="ri-arrow-down-s-line"></i>
          <li className="ml-4">Solutions</li>
          <i className="ri-arrow-down-s-line"></i>
          <li className="ml-4">Open Source</li>
          <i className="ri-arrow-down-s-line"></i>
          <li className="ml-4">Pricing</li>
        </div>
      </div>
      <div className="flex list-none gap-4 items-center">
      <div className="flex gap-4 border border-smallColor rounded-lg p-2">
        <i className="text-smallColor ri-search-line"></i>
        <div className="flex gap-20">
          <input className="bg-headingColor border-none input:focus:border:none" placeholder="Search or jump to..."></input>
          <i className="text-smallColor ri-slash-commands-2"></i>
        </div>
      </div>
        <li>Sign in</li>
        <li className="border rounded-lg p-2 hover:border-zinc-300 hover:text-zinc-300">
          Sign up
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
