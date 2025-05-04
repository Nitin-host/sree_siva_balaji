import { useState, useEffect } from "react";
import "../styles/Carousel.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="custom-carousel-wrapper position-relative">
      <div className="carousel-slide" data-bs-ride="false">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={`slide-${index}`}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.altText}
                className="covered-image"
              />
              {item.caption && (
                <div className="carousel-caption d-md-block">
                  <h5>{item.caption.title}</h5>
                  <p>{item.caption.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
