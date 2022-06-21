import React from "react";
import useSWR from "swr";
import { API, fetcher } from "../../config";
import MusicCard, { MusicCardSkeleton } from "./MusicCard";

const MusicList = ({ title, type }) => {
  const { data, error } = useSWR(API.getAlbum(type), fetcher);
  const isLoading = !data && !error;
  if (!data) return null;
  const { albums } = data;
  if (!albums || albums.length <= 0) return null;

  return (
    <>
      {isLoading && (
        <section className="px-10 mb-10 ">
          <h1 className="text-2xl font-bold text-white mb-8">{title}</h1>
          <div className="grid grid-cols-6 gap-6 mb-10">
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
            <MusicCardSkeleton></MusicCardSkeleton>
          </div>
        </section>
      )}
      {!isLoading && (
        <section className="px-10 mb-10 ">
          <h1 className="text-2xl font-bold text-white mb-8">{title}</h1>
          <div className="grid grid-cols-6 gap-6 mb-10">
            {albums.map((item) => (
              <MusicCard key={item.id} item={item}></MusicCard>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default MusicList;
