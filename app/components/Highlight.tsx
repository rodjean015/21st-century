export default function Highlight() {
    return (
        <section className="relative pt-24 h-[70vh] w-full overflow-hidden flex items-center justify-center" id="home">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/21st-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

            {/* Content */}
            <div className="relative z-10 px-6 text-center max-w-4xl">

                {/* Small Badge */}
                <span className="inline-block px-4 py-2 text-sm bg-orange-500/20 text-orange-300 rounded-full border border-orange-400/40 mb-6 backdrop-blur">
                    21st Learning Center
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                    Empowering Minds <br className="hidden md:block" />
                    For the <span className="text-orange-400">21st Century</span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                    Discover programs designed to develop critical thinking, creativity,
                    and real-world skills that prepare students for the future.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#programs"
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
                    >
                        Explore Programs
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/40 text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </section>
    );
}