import { motion } from 'framer-motion';
import { heroFadeInUp } from '../hooks/useScrollAnimation';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_port.jpg"
          alt="Shipping Port at Dusk"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to top, rgba(10, 43, 76, 0.75) 0%, rgba(10, 43, 76, 0.35) 50%, rgba(10, 43, 76, 0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] h-full flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h1
            variants={heroFadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal text-white leading-[1.1] max-w-[800px] mx-auto"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Ocean Trade and Logistics — India's Leading Shipping & Logistics Company
          </motion.h1>

          <motion.p
            variants={heroFadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="font-body text-base text-white/90 mt-6 max-w-[600px] mx-auto leading-relaxed"
          >
            Complete logistics solutions across the globe. Operating from Thiruvananthapuram with networks at all major ports in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-[#D4830C] text-white font-body text-[13px] font-medium tracking-[0.08em] uppercase px-8 py-3.5 rounded transition-all duration-300 hover:bg-[#E8A023] hover:scale-105"
            >
              Our Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-transparent border border-white/60 text-white font-body text-[13px] font-medium tracking-[0.08em] uppercase px-8 py-3.5 rounded transition-all duration-300 hover:bg-white hover:text-[#0A2B4C]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Amber Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#D4830C] z-[3]" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
