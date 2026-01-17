import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import BookingInfo from './components/BookingInfo';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen font-poppins selection:bg-blush selection:text-brown-dark">
            <Navbar />

            <main>
                <Hero />
                <Offers />
                <BookingInfo />
                <Gallery />
                <Contact />
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/923187191657"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
            >
                <MessageCircle size={30} />
                <span className="absolute right-full mr-4 bg-white text-brown-dark px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Questions? Chat with us!
                </span>
            </motion.a>

            {/* Background patterns */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-brown rounded-full"></div>
                <div className="absolute top-[40%] right-[10%] w-96 h-96 border border-blush rounded-full opacity-50"></div>
                <div className="absolute bottom-[20%] left-[15%] w-48 h-48 border border-cream rounded-full"></div>
            </div>
        </div>
    );
}

export default App;
