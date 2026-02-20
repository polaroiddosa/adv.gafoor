"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Hammer, HeartPulse, Building2, Leaf, Users, Lightbulb, Zap } from "lucide-react";

export default function VisionPage() {
    const visions = [
        {
            title: "Education Revolution",
            description: "Implementing smart classrooms in aided schools and modernizing madrasa curriculum locally.",
            details: "Focus on English proficiency and digital literacy for students from underprivileged backgrounds.",
            icon: <BookOpen size={40} className="text-white relative z-10" />,
            color: "bg-emerald-800",
            image: "/images/vision-edu.png"
        },
        {
            title: "Sustainable Infrastructure",
            description: "Urban planning that prioritizes drainage solutions and durable road networks.",
            details: "Advocating for long-term master plans over patchwork repairs in Ernakulam.",
            icon: <Hammer size={40} className="text-white relative z-10" />,
            color: "bg-gray-900",
            image: "/images/vision-infra.png"
        },
        {
            title: "Healthcare for All",
            description: "Community-driven dialysis support and affordable pharmacy chains.",
            details: "Expanding the reach of CH-Centres to ensure no patient is denied care due to lack of funds.",
            icon: <HeartPulse size={40} className="text-white relative z-10" />,
            color: "bg-amber-600",
            image: "/images/vision-health.png"
        },
        {
            title: "Women Empowerment",
            description: "Micro-finance units and skill development workshops.",
            details: "Supporting Kudumbashree units and local self-help groups to drive economic independence.",
            icon: <Users size={40} className="text-white relative z-10" />,
            color: "bg-emerald-600",
            image: "/images/community.png"
        },
        {
            title: "Green Ernakulam",
            description: "Strict waste management policies and urban green cover projects.",
            details: "Collaborating with local bodies for zero-waste initiatives.",
            icon: <Leaf size={40} className="text-white relative z-10" />,
            color: "bg-teal-700",
            image: null
        },
        {
            title: "E-Governance",
            description: "Making party offices tech-savvy helpdesks for public services.",
            details: "Helping citizens access government schemes through digital portals.",
            icon: <Building2 size={40} className="text-white relative z-10" />,
            color: "bg-gray-700",
            image: null
        },
        {
            title: "Youth Startup Fund",
            description: "Mentorship programs for young entrepreneurs in the district.",
            details: "Creating a network of business leaders to guide the next generation.",
            icon: <Lightbulb size={40} className="text-white relative z-10" />,
            color: "bg-indigo-900",
            image: null
        },
        {
            title: "Traffic Solutions",
            description: "Proposing flyovers and better traffic management systems.",
            details: "Reducing congestion in key commercial hubs of the city.",
            icon: <Zap size={40} className="text-white relative z-10" />,
            color: "bg-gray-800",
            image: null
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-primary pt-32 pb-20 px-6 text-white text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl font-serif font-bold mb-6"
                >
                    A Vision for <span className="text-accent italic">Tomorrow</span>
                </motion.h1>
                <p className="text-white/80 max-w-2xl mx-auto text-lg">
                    Comprehensive development plans designed to uplift every stratum of society in Ernakulam.
                </p>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${item.color} rounded-2xl p-8 text-white hover:-translate-y-2 transition-transform duration-300 shadow-xl flex flex-col relative overflow-hidden group`}
                        >
                            {/* Background Image Overlay */}
                            {item.image && (
                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                            )}

                            <div className="bg-white/10 w-fit p-4 rounded-xl mb-6 backdrop-blur-sm relative z-10">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 relative z-10">{item.title}</h3>
                            <p className="text-white/90 font-medium mb-4 relative z-10">{item.description}</p>
                            <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                                <p className="text-sm text-white/70 italic leading-relaxed">&quot;{item.details}&quot;</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
