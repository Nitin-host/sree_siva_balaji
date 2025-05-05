import React from "react";
import "../styles/Commercial.scss";
import ImageGallery from "../utils/ImageGallery";

export default function Commercial() {
   const commercialData = {
     COMMERCIAL: [
       {
         title: "INDUSTRIAL DESIGN",
         subtitle: "EXPOSED TEXTURES",
        //  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", // industrial-style room
        image: '/images/commercial.jpg',
        //  link: "/residential",
       },
       {
         title: "BACK TO HISTORY",
         subtitle: "SITTING LOUNGE",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // vintage lounge
       },
       {
         title: "MODERN WAVES",
         subtitle: "LUXURY TOUCH",
         image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // modern interior
       },
       {
         title: "CAFE",
         subtitle: "TOUCH OF COLOURS",
         image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", // colorful cafe
       },
       {
         title: "GYM",
         subtitle: "LIFT UP",
         image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e", // gym
       },
       {
         title: "PEB STRUCTURE",
         subtitle: "ACP CLADDINGS",
         image: "https://images.unsplash.com/photo-1581092335084-1cbcb9b1d1c5",
       },
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
        <div className="image-gallery p-2">
          <ImageGallery data={commercialData} />
        </div>
      </section>
    );
}