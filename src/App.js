import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

import Spinner from "./components/Spinner";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import FilterCards from "./components/FilterCards";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&category=${category}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term, category]);

  return (
    <div className="page">
      <div className="container mx-auto page">
        <div className="header py-4 flex gap-4">
          <ImageSearch searchText={(text) => setTerm(text)} />
          <div className="dropdown">
            <div
              className="select"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              <span className="selected">Filter</span>
              <div className="caret"></div>
            </div>
            {openDropdown && (
              <FilterCards
                images={images}
                setCategory={setCategory}
                setOpenDropdown={setOpenDropdown}
              />
            )}
          </div>
        </div>
        {!isLoading && images.length === 0 && <ErrorMessage />}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
