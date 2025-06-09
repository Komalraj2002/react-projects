import react from "react";
import { useState, useEffect } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable , setDisable] = useState(false)
  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData)=>[...prevData , ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [count]);

useEffect( ()=>
{if(products && products.length === 100){
setDisable(true)
}}
,[products])

  if (loading) {
    <div> loading!! please wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled = {disable} onClick={()=>setCount(count + 1)}> load more products</button>
      </div>
      {disable ? <p> you have reached the 100 products </p> : null}
    </div>
  );
}
