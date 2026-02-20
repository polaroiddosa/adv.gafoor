"use client";

import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function NewsUpdates({ limit }: { limit?: number }) {
    const updates = [
        {
            category: "Party Leadership",
            date: "September 2023",
            title: "Appointed as Ernakulam District General Secretary",
            summary: "IUML state president Panakkad Sadiq Ali Shihab Thangal announced the new district committee, entrusting Adv. Gafoor with key organizational responsibilities.",
        },
        {
            category: "Electoral Performance",
            date: "April 2021",
            title: "Strong Contest in Kalamassery Constituency",
            summary: "Polled 61,805 votes in the 2021 Legislative Assembly election, highlighting significant support base despite a competitive margin.",
        },
        {
            category: "Legal Career",
            date: "2004 - 2013",
            title: "Served as Government Pleader at Kerala High Court",
            summary: "A decade of legal service establishing strong credentials in civic affairs and public law.",
        },
        {
            category: "Community",
            date: "Recent",
            title: "Mobilizing League Support Across District",
            summary: "Working alongside Hamsa Parakkat and other party figures to strengthen IUML's grassroots presence in Ernakulam.",
        },
    ];

    const displayedUpdates = limit ? updates.slice(0, limit) : updates;

    return (
        <section id="updates" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="animate-fade-in-up">
                        <span className="text-secondary-foreground/60 font-bold tracking-widest uppercase text-sm text-gray-500">Stay Informed</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">Latest <span className="text-primary">Updates</span></h2>
                    </div>

                    {limit ? (
                        <Link href="/updates" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View All News <ArrowRight size={20} />
                        </Link>
                    ) : (
                        <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View All News <ArrowRight size={20} />
                        </button>
                    )}
                </div>

                {/* Ticker / Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedUpdates.map((update, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-3">
                                <TrendingUp size={14} />
                                {update.category}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-primary transition-colors">
                                {update.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {update.summary}
                            </p>
                            <div className="flex items-center text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50">
                                <Calendar size={14} className="mr-2" />
                                {update.date}
                            </div>
                        </div>
                    ))}
                </div>

                {limit && (
                    <Link href="/updates" className="md:hidden mt-8 w-full flex items-center justify-center gap-2 text-primary font-bold border border-primary/20 py-3 rounded-lg">
                        View All News <ArrowRight size={20} />
                    </Link>
                )}

            </div>
        </section>
    );
}
