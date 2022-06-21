import { cleanup } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import { useAudio } from "../../contexts/audioContext";

const Playing = () => {
  const { audio, track, playing, setPlaying, allTrack, setAudio, setTrack } =
    useAudio();
  const [timeLine, setTimeLine] = useState(0);
  const song = document.querySelector("#song");
  const bar = document.querySelector("#progress-bar");
  const playerDuration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const handleBar = useRef({});
  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  handleBar.current = async () => {
    setInterval(() => {
      bar.max = song.duration;
      bar.defaultValue = song.currentTime;
      remaining.textContent = formatTimer(song.currentTime);
      if (!song.duration) {
        playerDuration.textContent = "0:00";
      } else {
        playerDuration.textContent = formatTimer(song.duration);
      }
      setTimeLine(song.currentTime);
    }, 500);
    clearInterval();
  };
  function handleNextSong() {
    if (audio.index === allTrack.length) {
      return;
    } else {
      const nextIndex = audio.index + 1;
      setAudio({
        url: allTrack[nextIndex].previewURL,
        index: nextIndex,
      });
      setTrack({
        name: allTrack[nextIndex].name,
        artist: allTrack[nextIndex].artistName,
        img: `https://api.napster.com/imageserver/v2/albums/${
          allTrack[nextIndex - 1].albumId
        }/images/500x500.jpg`,
      });
    }
  }
  function handlePreviousSong() {
    if (audio.index === 0) {
      return;
    } else {
      const nextIndex = audio.index - 1;
      setAudio({
        url: allTrack[nextIndex].previewURL,
        index: nextIndex,
      });
      setTrack({
        name: allTrack[nextIndex].name,
        artist: allTrack[nextIndex].artistName,
        img: `https://api.napster.com/imageserver/v2/albums/${allTrack[nextIndex].albumId}/images/500x500.jpg`,
      });
    }
  }
  function change(e) {
    song.currentTime = e.target.value;
    setTimeLine(song.currentTime);
  }
  useEffect(() => {
    if (audio.url && playing) {
      song.play();
      handleBar.current();
      setTimeLine(song.currentTime);
    } else if (audio.url && !playing) {
      song.pause();
    }
    return () => {};
  }, [audio, playing, song, timeLine]);
  return (
    <div className="playing fixed bottom-0 left-0 z-10 px-3 py-2 w-full border-t-2 border-border flex items-center justify-between bg-body">
      <div className="playing-left flex items-center justify-start w-[20%]">
        <div className="playing-img w-14 h-14 mr-4">
          <img src={track.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="playing-info transition-all">
          <div className="playing-song text-white text-sm mr-4 cursor-pointer">
            {track.name}
          </div>
          <div className="playing-artist text-xs cursor-pointer hover:text-white">
            {track.artist}
          </div>
        </div>
        <i className="far fa-heart cursor-pointer text-primary hover:text-white"></i>
      </div>
      <div className="playing-center w-[60%] flex items-center justify-center flex-col">
        <div className="playing-btn w-[50%] flex items-center justify-center transition-all mb-1">
          <div className="playing-btn-item cursor-pointer px-3 text-xl hover:text-white">
            <i className="fas fa-random"></i>
          </div>
          <div
            onClick={handlePreviousSong}
            className="playing-btn-item cursor-pointer px-3 text-xl hover:text-white"
          >
            <i className="fas fa-step-backward"></i>
          </div>
          <div
            className="playing-btn-item cursor-pointer px-3 text-4xl hover:text-white hover:scale-105"
            onClick={() => setPlaying(!playing)}
          >
            <i
              className={`${
                playing ? "fas fa-pause-circle" : "fas fa-play-circle"
              }`}
            ></i>
          </div>
          <div
            onClick={handleNextSong}
            className="playing-btn-item cursor-pointer px-3 text-xl hover:text-white"
          >
            <i className="fas fa-step-forward"></i>
          </div>
          <div className="playing-btn-item cursor-pointer px-3 text-xl hover:text-white">
            <i className="fas fa-redo-alt"></i>
          </div>
        </div>
        <div className="playing-line w-[70%] flex items-center justify-between">
          <div className="time-left w-[10%] flex items-center justify-center">
            <span className="player-remaining">00:00</span>
          </div>
          <div className="progress w-[80%] flex items-center justify-center ">
            <input
              type="range"
              min="0"
              max=""
              value={timeLine}
              className="bar"
              id="progress-bar"
              onChange={change}
            />
            <audio id="song" src={audio.url}></audio>
          </div>
          <div className="time-right w-[10%] flex items-center justify-center">
            <span className="player-duration">0:00</span>
          </div>
        </div>
      </div>
      <div className="playing-right w-[20%] flex items-center justify-end">
        <div className="playing-volume flex items-center justify-center">
          <i className="fas fa-volume-up mr-5"></i>
          <div className="progress">
            <input type="range" min="0" max="" className="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
