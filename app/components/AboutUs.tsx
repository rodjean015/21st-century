"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 text-slate-800 py-24 lg:py-32" id="about">

            {/* Soft Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-orange-300/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-amber-300/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {/* Section 1: Mission / Programs */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="inline-block px-4 py-2 text-sm bg-amber-100 text-amber-900 rounded-full mb-6 border border-amber-200">
                            About Us
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            Building a brighter future, <br />
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                one child at a time.
                            </span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-6">
                            21st Learning Center offers programs to inspire a love of learning and build foundational skills for future success. From play-based Playschool for toddlers to academic tutorials and specialized SPED support, we ensure each child thrives.
                        </p>

                        <p className="text-slate-600 text-lg mb-8">
                            Our developmental and therapy-based programs, including Occupational Therapy, Speech Therapy, and Special Education tutorials, empower children with unique learning needs to reach their full potential.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                                Learn More
                            </button>
                            <button className="px-6 py-3 bg-white border border-orange-200 text-orange-600 rounded-xl hover:bg-orange-50 transition">
                                Join Our Community
                            </button>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center px-4"
                    >
                        <motion.div
                            className="relative w-full max-w-md rounded-2xl shadow-xl cursor-pointer overflow-hidden"
                        >
                            <Image
                                src="/21st-kids-playing-768x1024.jpg"
                                alt="Children learning"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Section 2: Founder Message */}
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row items-center gap-12">

                    {/* Text / Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-orange-600 mb-6">
                            A Word from Our Founder
                        </h3>

                        <p className="text-slate-800 text-xl md:text-2xl leading-relaxed mb-6 italic">
                            "At 21st Learning Center, my goal is to nurture every child's curiosity and love of learning. We provide a safe, creative environment where children can discover their potential, grow in confidence, and develop lifelong skills. Every child’s journey is unique, and we are committed to guiding them every step of the way."
                        </p>

                        <p className="text-slate-700 font-semibold text-lg">
                            - Dorie F. Buquing, Founder & Head of School
                        </p>
                    </motion.div>

                    {/* Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/tita-dorie.jpg"
                                alt="Founder portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}