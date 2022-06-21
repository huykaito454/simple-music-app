import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();
function AudioProvider(props) {
  const [audio, setAudio] = useState({
    url: "",
    index: 0,
  });
  const [allTrack, setAllTrack] = useState({});
  const [track, setTrack] = useState({
    name: "No Song",
    artist: "No Artist",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png",
  });
  const [playing, setPlaying] = useState(false);
  const value = {
    audio,
    setAudio,
    track,
    setTrack,
    playing,
    setPlaying,
    allTrack,
    setAllTrack,
  };
  return (
    <AudioContext.Provider value={value} {...props}></AudioContext.Provider>
  );
}
function useAudio() {
  const context = useContext(AudioContext);
  if (typeof context === "undefined")
    throw new Error("useAudio must be used within a AudioProvider");
  return context;
}
export { useAudio, AudioProvider };
