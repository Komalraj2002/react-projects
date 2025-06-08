import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentImage, setCurrentIamge] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchIamges(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url != "") fetchIamges(url);
  }, [url]);

  console.log(image);
  if (loading) {
    return <div> Loading Data ! please wait</div>;
  }
  if (errorMsg != null) {
    return <div>error occured {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentIamge(currentImage == 0 ? image.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentIamge(currentImage == image.length - 1 ? 0 : currentImage + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageitem, index) => (
            <img
              key={imageitem.id}
              alt={imageitem.download_url}
              src={imageitem.download_url}
              className={
                currentImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentImage == index
                    ? "circle-indicator"
                    : "circle-indicator inactive-indicator"
                }
                onClick={() => setCurrentIamge(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
