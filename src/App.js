import "./App.css";
// import { useEffect, useState } from "react";
import Accordian from "./components/accordian";
import Random from "./components/random-color";
import StarRating from "./components/starRating";
import ImageSlider from "./components/image-slider";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //use Effect
  // first =side effect
  // second= cleanup task
  //third = comma seprated dep list (if there is any updation the side effect logic start running again)

  // VARIATION 1 RUNS ON EVERY RENDER
  // useEffect( () => {
  //   alert ( " runs on every render")
  // } )

  // VARIATION 2 THAT RUNS ON EVRY FIRST RENDER
  // useEffect(() => {
  //   alert(" it will run on first render only");
  // }, [])

  // VARIATION 3 THAT RUNS EVERY TIME COUNT IS UPDATED
  // useEffect(() => {
  //   alert(" It will run every time count is updated ");
  // }, [count])

  // VARIATION 4 MULTIPLE DEPENDENCY SNIPPET
  //  useEffect(() => {
  //   alert("i will render everytime count/total is updated");
  //  }, [count,total])

  // variation 5 adding a clean up function

  //  useEffect(() => {
  //    alert (" count is updated")
  //    return () => {
  //      alert(" previous value of count is removed(cleanup)");
  //    }
  //  }, [count])

  // function handleClick() {
  //   setCount(count+1);
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);

  // }

  return (
    // <div>
    //   <button onClick={handleClick}>
    //     update count
    //   </button>
    //   <br/>
    //   count is : { count}

    //   <br/>
    //   <button onClick={handleClickTotal}>
    //     update total
    //   </button>
    //   <br/>
    //   Total is : {total}
    // </div>

  <div className="App">
      {/* accordian component */}
       <Accordian /> 

      {/* random colour component */}
       <Random/>
     
     {/* star rating component */}
     <StarRating noOfStars = {10}/>

     {/* image slider component  */}
     <ImageSlider url={'https://picsum.photos/v2/list'} page = {'1'} limit = {"4"}/>

   </div>
  );
}

export default App;

