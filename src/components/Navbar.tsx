import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar: React.FC = () => {
  return (
    <div className="grid grid-cols-3 text-center items-center bg-secondary-light text-text">
      <div className="shrink">
        <div className="flex items-center justify-center">
          {/* justify-left */}
          <Link to={"/"}>
            <img
              src={`../static/nci_logo.png`}
              alt="Logo"
              className="object-scale-down h-20 "
              //  xl:ml-6
            />
          </Link>
          {/* <div className="rounded bg-slate-600 w-1  xl:ml-4"></div> */}
        </div>
      </div>
      <div className="flex justify-evenly">
        <span>
          <Link className="flex-1 text-center" to={"/"}>
            Announcements
          </Link>
        </span>
        <span>
          <Link className="flex-1 text-center" to={"/axon/#AE"}>
            Arm Editor
          </Link>
        </span>
        <span>
          <Link className="flex-1 text-center" to={"/axon/#API"}>
            Axon API
          </Link>
        </span>
      </div>
      <div className="flex-1 text-center  ">
        <Link
          to={"/contact-us"}
          className=" py-2 px-3 rounded-2xl border-accent border-2 text-accent font-bold hover:bg-accent hover:text-secondary-light transition-all duration-[400ms] ease-out "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
