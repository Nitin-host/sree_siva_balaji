import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import "../styles/ContactWidget.css";

const Contact = ({ formKey }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Reset form when formKey changes
  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
    });
    setErrors({});
  }, [formKey]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be at least 10 digits.";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhoneChange = (value) => setFormData({ ...formData, phone: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      setLoading(false);
      return;
    }

    try {
      // await axios.post("/api/sendForm", formData); // Use full URL if frontend is separate
      toast.success("Message sent successfully!");
      console.log("Form data submitted:", formData);
      setFormData({ name: "", email: "", phone: "", serviceType: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to send. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form className="contact-form mt-3" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="serviceType">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={errors.serviceType ? "error-input" : ""}
          required
        >
          <option value="">Select a service type</option>
          <option value="RESIDENTIAL-INTERIORS">RESIDENTIAL INTERIORS</option>
          <option value="COMMERCIAL-INTERIORS">COMMERCIAL INTERIORS</option>
          <option value="ARCHITECTURE">ARCHITECTURE</option>
        </select>
        {errors.serviceType && <p className="error">{errors.serviceType}</p>}
      </div>

      <div className="form-group">
        <PhoneInput
          country={"in"}
          onlyCountries={["in"]}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{
            id: "phone",
            name: "phone",
            required: true,
            className: errors.phone ? "error-input" : "",
            placeholder: errors.phone
              ? "+91 22 1234 5678"
              : "Enter phone number start's with +91",
          }}
        />
        {errors.phone && (
          <div className="error-hint">Example format: +91 22 1234 5678</div>
        )}
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm text-primary"></span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Contact;
