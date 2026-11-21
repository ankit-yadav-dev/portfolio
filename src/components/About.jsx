import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="about"
            className="py-12 sm:py-16 md:py-20 bg-dark-200"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                    About <span className="text-purple">Me</span>
                </h2>

                <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
                    Get to know more about my background, skills, and experience.
                </p>

                {/* My Journey */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full"
                    >
                        <div className="bg-dark-300/40 border border-white/5 rounded-2xl p-5 sm:p-7 md:p-9 mb-6 sm:mb-8">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 text-center">
                                My Journey
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base mb-4 text-center max-w-4xl mx-auto leading-relaxed">
                                I'm a passionate Full Stack Developer who enjoys building modern, responsive, and
                                user-friendly web applications using the MERN stack. My journey began with learning
                                HTML, CSS, and JavaScript, and has grown into developing full-stack projects that
                                solve real-world problems with clean and efficient code.
                            </p>

                            <p className="text-gray-300 text-sm sm:text-base text-center max-w-4xl mx-auto leading-relaxed">
                                When I'm not coding, I enjoy exploring new technologies, improving my development
                                skills, and working on personal projects to expand my knowledge. I believe in
                                continuous learning, writing quality code, and creating digital experiences that
                                are both functional and impactful.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {aboutInfo.map((data, index) => (
                                <div
                                    key={index}
                                    className="group bg-dark-300 p-5 sm:p-6 rounded-2xl border border-white/5
                                    transition-all duration-300 hover:-translate-y-2 hover:border-purple/40
                                    hover:shadow-lg hover:shadow-purple/10"
                                >
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-xl
                                        bg-purple/10 text-purple text-2xl mb-4 transition-colors duration-300
                                        group-hover:bg-purple group-hover:text-white"
                                    >
                                        <data.icon />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                                        {data.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        {data.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;