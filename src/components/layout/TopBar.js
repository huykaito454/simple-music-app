import React, { useEffect } from "react";

const TopBar = () => {
  useEffect(() => {
    const handleBackgroundTopBar = () => {
      const topBar = document.getElementById("top-bar");
      if (window.scrollY > 100 && window.scrollY < 200) {
        topBar.classList.remove("bg-opacity-0");
        topBar.classList.add("bg-opacity-50");
      } else if (window.scrollY > 200) {
        topBar.classList.remove("bg-opacity-50");
      } else {
        topBar.classList.add("bg-opacity-0");
        topBar.classList.remove("bg-opacity-50");
      }
    };
    window.addEventListener("scroll", handleBackgroundTopBar);
    return () => {
      window.removeEventListener("scroll", handleBackgroundTopBar);
    };
  }, []);
  return (
    <div
      id="top-bar"
      className="top-bar w-full flex items-center justify-end bg-top py-3 px-6 fixed bg-black bg-opacity-0 z-10"
    >
      <div className="account flex items-center justify-between cursor-pointer p-1 rounded-full hover:bg-primary hover:bg-opacity-10">
        <div className="avatar w-7 h-7 rounded-full mr-2">
          <img
            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/97563806_2656875631248579_3206429855126126592_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=VFIqS3FsXCAAX9dyMVB&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-T4xKxFwDuQg2yt4NfiHFKGAzDgT2nWEBnF_KG5_x-_A&oe=6258E2BD"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-white">
          Nguyễn Trọng Huy
        </span>
        <i className="fas fa-caret-down text-white ml-2"></i>
      </div>
    </div>
  );
};

export default TopBar;
