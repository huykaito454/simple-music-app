import React from "react";
import MusicList from "../components/Music/MusicList";
const HomePage = () => {
  return (
    <>
      <div className="gradient h-[112px] w-full"></div>
      <div className="page-container">
        <MusicList title={"Top Albums"} type={"top"}></MusicList>
        <MusicList title={"New Releases"} type={"new"}></MusicList>
      </div>
    </>
  );
};

export default HomePage;
