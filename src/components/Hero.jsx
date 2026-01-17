import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
            {/* Background with Gradient and Blur blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blush opacity-20 blur-[100px] rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream opacity-30 blur-[100px] rounded-full -ml-32 -mb-32"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-brown-light font-medium tracking-widest uppercase mb-4 text-sm sm:text-base">
                            Welcome to Luxury
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brown-dark leading-tight mb-6 tracking-tight">
                            SI Glam <br />
                            <span className="text-brown italic tracking-normal">Beauty Salon</span>
                        </h1>
                        <p className="text-lg text-brown opacity-80 mb-8 max-w-lg leading-relaxed">
                            Elevate your natural beauty with our professional makeup, skin care, and hair services. Experience excellence in every touch.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="offers" smooth={true} duration={500}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-brown text-white px-8 py-4 rounded-full font-medium shadow-lg flex items-center justify-center gap-2 hover:bg-brown-light transition-all"
                                >
                                    <Calendar size={20} />
                                    Book Your Session
                                </motion.button>
                            </Link>
                            <a href="tel:03187191657">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-brown text-brown px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-brown hover:text-white transition-all"
                                >
                                    <Phone size={20} />
                                    Call Us Now
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block relative"
                    >
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
                                alt="Salon Luxury"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating decoration elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blush opacity-40 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cream opacity-50 rounded-[3rem] -z-10 rotate-12"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
