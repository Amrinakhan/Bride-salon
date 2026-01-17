import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-brown-light font-medium tracking-widest uppercase mb-4 text-sm">Get In Touch</h2>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-dark mb-6">Visit Our Sanctuary</h2>
                        <p className="text-brown opacity-80 mb-12 text-lg">
                            Have questions about our services or want to book a customized package? Reach out to us and we'll be happy to assist you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blush bg-opacity-30 p-3 rounded-2xl text-brown">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div>
                                        <h4 className="font-bold text-brown-dark">Call Us</h4>
                                        <a href="tel:03187191657" className="text-brown hover:text-brown-light transition-colors">03187191657</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cream p-3 rounded-2xl text-brown">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <div>
                                        <h4 className="font-bold text-brown-dark">WhatsApp</h4>
                                        <a href="https://wa.me/923187191657" className="text-brown hover:text-brown-light transition-colors">Chat with our experts</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-nude p-3 rounded-2xl text-brown">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brown-dark">Location</h4>
                                    <p className="text-brown">Bahawalpur, Punjab, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-nude bg-opacity-50 p-8 sm:p-12 rounded-[2.5rem] card-shadow border border-white"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-brown mb-2 pl-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-blush transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brown mb-2 pl-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="0300-1234567"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-blush transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brown mb-2 pl-1">Service Interested In</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-blush transition-all outline-none appearance-none">
                                    <option>Makeup Services</option>
                                    <option>Hair Treatments</option>
                                    <option>Skin Care Packages</option>
                                    <option>Bridal Specials</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brown mb-2 pl-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-blush transition-all outline-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brown-dark text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brown transition-all shadow-xl"
                            >
                                <Send size={20} />
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
