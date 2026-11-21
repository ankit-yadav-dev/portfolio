import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Experience = () => {
  const responsibilities = [
    "Worked on live production websites.",
    "Developed and improved frontend components.",
    "Integrated APIs with frontend applications.",
    "Fixed bugs and resolved UI issues.",
    "Worked with React.js, JavaScript, HTML, CSS, and REST APIs.",
    "Collaborated with the development team and learned real-world software development practices.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-dark-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Professional <span className="text-purple">Experience</span>
        </h2>

        <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          Hands-on industry experience building and improving real-world web applications.
        </p>

        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-7 sm:pl-10 md:pl-12 group"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-purple/60 transition-colors duration-300 group-hover:bg-purple" />
            <div className="absolute left-[-0.45rem] top-6 w-4 h-4 rounded-full border-4 border-dark-100 bg-purple shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-125" />

            <div className="bg-dark-300 rounded-2xl p-5 sm:p-6 md:p-8 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-purple/40 hover:shadow-lg hover:shadow-purple/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple text-xl transition-colors duration-300 group-hover:bg-purple group-hover:text-white">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      Software Development Intern
                    </h3>
                    <p className="text-purple font-medium mt-1">CeDISI Partners LLP</p>
                  </div>
                </div>

                <span className="self-start px-3 py-1.5 bg-purple/20 text-purple rounded-full text-xs sm:text-sm whitespace-nowrap">
                  Internship
                </span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <FaClock className="text-purple" />
                  4 Months
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple" />
                  Delhi, India
                </span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-purple" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
