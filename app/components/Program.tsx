"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        image: "/program1.jpg",
        title: "Play School",
        description: "Our Playschool is designed to provide a fun and engaging environment where children can develop crucial skills while enjoying the process."
    },
    {
        image: "/program2.jpg",
        title: "SPED Tutorial",
        description: "Our SPED Program is designed to cater to the unique needs of each child, ensuring they are well-prepared for big school."
    },
    {
        image: "/program3.jpg",
        title: "Center-based homeschooling Program",
        description: "Our Home School program are designed to meet all academic standards and grade level requirements, ensuring that every child receives a comprehensive education that is both personalized and adaptable."
    },
    {
        image: "/program4.jpg",
        title: "After-School Program",
        description: "Our After-School Academic Tutorial Program is designed to provide comprehensive assistance and enrichment, ensuring students excel in their academic endeavors."
    },
    {
        image: "/program5.jpg",
        title: "Early Intervention",
        description: "Our Early Intervention Program aims to address developmental challenges at an early stage, providing targeted support to enhance the child's abilities and prepare them for future learning."
    },
    {
        image: "/program6.jpg",
        title: "Specialized Programs",
        description: "Our Specialized Programs are specially designed for children with autism, focusing on their unique needs to help them achieve functional communication and life skills."
    },
];

export default function Program() {
    return (
        <section className="py-28 bg-gradient-to-br from-orange-50 via-white to-amber-50 text-slate-800" id="program">
            <div className="w-full max-w-7xl mx-auto text-center px-6">

                {/* Section Title */}
                <div className="mb-12">
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

                {/* Grid of Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-1xl transition-shadow duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-50/60 via-white/30 to-transparent opacity-40" />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-semibold mb-2 text-slate-800">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}