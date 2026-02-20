import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#004d25] overflow-hidden">
            {/* Background Image with increased visibility */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src={getImagePath("/images/hero%20bg.jpg")}
                    alt="Background"
                    fill
                    className="object-cover object-center mix-blend-luminosity"
                    priority
                />
            </div>
            
            {/* Subtle Gradient Overlay to maintain green theme and readability */}
            <div className="absolute inset-0 z-0 bg-[#004d25]/60" />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant hidden lg:block z-0" />

            <div className="container mx-auto px-6 relative z-10 pt-20 lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
                        <span className="inline-block px-4 py-1 bg-white/10 text-white/90 font-bold text-sm tracking-widest uppercase rounded-full backdrop-blur-sm">
                            Ernakulam District General Secretary, IUML
                        </span>

                        <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-white">
                            A Legacy of <br />
                            <span className="text-accent italic">Service</span> & <span className="text-white">Integrity</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                            Advocating for justice, empowering communities, and building a stronger future for Ernakulam.
                            Standing for the values that matter.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg">
                                Join the Movement
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/about" className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                                Learn More
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-8 border-t border-white/20 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-accent">20+</p>
                                <p className="text-sm text-white/70 uppercase tracking-wide">Years Service</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-accent">61k+</p>
                                <p className="text-sm text-white/70 uppercase tracking-wide">Votes Polled</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-accent">100%</p>
                                <p className="text-sm text-white/70 uppercase tracking-wide">Dedication</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative h-[500px] lg:h-[800px] w-full order-1 lg:order-2">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <Image
                                src={getImagePath("/hero-portrait-v2.png")}
                                alt="Leader of the People"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Floating Card - Hidden on very small screens if needed, but keeping for now */}
                        <div className="absolute bottom-8 left-0 lg:bottom-12 lg:-left-12 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-accent animate-fade-in-up delay-300 hidden sm:block">
                            <p className="font-serif text-lg italic text-gray-800">&quot;My father&apos;s standing in the Muslim League provided an entry, but my dedication is what sustains me.&quot;</p>
                            <p className="text-sm font-bold text-primary mt-4">- Adv. Gafoor</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
