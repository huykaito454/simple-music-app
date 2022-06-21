import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ArtistCard from "../components/Artist/ArtistCard";
import MusicCard from "../components/Music/MusicCard";
import MusicList from "../components/Music/MusicList";

import { API, fetcher } from "../config";
import useDebounce from "../hook/useDebounce";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(API.getSearch("top"));
  const { data, error } = useSWR(url, fetcher);
  const filterDebounce = useDebounce(query, 500);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (filterDebounce) {
      setUrl(API.getSearch(filterDebounce));
    } else {
      setUrl(API.getSearch("top"));
    }
  }, [filterDebounce]);
  const albums = data?.search?.data?.albums || [];
  const artists = data?.search?.data?.artists || [];

  return (
    <>
      <div className="gradient h-[112px] w-full"></div>
      <div className="page-container">
        <div className="flex items-center justify-start mb-10 mx-10">
          <i className="fas fa-search -mr-8 text-2xl z-10 text-black"></i>
          <input
            type="text"
            className="px-10 py-2 w-[30%]  outline-none text-sm text-black rounded-2xl "
            placeholder="Artists, songs, or playlist..."
            onChange={handleSearch}
          />
        </div>
        <section className="px-10 mb-10">
          <h1 className="text-2xl font-bold text-white mb-8">Albums</h1>
          <div className="grid grid-cols-6 gap-6 mb-10">
            {albums.length > 0 &&
              albums.map((item) => (
                <MusicCard key={item.id} item={item}></MusicCard>
              ))}
          </div>
        </section>
        <section className="px-10 mb-10">
          <h1 className="text-2xl font-bold text-white mb-8">Artists</h1>
          <div className="grid grid-cols-6 gap-6 mb-10">
            {artists.length > 0 &&
              artists.map((item) => (
                <ArtistCard key={item.id} item={item}></ArtistCard>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchPage;
