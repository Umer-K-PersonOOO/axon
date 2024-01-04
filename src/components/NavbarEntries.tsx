import React from "react";
import { Link } from "react-router-dom";

function NavbarEntries() {
  return (
    <div className="flex">
      <div className="flex-1   text-center py-12 ">
        <Link to={"/"}>Meet Axon</Link>
      </div>
      <div className="flex-1    text-center py-12 ">Announcement</div>
      <div className="flex-1    text-center py-12 ">Arm Editor</div>
      <div className="flex-1    text-center py-12 ">Axon API</div>
      <div className="flex-1 text-center py-12 ">
        <Link to={"/contact-us"}>Contact Us</Link>
      </div>
    </div>
  );
}

export default NavbarEntries;
