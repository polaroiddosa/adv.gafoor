import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-primary-dark text-white pt-16 pb-8 border-t-4 border-accent">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Bio */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Adv. V. E. Abdul Gafoor</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Serving the people of Ernakulam with integrity, vision, and unwavering dedication.
                            Driving progress through education, infrastructure, and social welfare.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#vision" className="text-gray-400 hover:text-white transition-colors">Our Vision</Link></li>
                            <li><Link href="#updates" className="text-gray-400 hover:text-white transition-colors">Latest Updates</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press & Media</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>IUML District Committee Office, Ernakulam, Kerala</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone size={20} />
                                <span>+91 98460 00000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail size={20} />
                                <span>contact@advgafoor.com</span>
                            </li>
                        </ul>

                        <h5 className="text-sm font-bold mb-3 text-white">Subscribe for Updates</h5>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                            <button className="bg-accent hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-r-md transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Adv. V. E. Abdul Gafoor. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
