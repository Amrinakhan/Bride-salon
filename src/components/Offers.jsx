import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

const offers = [
    {
        title: "Chemical Treatment Offer",
        discount: "40% OFF",
        price: "Rs 6500",
        services: [
            "Layer Cutting & Any Cutting",
            "Keratin Treatment Straight Rebonding",
            "Face Relaxing Massage"
        ],
        bg: "bg-white"
    },
    {
        title: "Makeup Offer",
        discount: "40% OFF",
        price: "Rs 12,000",
        services: [
            "Mayo Makeup",
            "Barat Bridal Makeup",
            "Valima Makeup"
        ],
        bg: "bg-cream bg-opacity-30"
    },
    {
        title: "Skin Care & Beauty",
        discount: "40% OFF",
        price: "Rs 1,000",
        services: [
            "Whitening Facial",
            "Eyebrows Upper Lips & Forehead",
            "Soothing Facial Massage"
        ],
        bg: "bg-blush bg-opacity-10"
    },
    {
        title: "Bridal Package",
        discount: "40% OFF",
        price: "Rs 8,500",
        services: [
            "Bridal Makeup",
            "Bridal Mehndi",
            "Party Makeup (2 Party)"
        ],
        bg: "bg-white"
    },
    {
        title: "Mehndi Package",
        discount: "40% OFF",
        price: "Rs 5,000",
        services: [
            "Bridal Mehndi",
            "2 Party Mehndi",
            "3 Baby Hand Mehndi"
        ],
        bg: "bg-cream bg-opacity-30"
    },
    {
        title: "Skin Care Special",
        discount: "50% OFF",
        price: "Rs 2,500",
        services: [
            "Mani & Pedi Cure",
            "Zafran Facial",
            "Half Arms Wax"
        ],
        bg: "bg-blush bg-opacity-10"
    }
];

const OfferCard = ({ offer, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${offer.bg} p-8 rounded-3xl card-shadow border border-white border-opacity-50 relative overflow-hidden group hover-lift`}
        >
            <div className="absolute top-4 right-4 bg-brown text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {offer.discount}
            </div>

            <div className="mb-6">
                <Sparkles size={24} className="text-brown-light mb-2 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-playfair font-bold text-brown-dark">{offer.title}</h3>
            </div>

            <ul className="space-y-4 mb-8">
                {offer.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brown opacity-90">
                        <Check size={18} className="mt-1 text-brown-light flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-end justify-between mt-auto pt-6 border-t border-brown border-opacity-10">
                <div>
                    <span className="text-xs text-brown opacity-60 block uppercase font-bold tracking-tighter">Starting from</span>
                    <span className="text-2xl font-bold text-brown-dark">{offer.price}</span>
                </div>
                <Link
                    to="booking"
                    smooth={true}
                    duration={800}
                    offset={-100}
                    className="text-sm font-bold text-brown hover:text-brown-light transition-colors underline decoration-2 underline-offset-4 cursor-pointer"
                >
                    Book Now
                </Link>
            </div>
        </motion.div>
    );
};

const Offers = () => {
    return (
        <section id="offers" className="py-24 bg-white bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brown-light font-medium tracking-widest uppercase mb-4 text-sm">Special Packages</h2>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-dark mb-4">Exclusive Beauty Offers</h2>
                    <div className="w-16 h-1 bg-brown mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} offer={offer} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
