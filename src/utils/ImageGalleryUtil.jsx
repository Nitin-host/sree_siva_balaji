import React from "react";
import '../styles/ImageGalleryUtil.scss'
import { Card, CardBody, Col, Row } from "reactstrap";

function ImageGalleryUtil({ data }) {
  const {
    imageSrc,
    altText = "Property management",
    title,
    subtitle,
    description,
    buttonText = "Learn More",
    onButtonClick,
    position = "right", // "left" or "right"
  } = data || {};

  const isImageLeft = position === "left";

  return (
    <Row
      className={`banner-container ${
        isImageLeft ? "image-left" : "image-right"
      }`}
    >
      <Col xs={12} md={7} className="banner-image">
        <img src={imageSrc} alt={altText} />
      </Col>

      <Col xs={12} md={5} className="text-overlay">
        <Card className="p-2 custom-card">
          <CardBody>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {description && <p>{description}</p>}
          </CardBody>
        </Card>
        {buttonText && (
          <button className="btn btn-view-project" onClick={onButtonClick}>
            <span className="btn-text">{buttonText}</span>
            <span className="btn-icon">→</span>
          </button>
        )}
      </Col>
    </Row>
  );
}

export default ImageGalleryUtil;
