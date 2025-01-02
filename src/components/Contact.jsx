import React, { useState, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("Please fill out all fields before submitting.");
      return false;
    }
    setError("");
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setSuccessMessage(
        "Form submitted successfully! I'll get back to you soon."
      );
    }
  }, [state.succeeded]);
  const contactVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      name="contact"
      className="w-full p-4 text-white text-center"
      variants={contactVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-[80px]">
        <div className="pb-8">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={contactVariant}
          >
            Contact
          </motion.p>
          {state.succeeded ? (
            ""
          ) : (
            <motion.p className="py-6" variants={contactVariant}>
              Fill out the form below to reach out to me.{" "}
            </motion.p>
          )}
        </div>

        {state.succeeded ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-lg"
          >
            {successMessage}
          </motion.p>
        ) : (
          <div className="flex justify-center items-center">
            <motion.form
              onSubmit={handleFormSubmit}
              className="flex flex-col w-full md:w-1/2"
              variants={contactVariant}
            >
              <label htmlFor="name" className="text-left">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email" className="text-left mt-4">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="message" className="text-left mt-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {error && (
                <motion.p
                  aria-live="polite"
                  className="text-red-500 text-sm pb-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group border-2 border-[#2D2A6A] bg-transparent hover:bg-gradient-to-br hover:from-[#2D2A6A] hover:to-[#4B0082] hover:group-hover:from-[#3A3A8D] hover:group-hover:to-[#5B3A99] focus:outline-none mx-auto my-8"
              >
                <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center">
                  {state.submitting ? "Submitting..." : "Let's talk"}
                </span>
              </button>
            </motion.form>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
