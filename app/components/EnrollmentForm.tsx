"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function EnrollmentModal({ open, onClose }: Props) {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                    {/* Background */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ duration: 0.25 }}
                        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 border border-orange-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                Student Enrollment
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Fill out the form below to start enrollment.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Student Name"
                                    className="input"
                                />
                                <input
                                    type="number"
                                    placeholder="Age"
                                    className="input"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Grade Level"
                                className="input"
                            />

                            <input
                                type="text"
                                placeholder="Parent / Guardian Name"
                                className="input"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="input"
                                />
                            </div>

                            <select className="input">
                                <option>Select Program</option>
                                <option>Reading Program</option>
                                <option>Math Program</option>
                                <option>Advanced Learning</option>
                                <option>Summer Class</option>
                            </select>

                            <textarea
                                placeholder="Additional Notes"
                                rows={3}
                                className="input resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow hover:scale-[1.02] transition"
                            >
                                Submit Enrollment
                            </button>

                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}