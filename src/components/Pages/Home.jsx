import React from "react";
import NavBar from "../Navbar/NavBar";
import LeftSide from "../LeftSidebar/LeftSide";

const Home = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 z-10 w-full bg-white">
        <NavBar></NavBar>
      </div>
      <div className="flex">
        <div className="flex-auto w-[20%] fixed top-12">
          <LeftSide></LeftSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
