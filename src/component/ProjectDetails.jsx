import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import { Row, Col } from "reactstrap";
import ImageModal from "../utils/ImageModal";
import "../styles/ProjectDetails.scss";
const iconLibraries = { ...FaIcons, ...MdIcons, ...AiIcons }; 

export default function ProjectDetails() {
  const { state } = useLocation();
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const navigate = useNavigate();

  if (!state || !state.gallery || state.gallery.length === 0) {
    return (
      <p>
        Invalid project. <button onClick={() => navigate(-1)}>Go Back</button>
      </p>
    );
  }

  const { subtitle, description, gallery, projectDetails } = state;

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  console.log("Project Details:", projectDetails);

  return (
    <div className="project-details-container">
      {/* Top Banner Image */}
      <div className="banner">
        <img src={gallery[0]} alt={decodedTitle} />
        <div className="overlay-text">
          <h1>{decodedTitle}</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      </div>
      <div className="golden-line"></div>

      {/* Project Description */}
      {/* <div className="details">{description && <p>{description}</p>}</div> */}
      {projectDetails && (
        <Row className="p-4">
          <Col xs={12} md="6">
            <h3>{projectDetails.type}</h3>
            <h2 className="text-warning display-6 fw-bold">
              {projectDetails.areaRange}
            </h2>
            <hr />
            <table className="table border-bottom-only">
              <tbody>
                {Object.entries(projectDetails).map(([key, detail]) => {
                  if (["type", "areaRange", "image"].includes(key)) return null;

                  const label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());

                  // Support both string or { value, icon }
                  const value =
                    typeof detail === "string" ? detail : detail?.value;
                  const icon = typeof detail === "object" && detail?.icon;

                  let iconElement = null;
                  if (icon) {
                    if (icon.startsWith("<svg")) {{
                      Object.entries(projectDetails).map(([key, detail]) => {
                        if (["type", "areaRange", "image"].includes(key))
                          return null;

                        const label = key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase());

                        // Support both string or { value, icon }
                        const value =
                          typeof detail === "string" ? detail : detail?.value;
                        const icon = typeof detail === "object" && detail?.icon;

                        let iconElement = null;
                        if (icon) {
                          if (icon.startsWith("<svg")) {
                            iconElement = (
                              <span
                                className="me-2"
                                dangerouslySetInnerHTML={{ __html: icon }}
                              />
                            );
                          } else if (iconLibraries[icon]) {
                            const IconComp = iconLibraries[icon];
                            iconElement = <IconComp className="me-2" />;
                          }
                        }

                        return (
                          <tr key={key}>
                            <th>
                              {iconElement}
                              {label}
                            </th>
                            <td>{value}</td>
                          </tr>
                        );
                      });
                    }

                      iconElement = (
                        <span
                          className="me-2"
                          dangerouslySetInnerHTML={{ __html: icon }}
                        />
                      );
                    } else if (iconLibraries[icon]) {
                      const IconComp = iconLibraries[icon];
                      iconElement = <IconComp className="me-2" />;
                    }
                  }

                  return (
                    <tr key={key}>
                      <th>
                        {iconElement}
                        {label}
                      </th>
                      <td>{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
          <Col xs={12} md="6">
            <img
              src={projectDetails.image}
              alt={title}
              className="img-fluid rounded shadow"
              // style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      )}

      {/* Image Gallery Grid */}
      <div className="gallery-section">
        <h2>Gallery</h2>
        <Row>
          {gallery.map((img, idx) => (
            <Col key={idx} xs="12" sm="6" md="4" lg="3" className="mb-4">
              <div className="gallery-image-container">
                <img
                  src={img}
                  alt={`Project ${idx}`}
                  className="img-fluid gallery-image"
                  onClick={() => openImageModal(idx)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <ImageModal
          images={gallery}
          startIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
