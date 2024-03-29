"use client";
import { Abc } from "@mui/icons-material";
import React from "react";
import "./nav.scss";
import Search from "@/components/navigator/search/page";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="app-image-container">
        <Abc />
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
