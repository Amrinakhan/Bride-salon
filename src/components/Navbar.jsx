import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Offers', to: 'offers' },
        { name: 'Gallery', to: 'gallery' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-2 shadow-sm border-b border-brown/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                            <motion.img
                                src={logo}
                                alt="SI GLAM Logo"
                                animate={{ height: scrolled ? 64 : 100 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-auto drop-shadow-sm"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="text-brown-dark font-semibold"
                                    className="text-brown hover:text-brown-light px-3 py-2 rounded-md text-xs font-medium uppercase tracking-[0.2em] cursor-pointer transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/923187191657"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brown text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brown-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brown hover:text-brown-light p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass absolute w-full top-full left-0 animate-fade-in-down">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-brown hover:bg-blush hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/923187191657"
                            className="w-full bg-brown text-white px-3 py-3 rounded-md text-base font-medium flex items-center justify-center gap-2 mt-4"
                        >
                            <MessageCircle size={18} />
                            Book via WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
