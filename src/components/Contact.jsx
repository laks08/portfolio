import React from "react";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Lakshya Gupta™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
