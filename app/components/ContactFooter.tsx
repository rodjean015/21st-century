"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaSquareFacebook } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ContactFooter() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 text-slate-800 py-24 lg:py-32" id="contact">

            {/* Soft Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/3 w-72 h-72 bg-orange-300/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-amber-300/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-16">

                {/* Contact Info + Form */}
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row items-start gap-12">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-orange-600 mb-6">
                            Get in Touch
                        </h3>
                        <p className="text-slate-700 text-lg mb-6">
                            Have questions or want to join our community? Reach out and we'll get back to you as soon as possible. We'd love to hear from you!
                        </p>

                        {/* Contact Info with Icons */}
                        <ul className="space-y-4 text-slate-800">
                            <li className="flex items-center gap-3">
                                <FiMail className="text-orange-500 w-6 h-6" />
                                <span>21st.OLC@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-orange-500 w-6 h-6" />
                                <span>(+63) 961 976 7867</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMapPin className="text-orange-500 w-6 h-6" />
                                <span>JS Building, National Road Poblacion, Pulilan.</span>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex items-center gap-6 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
                                <FaInstagramSquare className="w-6 h-6" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
                                <FaTiktok className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
                                <FaYoutube className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="px-6 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-6 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="px-6 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition resize-none"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition mt-2">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} 21st Learning Center. All rights reserved.
                </div>

            </div>
        </footer>
    );
}