import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./components/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVshows";
import UserLiked from "./pages/UserLiked";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<Player />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/mylist" element={<UserLiked />} />
        <Route path="/" element={<Netflix />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
