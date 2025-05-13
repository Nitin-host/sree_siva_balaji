import React from 'react';
import ContactForm from '../component/ContactForm';
import '../styles/Contact.scss'

export default function Contact() {
    return (
      <div className="contact-container">
        <div className="image-container">
          <img
            src="/images/TECH-MAHINDRA-HYD/T (1).jpeg"
            alt="Nature Background"
            className="about-image"
          />
          <div className="text-overlay">
            <h1>Get in touch with us</h1>
          </div>
        </div>
        <div className="golden-line"></div>
        <div className="container-center">
          <ContactForm />
        </div>
        <div className="map-container">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8552291159504!2d78.35160947331995!3d17.46664190052075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fa940e6327%3A0xcf1fe9027caff975!2sGreen%20leaf%20Apartment!5e0!3m2!1sen!2sus!4v1747158532393!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    );
}