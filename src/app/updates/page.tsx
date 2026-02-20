"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function UpdatesPage() {
    const news: any[] = [
        {
            tag: "Leadership",
            title: "Appointed Ernakulam District General Secretary",
            date: "Sep 2023",
            image: "/images/speech.jpg",
            size: "col-span-1 md:col-span-2 row-span-2",
            excerpt: "In a major reshuffle aimed at strengthening the party at the grassroots level, Adv. Gafoor has been entrusted with the leadership of Ernakulam District."
        },
        {
            tag: "Election 2021",
            title: "61,805 Votes in Kalamassery",
            date: "April 2021",
            image: "/images/rally.png",
            size: "col-span-1 row-span-1",
            excerpt: "A historic fight that showcased the party's solid vote bank."
        },
        {
            tag: "Legal",
            title: "Decade of Service as Govt Pleader",
            date: "2004-2013",
            image: "", // Keep color or use generic
            color: "bg-accent",
            size: "col-span-1 row-span-1",
            excerpt: "Established credentials in civil and criminal law."
        },
        {
            tag: "Statement",
            title: "Press Meet on Urban Development",
            date: "Jan 2024",
            image: "/images/hug.jpg",
            size: "col-span-1 row-span-1",
            excerpt: "Addressed the media regarding the delay in road repairs."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-12 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-end"
                >
                    <div>
                        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2">Newsroom</h1>
                        <p className="text-gray-500">Press releases, announcements, and activity reports.</p>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-4 md:mt-0">
                        Subscribe to Newsletter <TrendingUp size={20} />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {news.map((item, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${item.size} ${item.image ? 'bg-black' : (item.color || 'bg-gray-800')} ${item.textColor || 'text-white'} rounded-xl p-8 relative group overflow-hidden cursor-pointer shadow-lg`}
                        >
                            {item.image && (
                                <div className="absolute inset-0 z-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>
                            )}

                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <ArrowUpRight size={32} />
                            </div>

                            <div className="flex flex-col h-full justify-between relative z-10">
                                <span className="uppercase tracking-widest text-xs font-bold opacity-70">{item.tag}</span>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform">{item.title}</h2>
                                    <p className="opacity-80 line-clamp-3 text-sm">{item.excerpt}</p>
                                </div>

                                <span className="text-xs font-mono opacity-60 pt-4 block border-t border-white/20 mt-4">{item.date}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
