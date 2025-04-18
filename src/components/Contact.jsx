import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/lakshyagupta-/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaGithub,
      url: "https://github.com/laks08",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: FaEnvelope,
      url: "mailto:lakshyagupta997@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info and Social Links - Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="flex flex-wrap justify-center gap-6 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-2">Email me directly at:</p>
                <a
                  href="mailto:lakshyagupta997@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  lakshyagupta997@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Lakshya Gupta™. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
