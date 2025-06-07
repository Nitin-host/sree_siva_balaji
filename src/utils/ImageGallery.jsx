import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/ImageGallery.module.scss";

export default function ImageGallery({ data, navigate }) {
  if (!data || Object.keys(data).length === 0) {
    return <p>No categories available.</p>;
  }

  return (
    <div className={styles["list-layout"]}>
      {Object.entries(data).map(([category, projects]) =>
        projects.length > 0 ? (
          <div key={category}>
            {category && (
              <h2 className={styles["section-title"]}>{category}</h2>
            )}
            <div className="project-section">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  data={{
                    imageSrc: project.image,
                    altText: project.title,
                    title: project.title,
                    subtitle: project.subtitle,
                    description: project.description || "",
                    buttonText: "View Project",
                    onButtonClick: () =>
                      navigate(
                        `/project-details/${encodeURIComponent(project.title)}`,
                        {
                          state: {
                            title: project.title,
                            subtitle: project.subtitle,
                            description: project.description,
                            projectDetails: project.projectDetails,
                            gallery: project.gallery,
                          },
                        }
                      ),
                    position: index % 2 === 0 ? "left" : "right",
                  }}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
