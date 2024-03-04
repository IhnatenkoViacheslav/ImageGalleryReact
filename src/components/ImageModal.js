import React from "react";

const ImageModal = ({ image, showModal, setShowModal }) => {
  const onClose = () => {
    setShowModal(false);
  };

  return showModal ? (
    <div className="modal-background" onClick={() => onClose()}>
      <div className="modal-content">
        <img src={image.webformatURL} alt="img" className="object-contain" />
        <div className="modal__content-title">Photo by {image.user}</div>
      </div>
    </div>
  ) : null;
};

export default ImageModal;
