import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API, fetcher } from "../../config";
import { useAudio } from "../../contexts/audioContext";

const Tracks = ({ url, styleContainer }) => {
  const { setAudio, setTrack, setPlaying, playing, setAllTrack } = useAudio();
  const { data } = useSWR(url, fetcher);
  if (!data) return null;
  const { tracks } = data;
  if (!tracks || tracks.length <= 0) return null;
  setAllTrack(tracks);

  return (
    <div className={`album-content px-10 ${styleContainer}`}>
      <div className="flex items-center justify-start mb-5 ">
        <i
          className={`text-6xl text-green-500 mr-7 cursor-pointer ${
            playing ? "fas fa-pause-circle" : "fas fa-play-circle"
          }`}
          onClick={() => {
            if (playing) {
              setPlaying(false);
            } else {
              setAudio({
                url: tracks[0].previewURL,
                index: 0,
              });
              setTrack({
                name: tracks[0].name,
                artist: tracks[0].artistName,
                img: `https://api.napster.com/imageserver/v2/albums/${tracks[0].albumId}/images/500x500.jpg`,
              });
              setPlaying(true);
            }
          }}
        ></i>
        <i className="far fa-heart text-4xl mr-7 cursor-pointer"></i>
        <i className="fas fa-ellipsis-h text-xl cursor-pointer"></i>
      </div>
      <div className="track mb-10">
        <div className="title py-2 px-5 border-b text-sm border-primary border-opacity-20 mb-3">
          # TITLE
        </div>
        <div className="flex flex-col">
          {tracks.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 px-5 cursor-pointer rounded-lg hover:bg-gray-300 hover:bg-opacity-10"
              onClick={() => {
                setAudio({
                  url: item.previewURL,
                  index: index,
                });
                setTrack({
                  name: item.name,
                  artist: item.artistName,
                  img: `https://api.napster.com/imageserver/v2/albums/${item.albumId}/images/500x500.jpg`,
                });
                setPlaying(true);
              }}
            >
              <div className="text-white font-semibold text-base flex items-center justify-start w-[80%]">
                <span className="w-[5%]">{index + 1}</span>
                <div className="flex-1 shrink-0">
                  <p>{item.name}</p>
                  <p className="text-primary text-sm">{item.artistName}</p>
                </div>
              </div>
              <p className="text-sm">
                {Math.floor(item.playbackSeconds / 60)} :{" "}
                {item.playbackSeconds -
                  Math.floor(item.playbackSeconds / 60) * 60}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
