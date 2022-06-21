import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Tracks from "../components/layout/Tracks";
import MusicCard from "../components/Music/MusicCard";
import { API, fetcher } from "../config";

const ArtistPage = () => {
  const { artistId } = useParams();
  const { data: artistsData } = useSWR(API.getArtistDetails(artistId), fetcher);
  const { data: imagesData } = useSWR(API.getImageArtist(artistId), fetcher);
  const urlTopTrack = API.getTracksArtist(artistId);
  if (!artistsData) return null;
  if (!imagesData) return null;
  const { artists } = artistsData;
  const { images } = imagesData;
  if (!artists || artists.length <= 0) return null;
  if (!images || images.length <= 0) return null;

  return (
    <div className="mb-20">
      <div className=" flex items-end justify-between mb-10 ml-[250px]">
        <img
          src={images[3].url}
          alt=""
          className="max-h-[300px] w-full object-cover"
        />
        <div className=" w-full px-5 text-white font-semibold absolute ">
          <p className="text-sm uppercase ">{artists[0]?.type}</p>
          <h1 className="text-5xl py-2 ">{artists[0]?.name}</h1>
          <div className=" flex items-center justify-start cursor-pointer"></div>
        </div>
      </div>
      <Tracks url={urlTopTrack} styleContainer={"page-container"}></Tracks>
      <TopAlbum></TopAlbum>
    </div>
  );
};
const TopAlbum = () => {
  const { artistId } = useParams();
  const { data, error } = useSWR(API.getAlbumArtist(artistId), fetcher);
  if (!data) return null;
  const { albums } = data;
  if (!albums || albums.length <= 0) return null;
  return (
    <section className=" mb-10 page-container px-10">
      <h1 className="text-2xl font-bold text-white mb-8">Top Albums</h1>
      <div className="grid grid-cols-6 gap-6 mb-10">
        {albums.map((item) => (
          <MusicCard key={item.id} item={item}></MusicCard>
        ))}
      </div>
    </section>
  );
};

export default ArtistPage;
