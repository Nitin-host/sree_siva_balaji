import React from "react";
import ImageGallery from "../utils/ImageGallery";
import { useNavigate } from "react-router-dom";
import "../styles/Commercial.scss";

export default function Commercial() {
  const navigate = useNavigate();

  const commercialData = {
    "": [
      {
        title: "INDUSTRIAL DESIGN",
        subtitle: "EXPOSED TEXTURES",
        image: "/images/TECH MAHINDRA-CHENNAI/TC (8).jpeg",
        description: "An industrial style blending textures.",
        projectDetails: {
          type: "Commercial",
          areaRange: "68947 sft to 72266 sft",
          landExtent: {
            value: "7.95 Acres",
            icon: "FaMapMarkedAlt",
          },
          leasableArea: "2.8 Million sft",
          environmentalDeck: "1.7 Lakh sft",
          verticalHeight: "4 Cellars + G + 21 Floors",
          powerSupport: "100% DG Back-Up",
          elevators: "4 High Speed Service Lifts + 40 Lifts",
          image: "/images/TECH MAHINDRA-CHENNAI/TC (10).jpeg",
        },
        gallery: [
          "/images/TECH MAHINDRA-CHENNAI/TC (3).jpeg",
          "/images/TECH MAHINDRA-CHENNAI/TC (8).jpeg",
          "/images/TECH MAHINDRA-CHENNAI/TC (7).jpeg",
          "/images/TECH MAHINDRA-CHENNAI/TC (6).jpeg",
          "/images/TECH MAHINDRA-CHENNAI/TC (5).jpeg",
        ],
      },
      {
        title: "PROJECT-2",
        subtitle: "EXPOSED TEXTURES",
        image: "/images/2ND-PROJECT/2nd-main-image.jpeg",
        description: "An industrial style blending textures.",
        projectDetails: {
          type: "Commercial",
          areaRange: "68947 sft to 72266 sft",
          landExtent: {
            value: "7.95 Acres",
            icon: "FaMapMarkedAlt",
          },
          leasableArea: "2.8 Million sft",
          environmentalDeck: "1.7 Lakh sft",
          verticalHeight: "4 Cellars + G + 21 Floors",
          powerSupport: "100% DG Back-Up",
          elevators: "4 High Speed Service Lifts + 40 Lifts",
          image: "/images/2ND-PROJECT/2nd-main-image.jpeg",
        },
        gallery: [
          "/images/2ND-PROJECT/2nd-image-1.jpeg",
          "/images/2ND-PROJECT/2nd-image-2.jpeg",
          "/images/2ND-PROJECT/2nd-image-3.jpeg",
          "/images/2ND-PROJECT/2nd-image-4.jpeg",
          "/images/2ND-PROJECT/2nd-image-5.jpeg",
        ],
      },
      {
        title: "PROJECT-3",
        subtitle: "EXPOSED TEXTURES",
        image:"/images/3RD -PROJECT/3rd-main-image.jpeg",
        description: "An industrial style blending textures.",
        projectDetails: {
          type: "Commercial",
          areaRange: "68947 sft to 72266 sft",
          landExtent: {
            value: "7.95 Acres",
            icon: "FaMapMarkedAlt",
          },
          leasableArea: "2.8 Million sft",
          environmentalDeck: "1.7 Lakh sft",
          verticalHeight: "4 Cellars + G + 21 Floors",
          powerSupport: "100% DG Back-Up",
          elevators: "4 High Speed Service Lifts + 40 Lifts",
          image: "/images/2ND-PROJECT/2nd-main-image.jpeg",
        },
        gallery: [
          "/images/2ND-PROJECT/2nd-image-1.jpeg",
          "/images/2ND-PROJECT/2nd-image-2.jpeg",
          "/images/2ND-PROJECT/2nd-image-3.jpeg",
          "/images/2ND-PROJECT/2nd-image-4.jpeg",
          "/images/2ND-PROJECT/2nd-image-5.jpeg",
        ],
      },

      {
        title: "BACK TO HISTORY",
        subtitle: "SITTING LOUNGE",
        image: "/images/TECH MAHINDRA-CHENNAI/TC (7).jpeg",
        description: "Cozy historical design elements.",
        gallery: [
          "/images/TECH MAHINDRA-CHENNAI/TC (7).jpeg",
          "/images/TECH MAHINDRA-CHENNAI/TC (6).jpeg",
        ],
      },
      // Add more projects similarly...
    ],
  };

  return (
    <section className="commercial-container">
      <div className="image-container">
        <img
          src="/images/TECH MAHINDRA-CHENNAI/TC (8).jpeg"
          alt="Nature Background"
        />
        <div className="text-overlay">
          <h1>COMMERCIAL</h1>
        </div>
      </div>

      <div className="golden-line"></div>
      <div className="commercial-content">
        <p>
          Welcome to our commercial section! Here, we showcase our latest
          products and services.
        </p>
        <div className="image-gallery">
          <ImageGallery data={commercialData} navigate={navigate} />
        </div>
      </div>
    </section>
  );
}
