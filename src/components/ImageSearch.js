import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="search-form">
          <input
            type="text"
            className="input-search"
            placeholder="Search Image Term..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button-search" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
