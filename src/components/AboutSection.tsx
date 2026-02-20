import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content - Bio */}
                    <div className="lg:w-1/2 ">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">About the Leader</span>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-2 mb-8 animate-fade-in-up">
                            Adv. V. E. <span className="text-primary italic">Abdul Gafoor</span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 space-y-6">
                            <p>
                                Adv. V. E. Abdul Gafoor is a prominent figure in Kerala politics and a distinguished lawyer.
                                Currently serving as the <strong>Ernakulam District General Secretary of the Indian Union Muslim League (IUML)</strong>,
                                he has dedicated his life to public service and legal advocacy.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["District General Secretary, IUML", "Former Government Pleader"].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-gray-800 font-medium">
                                    <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
                                Read Full Story <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Visual/Timeline or Image */}
                    <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={getImagePath("/images/hug.jpg")}
                                alt="Adv. Gafoor Speaking"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-serif font-bold mb-2">A Voice for the People</h3>
                                <p className="text-white/80 mb-4">
                                    &quot;My father&apos;s standing in the Muslim League provided an entry, but my dedication is what sustains me.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Stats Overlay */}
                        <div className="flex gap-4 mt-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center flex-1 border border-gray-100">
                                <span className="block text-3xl font-bold text-primary">20+</span>
                                <span className="text-xs text-gray-500 uppercase">Years Service</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center flex-1 border border-gray-100">
                                <span className="block text-3xl font-bold text-primary">61k+</span>
                                <span className="text-xs text-gray-500 uppercase">Votes Polled</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
