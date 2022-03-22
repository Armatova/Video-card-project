import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add/Add";
import Details from "./Components/Details/Details";
import Edit from "./Components/Edit/Edit";
import Header from "./Components/Header/Header";
import VideosList from "./Components/VideosList/VideosList";
import VideosContextProvider from "./Contexts/videosContext";

const App = () => {
  return (
    <VideosContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideosList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </VideosContextProvider>
  );
};

export default App;
