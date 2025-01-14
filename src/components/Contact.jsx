import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-600">Contact</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <FaEnvelope size={20} className="text-gray-600" />
            <span className="text-gray-600">lakshyagupta997@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaLinkedin size={20} className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/lakshyagupta-/"
              className="text-blue-600 hover:text-blue-800"
            >
              linkedin.com/in/lakshyagupta-
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
