import logo from "./logo.svg";
import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import { AudioProvider } from "./contexts/audioContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const ArtistPage = lazy(() => import("./pages/ArtistPage"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <AudioProvider>
          <Routes>
            <Route element={<Main></Main>}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/search" element={<SearchPage></SearchPage>}></Route>
              <Route
                path="/albums/:albumId"
                element={<AlbumPage></AlbumPage>}
              ></Route>
              <Route
                path="/artist/:artistId"
                element={<ArtistPage></ArtistPage>}
              ></Route>
            </Route>
          </Routes>
        </AudioProvider>
      </Suspense>
    </Fragment>
  );
}

export default App;
