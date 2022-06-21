export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const key = "YjQ0YmM1MmMtZTJiOC00ODM5LThkZTctZjhhNzI0MWEyNzU5";
const endPoint = "http://api.napster.com/v2.2";
export const API = {
  getAlbum: (type) => `${endPoint}/albums/${type}?apikey=${key}`,
  getSearch: (query) => `${endPoint}/search?apikey=${key}&query=${query}`,
  getAlbumDetails: (id) => `${endPoint}/albums/${id}?apikey=${key}`,
  getArtistDetails: (id) => `${endPoint}/artists/${id}?apikey=${key}`,
  getTracksAlbum: (id) => `${endPoint}/albums/${id}/tracks?apikey=${key}`,
  getTracksArtist: (id) => `${endPoint}/artists/${id}/tracks/top?apikey=${key}`,
  getAlbumArtist: (id) => `${endPoint}/artists/${id}/albums/top?apikey=${key}`,
  getImageArtist: (id) => `${endPoint}/artists/${id}/images?apikey=${key}`,
};
