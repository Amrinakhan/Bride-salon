import React from 'react';
import { motion } from 'framer-motion';
import bridalHair from '../assets/bridal-hair.webp';
import bridalMakeup from '../assets/bridal-makeup.jpg';
import luxurySalon from '../assets/luxury-salon.webp';

const images = [
    {
        url: bridalMakeup,
        title: "Bridal Makeup",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
        title: "Skin Treatment",
        span: "col-span-1"
    },
    {
        url: bridalHair,
        title: "Hair Styling",
        span: "col-span-1"
    },
    {
        url: luxurySalon,
        title: "Luxury Salon",
        span: "md:col-span-2"
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-nude">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brown-light font-medium tracking-widest uppercase mb-4 text-sm">Visual Journey</h2>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-dark mb-4">Our Work Gallery</h2>
                    <div className="w-16 h-1 bg-brown mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-3xl group ${img.span}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-8">
                                <h4 className="text-white font-playfair text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
