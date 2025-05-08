import React from "react";
import ImageGallery from "../utils/ImageGallery";
import "../styles/Commercial.scss";

export default function Residential() {
   const commercialData = {
     '': [
       {
         title: "INDUSTRIAL DESIGN",
         subtitle: "EXPOSED TEXTURES",
         image: '/images/TECH MAHINDRA-CHENNAI/TC (8).jpeg',
         link: "/residential",
       },
       {
         title: "BACK TO HISTORY",
         subtitle: "SITTING LOUNGE",
          image: "/images/TECH MAHINDRA-CHENNAI/TC (7).jpeg",
          link: "/residential",
       },
       {
         title: "MODERN WAVES",
         subtitle: "LUXURY TOUCH",
          image: "/images/TECH MAHINDRA-CHENNAI/TC (6).jpeg",
          link: "/residential",
       },
       {
         title: "CAFE",
         subtitle: "TOUCH OF COLOURS",
          image: "/images/TECH MAHINDRA-CHENNAI/TC (5).jpeg",
          link: "/residential",
       },
       {
         title: "GYM",
         subtitle: "LIFT UP",
          image: "/images/TECH MAHINDRA-CHENNAI/TC (4).jpeg",
          link: "/residential",
       }
     ],
   };
    return (
      <section className="commercial-container">
        <div className="image-container">
          <img
            src="/images/TECH-MAHINDRA-HYD/T (1).jpeg"
            alt="Nature Background"
          />
          <div className="text-overlay">
            <h1>RESIDENTIAL</h1>
          </div>
        </div>

        <div className="golden-line"></div>
        <div className="commercial-content">
          <p>
            Welcome to our residential section! Here, we showcase our latest
            products and services designed to meet your business needs. Explore
            our offerings and discover how we can help you achieve your goals.
          </p>
          <div className="image-gallery">
            <ImageGallery data={commercialData} />
          </div>
        </div>
      </section>
    );
}