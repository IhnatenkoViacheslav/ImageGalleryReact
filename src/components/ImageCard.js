import React, { useState } from "react";

import ImageModal from "./ImageModal";

const ImageCard = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const tags = image.tags.split(",");

  const onHandleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="card shadow-lg">
      <ImageModal
        showModal={showModal}
        image={image}
        setShowModal={setShowModal}
      />
      <div onClick={() => onHandleClick()}>
        <img
          src={image.webformatURL}
          alt="img"
          className="card-image lg:h-80 md:h-60"
        />
      </div>
      <div className="card__content">
        <div className="card__content-title text-xl">Photo by {image.user}</div>
        <ul className="card__content-list">
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="content-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tags-item">
            #{tag.slice(0, 11)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
