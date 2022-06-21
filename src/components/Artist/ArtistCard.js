import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artist/${item.id}`)}
      className="music-card p-4 flex flex-col bg-card h-full rounded-lg cursor-pointer"
    >
      <div className="mb-5 max-w-[150px] h-[150px] rounded-full">
        <img
          src={`https://api.napster.com/imageserver/v2/artists/${item.id}/images/633x422.jpg`}
          alt=""
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png";
            e.onError = null;
          }}
        />
      </div>
      <span className="text-white text-lg font-semibold text-no-wrap-1 mt-auto">
        {item.name}
      </span>
      <span className="text-no-wrap-2 leading-4 text-sm">{item.type}</span>
    </div>
  );
};

export default ArtistCard;
