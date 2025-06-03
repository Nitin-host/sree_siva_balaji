import React from "react";
import "../styles/ProjectCard.scss";

const ProjectCard = ({ data }) => {
  const {
    imageSrc,
    altText = "Property management",
    title,
    subtitle,
    description,
    buttonText = "Learn More",
    onButtonClick,
    position = "right",
  } = data || {};

  const isReversed = position === "left";

  return (
    <div className={`project-card ${isReversed ? "reverse" : ""}`}>
      <div className="project-image">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <h4 className="project-subtitle">{subtitle}</h4>
        {description && <p className="project-description">{description}</p>}
        <button className="view-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
