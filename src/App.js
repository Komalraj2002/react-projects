import "./App.css";
// import { useEffect, useState } from "react";
import Accordian from "./components/accordian";
import Random from "./components/random-color";
import StarRating from "./components/starRating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {

  return (
  

    <div className="App">
      {/* accordian component */}
      <Accordian />

      {/* random colour component */}
      <Random />

      {/* star rating component */}
      <StarRating noOfStars={10} />

      {/* image slider component  */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      />

      {/*load more data  */}
     <LoadMoreData/>
    </div>
  );
}

export default App;
