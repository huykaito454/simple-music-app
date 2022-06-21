import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API, fetcher } from "../../config";
import { useAudio } from "../../contexts/audioContext";
import Tracks from "./Tracks";

const AlbumDetails = () => {
  const { albumId } = useParams();
  const { data } = useSWR(API.getAlbumDetails(albumId), fetcher);
  const urlTrack = API.getTracksAlbum(albumId);

  if (!data) return null;
  const { albums } = data;
  if (!albums || albums.length <= 0) return null;
  return (
    <div className="mb-20 page-container">
      <div className="album-top flex items-end justify-between mb-10 px-10">
        <div className="album-img w-[20%]">
          <img
            src={`https://api.napster.com/imageserver/v2/albums/${albums[0]?.id}/images/500x500.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="album-title flex-1 shrink-0 px-5 text-white font-semibold">
          <p className="text-sm uppercase">{albums[0]?.type}</p>
          <h1 className="text-5xl py-2">{albums[0]?.name}</h1>
          <div className="album-artist flex items-center justify-start cursor-pointer">
            <div className="w-8 h-8 rounded-full mr-2">
              <img
                src={`https://api.napster.com/imageserver/v2/artists/${albums[0]?.links?.artists?.ids[0]}/images/633x422.jpg`}
                alt=""
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png";
                  e.onError = null;
                }}
              />
            </div>
            <p>{albums[0]?.artistName}</p>
            <i className="fas fa-circle text-[5px] px-1"></i>
            <p>{new Date(albums[0]?.released).getFullYear()}</p>
            <i className="fas fa-circle text-[5px] px-1"></i>
            <p>{albums[0]?.trackCount} songs</p>
          </div>
        </div>
      </div>
      <Tracks url={urlTrack}></Tracks>
    </div>
  );
};

export default AlbumDetails;
