import {faStar} from "react-icons/fa"

export default function StarRating({noOfStars = 5}){
     
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);
  function handleClick(getCurrentIndex){
   
  }
  function handleMouseEnter(getCurrentIndex){

  }
  function handleMouseLeave(getCurrentIndex){
    
  }
  
  return <div className = "star-rating">
  {
     [...Array(noOfStars)].map((_,index)=>{
     
   return <FaStar
      key={index}
      onClick={handle}
      onMouseMove={handle}
      onMouseLeave={handle}
      size={40}
   /> 
     })
  }
  </div>
}


















