"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h1>
                            <p className="text-xl text-gray-600">
                                Have a suggestion, grievance, or want to join the movement? We are listening.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Office Address</h3>
                                    <p className="text-gray-500">
                                        IUML District Committee Office,<br />
                                        Ernakulam, Kerala - 6820XX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                                    <p className="text-gray-500">+91 98460 00000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                                    <p className="text-gray-500">contact@advgafoor.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400">
                            <span className="flex items-center gap-2"><MapPin size={16} /> Map Integration</span>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Your message here..."></textarea>
                            </div>

                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
