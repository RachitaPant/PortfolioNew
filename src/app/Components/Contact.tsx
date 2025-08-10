import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-16 bg-[url('/paper-texture.jpg')] bg-cover w-full "
    >
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg transform rotate-2"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows={4}
          required
        ></textarea>
        <motion.button
          type="submit"
          className="w-full p-2 bg-gray-800 text-white rounded"
          whileHover={{ scale: 1.05 }}
        >
          Send
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
