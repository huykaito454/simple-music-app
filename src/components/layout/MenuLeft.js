import React from "react";
import { NavLink } from "react-router-dom";

const MenuLeft = () => {
  return (
    <div className="menu-left fixed w-[250px] h-full bg-black top-0 left-0 pt-8 px-6 z-10">
      <NavLink
        to={"/"}
        className="logo flex items-center justify-start mb-8 text-white"
      >
        <i className="fab fa-spotify mr-2 text-4xl "></i>
        <p className="text-large">Spotify</p>
      </NavLink>
      <div className="menu-button flex flex-col items-start mb-5 transition-all">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-white "
          }
        >
          <i className="fas fa-home w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Home</span>
        </NavLink>
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-white "
          }
        >
          <i className="fas fa-search w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Search</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-white"
          }
        >
          <i className="fas fa-grip-lines-vertical w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Library</span>
        </NavLink>
      </div>
      <div className="menu-button flex flex-col items-start mb-5 border-b border-primary border-opacity-20 pb-4 transition-all">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-white "
          }
        >
          <i className="far fa-plus-square w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Create Playlist</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-white "
          }
        >
          <i className="fas fa-heart w-[20%] text-xl text-purple-400"></i>
          <span className="text-base font-semibold">Liked Song</span>
        </NavLink>
      </div>
      <div className="menu-button flex flex-col items-start mb-5 transition-all">
        <span className="text-sm font-semibold pb-2 cursor-pointer hover:text-white">
          Create Playlist
        </span>
        <span className="text-sm font-semibold pb-2 cursor-pointer hover:text-white">
          Liked Song
        </span>
      </div>
    </div>
  );
};

export default MenuLeft;
