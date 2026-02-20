"use client";

import { BookOpen, Hammer, HeartPulse, Building2, Leaf, Users } from "lucide-react";
import Link from "next/link";

export default function VisionGrid({ limit }: { limit?: number }) {
    const visions = [
        {
            title: "Education Revolution",
            description: "Modernizing madrasas and schools with tech-integrated curriculum for future readiness.",
            icon: <BookOpen size={32} className="text-white" />,
            color: "bg-primary-dark",
            colSpan: "md:col-span-2",
        },
        {
            title: "Infrastructure",
            description: "Sustainable urban planning and road development for Ernakulam.",
            icon: <Hammer size={32} className="text-white" />,
            color: "bg-gray-900",
            colSpan: "md:col-span-1",
        },
        {
            title: "Healthcare Access",
            description: "Affordable clinics and dialysis centers for the underprivileged.",
            icon: <HeartPulse size={32} className="text-white" />,
            color: "bg-accent",
            colSpan: "md:col-span-1",
        },
        {
            title: "Women Empowerment",
            description: "Skill development programs and micro-finance support for self-reliance.",
            icon: <Users size={32} className="text-white" />,
            color: "bg-primary",
            image: "/images/women.jpg",
            colSpan: "md:col-span-2",
        },
        {
            title: "Green City",
            description: "Waste management initiatives and green cover expansion.",
            icon: <Leaf size={32} className="text-white" />,
            color: "bg-teal-700",
            colSpan: "md:col-span-1",
        },
        {
            title: "Smart Governance",
            description: "Digitizing public services for transparency and speed.",
            icon: <Building2 size={32} className="text-white" />,
            color: "bg-gray-800",
            colSpan: "md:col-span-1",
        },
    ];

    const displayedVisions = limit ? visions.slice(0, limit) : visions;

    return (
        <section id="vision" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
                    <div className="text-center md:text-left">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Commitments</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">The Vision for <br /><span className="text-primary italic">Ernakulam</span></h2>
                    </div>
                    {limit && (
                        <div className="hidden md:block">
                            <Link href="/vision" className="text-primary font-bold hover:underline">View Full Vision →</Link>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">
                    {displayedVisions.map((vision, index) => (
                        <div
                            key={index}
                            className={`${vision.colSpan} ${vision.color} rounded-2xl p-8 flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-xl group relative overflow-hidden`}
                        >
                            {/* Optional Background Image */}
                            {vision.image && (
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={vision.image} 
                                        alt={vision.title} 
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="bg-white/20 w-fit p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors mb-6">
                                    {vision.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{vision.title}</h3>
                                    <p className="text-white/80 leading-relaxed">{vision.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {limit && (
                    <div className="mt-8 text-center md:hidden">
                        <Link href="/vision" className="text-primary font-bold hover:underline">View Full Vision →</Link>
                    </div>
                )}
            </div>
        </section>
    );
}
