"use client";
import { useState } from "react";

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    phone: "",
  });

  const regex = {
    name: /^[a-zA-Z\s]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{7,15}$/,
    message: /^.{10,}$/,
    link: /^https?:\/\//,
  };

  const validate = () => {
    const errs = {};
    if (!regex.name.test(formData.name)) errs.name = "Invalid name";
    if (!regex.email.test(formData.email)) errs.email = "Invalid email";
    if (!formData.company.trim()) errs.company = "Company required";
    if (!regex.phone.test(formData.phone)) errs.phone = "Invalid phone";
    // if (formData.link.trim()) {
    //   if (!regex.link.test(formData.link)) errs.link = "Invalid link";
    // }
    // if (!regex.message.test(formData.message))
    //   errs.message = "Message too short";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzjV8mdl6nF96BZNjpLQs4X9ajgJH88CUfyvnmvJQsdt35wPd_wPoOTFkufDlmIyUgk/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain", // Send data as JSON
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      // Handle the response
      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const ErrorText = ({ text }) => {
    return <p className="mb-0 error-text">{text}</p>;
  };
  return (
    <div className="main-contact-form section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="heading2 mr50">
              <small className="heading-top inner-heading-top">
                <img src="/assets/img/icons/hands.svg" alt="" />
                Take the Next Step
              </small>
              <h2>Let’s Work Together</h2>
              <p>
                Ready to transform one great business into a network of growth?
                Book a free franchise and expansion session today.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="main-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-0"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <ErrorText text={errors.name} />}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-0"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <ErrorText text={errors.email} />}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      name="company"
                      className="form-control mb-0"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    {errors.company && <ErrorText text={errors.company} />}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control mb-0"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <ErrorText text={errors.phone} />}
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      name="message"
                      className="form-control mb-0"
                      placeholder="Please share your requirements"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <ErrorText text={errors.message} />}
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="full-btn theme-btn-2"
                      disabled={loading || success}
                    >
                      {loading
                        ? "Submitting..."
                        : success
                        ? "Thank you for the submission!"
                        : `Let's Talk`}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
