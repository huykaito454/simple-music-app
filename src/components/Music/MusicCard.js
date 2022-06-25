import LoadingSkeleton from "components/loading/LoadingSkeleton";
import React from "react";
import { useNavigate } from "react-router-dom";
////https://api.napster.com/imageserver/v2/albums/alb.548725349/images/500x500.jpg
const MusicCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/albums/${item.id}`)}
      className="music-card p-4 flex flex-col bg-card h-full rounded-lg cursor-pointer group"
    >
      <div className="mb-5 rounded-sm relative">
        <img
          src={`https://api.napster.com/imageserver/v2/albums/${item.id}/images/300x300.jpg`}
          alt=""
          className="w-full h-full object-cover rounded-sm"
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png";
            e.onError = null;
          }}
        />
        <i className="fas fa-play absolute bottom-2 right-2 text-4xl text-[#1ed760] opacity-0 group-hover:opacity-100 play-transitions"></i>
      </div>
      <span className="text-white text-base font-semibold text-no-wrap-1 mt-auto">
        {item.name}
      </span>
      <span className="text-no-wrap-2 leading-4 text-sm">
        {item.artistName}
      </span>
    </div>
  );
};

export default MusicCard;

export const MusicCardSkeleton = () => {
  return (
    <div className="music-card p-4 flex flex-col bg-card h-full rounded-lg cursor-pointer group">
      <div className="mb-5 rounded-sm relative">
        <LoadingSkeleton
          width="100%"
          radius="2px"
          className="object-cover h-[135px]"
        ></LoadingSkeleton>
      </div>
      <span className="text-white text-base font-semibold text-no-wrap-1 mt-auto">
        <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
      </span>
      <span className="text-no-wrap-2 leading-4 text-sm">
        <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
      </span>
    </div>
  );
};
