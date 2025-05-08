import React, { useState, useEffect } from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { useSwipeable } from "react-swipeable";
import "../styles/ImageModal.scss";

const ImageModal = ({ images, startIndex = 0, onClose }) => {
  const [modal, setModal] = useState(true);
  const [index, setIndex] = useState(startIndex);

  const toggle = () => {
    setModal(false);
    if (onClose) onClose();
  };

  const next = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
  });

  // Lock scroll when modal is open
useEffect(() => {
  if (modal) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.dataset.scrollY = scrollY;
  } else {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0"));
  }

  return () => {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0"));
  };
}, [modal]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggle();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="image-modal"
      centered
      backdrop="static"
      keyboard={false}
    >
      <ModalBody className="modal-body-custom">
        <div {...handlers} className="swipe-wrapper">
          <Button className="close-btn" onClick={toggle}>
            &times;
          </Button>
          <img src={images[index]} alt="preview" className="modal-img" />
          <Button className="nav-arrow left bg-transparent" onClick={prev}>
            {`<--`}
          </Button>
          <Button className="nav-arrow right bg-transparent" onClick={next}>
            {`-->`}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ImageModal;
