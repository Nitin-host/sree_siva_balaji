import React from "react";
import ImageGallery from "../utils/ImageGallery";
import "../styles/Commercial.scss";

export default function Commercial() {
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
            src="/images/TECH MAHINDRA-CHENNAI/TC (8).jpeg"
            alt="Nature Background"
          />
        </div>

        <div className="golden-line"></div>
        <div className="commercial-content">
          <h1>Commercial</h1>
          <p>
            Welcome to our commercial section! Here, we showcase our latest
            products and services designed to meet your business needs. Explore
            our offerings and discover how we can help you achieve your goals.
          </p>
        </div>
        <div className="image-gallery">
          <ImageGallery data={commercialData} />
        </div>
      </section>
    );
}