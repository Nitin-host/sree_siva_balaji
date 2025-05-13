import { useState } from "react";
import Contact from "./ContactForm";
import { FiX } from "react-icons/fi";
import "../styles/ContactWidget.css";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  const toggleDrawer = () => {
    if (isOpen) {
      setFormKey(Date.now());
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`contact-drawer ${isOpen ? "open" : ""}`}>
        <div className="contact-form-wrapper">
          <button className="close-btn" onClick={toggleDrawer}>
            <FiX size={24} color="#000" />
          </button>
          <Contact formKey={formKey} />
        </div>
      </div>

      {!isOpen && (
        <button className="contact-toggle-btn" onClick={toggleDrawer}>
          Contact Us
        </button>
      )}
    </>
  );
};

export default ContactWidget;
