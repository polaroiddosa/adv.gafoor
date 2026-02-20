"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
    const milestones = [
        { year: "2000", title: "Law Degree", desc: "Graduated LL.B from Kerala Law Academy.", icon: <GraduationCap size={20} /> },
        { year: "2004", title: "Legal Career Begins", desc: "Appointed as Government Pleader in Kerala High Court (served till 2013).", icon: <Briefcase size={20} /> },
        { year: "2010s", title: "Rising Leadership", desc: "Active role in IUML organizational activities, eventually becoming Ernakulam District General Secretary.", icon: <Award size={20} /> },
        { year: "2021", title: "General Election", desc: "Contested Kalamassery constituency, securing 61,805 votes.", icon: <CheckCircle2 size={20} /> },
        { year: "2023", title: "District Leadership Verified", desc: "Reappointed as District General Secretary by Panakkad Sadiq Ali Shihab Thangal.", icon: <Award size={20} /> }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Header */}
            <section className="bg-gray-50 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Man Behind the Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Adv. V. E. <span className="text-primary italic">Abdul Gafoor</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        A lawyer by profession, a leader by passion. Dedicated to weaving the fabric of social justice and development in Ernakulam.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Biography Text */}
                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
                        <p>
                            <span className="font-bold text-gray-900">Adv. V. E. Abdul Gafoor</span> represents the modern face of the Indian Union Muslim League (IUML). Born as the eldest son of veteran minister V. K. Ebrahim Kunju, he inherited a legacy of public service but carved his own identity through merit and hard work.
                        </p>
                        <p>
                            His professional journey began in the corridors of the Kerala High Court. As a Government Pleader for nearly a decade, he honed his understanding of civic laws and governance. This legal backbone makes him a formidable advocate for the people's rights.
                        </p>
                        <p>
                            Despite a competitive political landscape, his electoral debut in 2021 proved his mass appeal. Polling over 60,000 votes in Kalamassery wasn't just a statistic; it was a testament to his connection with the grassroots. Today, as the General Secretary of Ernakulam District, he continues to steer the party with a vision that blends traditional values with progressive development.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l-2 border-gray-100 pl-8 space-y-12">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <span className="absolute -left-[43px] top-0 bg-white border border-gray-200 p-2 rounded-full text-primary group-hover:scale-110 transition-transform shadow-sm">
                                    {item.icon}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-accent font-bold text-xl mb-1">{item.year}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
