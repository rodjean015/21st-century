"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import EnrollmentModal from "./EnrollmentForm";

export default function Hero() {
    const [openEnroll, setOpenEnroll] = useState(false);
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 text-slate-800 min-h-screen flex items-center" id="home">

            {/* Soft Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300/30 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 text-sm bg-orange-100 text-orange-900 rounded-full mb-6 border border-orange-200">
                        Play. Explore. Learn.
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Empowering Today's Children <br />
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            For Tomorrow's World
                        </span>
                    </h1>

                    <p className="text-slate-600 text-lg mb-8 max-w-lg">
                        We are proud of our role in shaping future leaders and compassionate individuals through creativity, curiosity, and care.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setOpenEnroll(true)}
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
                        >
                            Enroll Now
                        </button>
                        <button className="px-6 py-3 bg-white border border-orange-200 text-orange-600 rounded-xl hover:bg-orange-50 transition">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                {/* Right Images */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center px-4"
                >
                    <div className="relative w-full max-w-md md:max-w-lg group">

                        {/* BACK CARD */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 5, -2, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="
                relative md:absolute
                md:-bottom-12 md:-right-6
                w-full md:w-5/6
                z-10
                bg-white border border-orange-100
                rounded-2xl
                shadow-lg
                transition-all duration-500
                md:group-hover:z-30
                md:group-hover:-translate-y-4
                md:group-hover:scale-105
                cursor-pointer
              "
                            whileHover={{ rotate: 20, scale: 1.05 }}
                        >
                            <Image
                                src="/edrie-hakdog.jpg"
                                alt="Kids classroom activity"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover"
                            />
                        </motion.div>

                        {/* FRONT CARD */}
                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -5, 2, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="
                relative
                z-20
                bg-white border border-orange-100
                rounded-2xl
                shadow-xl
                transition-all duration-500
                md:group-hover:z-0
                md:group-hover:translate-y-6
                md:group-hover:scale-105
                cursor-pointer
              "
                            whileHover={{ rotate: -20, scale: 1.05 }}
                        >
                            <Image
                                src="/21st-kids-pic.jpg"
                                alt="Children learning"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover"
                                priority
                            />
                        </motion.div>

                    </div>
                </motion.div>
                <EnrollmentModal
                    open={openEnroll}
                    onClose={() => setOpenEnroll(false)}
                />
            </div>
        </section>
    );
}