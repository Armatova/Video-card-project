import React, { useContext, useEffect, useState } from "react";
import { videosContext } from "../../Contexts/videosContext";
import Card from "../Card/Card";

const VideosList = () => {
  const { getAllVideos, videos } = useContext(videosContext);
  useEffect(() => {
    // console.log("страница загрузилась");
    getAllVideos();
  }, []);
  console.log(videos);
  //   const [state, setState] = useState("");
  //   const [state2, setState2] = useState("");
  //   console.log(getAllVideos);
  //!реагирует при каждом изменении в компоненте
  //   useEffect(() => {
  // console.log("useEffect!!");
  //   });
  //!реагирует при каждом изменении в state
  //   useEffect(() => {
  //     console.log("State изменился");
  //   }, [state]);
  //! реагирует при загрузке страницы
  //   useEffect(() => {
  //     // console.log("страница загрузилась");
  //     getAllVideos();
  //   }, []);

  return (
    <div>
      {videos.map((item) => (
        <Card key={item.id} item={item} />
      ))}

      {/* <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        value={state2}
        onChange={(e) => setState2(e.target.value)}
      /> */}
    </div>
  );
};

export default VideosList;
