import React from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../assets/assets";
export default function Navbar() {
  return (
    <div className="flex justify-between py-3 px-6 ">
      <Link to={"/"}>
        <div className="font-bold text-xl flex">
          <img src={MainLogo} alt="" className="w-16 relative -top-4" />
          AnalyteX
        </div>
      </Link>

      <ul className="flex gap-7 font-medium ">
        <Link to={"/Registration"}>Registration</Link>
        <Link to={"/Resources"}>Resources</Link>
        <Link to={"/Initiative"}>Initiative</Link>
        <Link to={"/Consultancy"}>Consultancy</Link>
        <Link to={"/Feedback"}>Feedback</Link>
        <Link to={"/admin"}>admin</Link>
      </ul>
    </div>
  );
}
