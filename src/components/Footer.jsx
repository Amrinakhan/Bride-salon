import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-cream pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex flex-col items-start gap-4 mb-6">
                            <img src={logo} alt="SI Glam Logo" className="h-24 w-auto" />
                            <h2 className="text-3xl font-playfair font-bold text-brown-dark">SI GLAM</h2>
                        </div>
                        <p className="text-brown opacity-80 max-w-sm mb-8 leading-relaxed">
                            Bringing out your inner radiance with world-class beauty treatments. We believe every person deserves to feel pampered and beautiful.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white p-3 rounded-full text-brown hover:bg-brown hover:text-white transition-all shadow-sm">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-brown-dark mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-brown">
                            <li><a href="#" className="hover:text-brown-light transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brown-light transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-brown-light transition-colors">Packages</a></li>
                            <li><a href="#" className="hover:text-brown-light transition-colors">Book Online</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-brown-dark mb-6">Opening Hours</h4>
                        <ul className="space-y-4 text-brown">
                            <li className="flex justify-between"><span>Mon - Fri:</span> <span className="font-medium">10AM - 8PM</span></li>
                            <li className="flex justify-between"><span>Saturday:</span> <span className="font-medium">10AM - 9PM</span></li>
                            <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium">Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brown border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brown opacity-60">
                    <p>© 2026 SI GLAM BEAUTY SALON. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-blush fill-blush" /> for beauty
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
