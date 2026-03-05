"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { items, rates } from "../utils/programs";

export default function Program() {
    return (
        <section
            className="py-28 bg-gradient-to-br from-orange-50 via-white to-amber-50 text-slate-800"
            id="program"
        >
            <div className="w-full max-w-7xl mx-auto text-center px-6">

                {/* Section Title */}
                <div className="mb-16">
                    <span className="inline-block px-4 py-2 text-sm bg-amber-100 text-amber-900 rounded-full border border-amber-200 mb-4">
                        Our Programs
                    </span>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold tracking-wide mb-6 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                    >
                        21st Introduce a wider range of Programs
                    </motion.h3>
                </div>

                {/* Program Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500 hover:scale-[1.02]"
                        >
                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-50/60 via-white/30 to-transparent opacity-40" />
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center">
                                <h4 className="text-xl font-semibold mb-3 text-slate-800">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Program Rates */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold mb-12 text-center text-slate-800">
                        Program Rates
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {rates.map((rate, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-orange-600">
                                    {rate.title}
                                </h4>

                                <p className="text-xl font-bold mb-4 text-slate-800">
                                    {rate.price}
                                </p>

                                {rate.schedule && (
                                    <ul className="text-sm text-slate-600 space-y-1 mb-4 list-disc list-inside">
                                        {rate.schedule.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    {rate.description}
                                </p>

                                <button className="mt-auto w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:opacity-90 transition">
                                    Inquire Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}