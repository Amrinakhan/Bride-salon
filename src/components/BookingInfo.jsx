import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';

const BookingInfo = () => {
    return (
        <section id="booking" className="py-24 bg-brown-dark text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-brown bg-opacity-30 px-4 py-2 rounded-full mb-6">
                            <CalendarDays size={18} className="text-blush" />
                            <span className="text-sm font-bold tracking-wider uppercase">Limited Time Offer</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                            Booking Now: <span className="text-blush">16 Jan - 20 Jan</span>
                        </h2>
                        <p className="text-cream opacity-70 max-w-md text-lg">
                            Don't miss out on our special discounts! Reserve your slot today for the ultimate beauty experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-6 w-full md:w-auto"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col sm:flex-row gap-6 w-full md:w-auto"
                        >
                            <a
                                href="tel:03187191657"
                                className="group bg-white text-brown-dark px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-cream transition-all shadow-xl"
                            >
                                <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                                03187191657
                            </a>

                            <a
                                href="https://wa.me/923187191657"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Us
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookingInfo;
