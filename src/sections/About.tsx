import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="about" className="w-full bg-[#0A2B4C] py-20" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1200px] mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-3xl lg:text-[36px] font-normal text-white leading-[1.2]"
        >
          Ocean Trade and Logistics — India's Leading Shipping & Logistics Company
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="font-body text-sm text-white/85 leading-[1.7] max-w-[900px] mx-auto mt-6"
        >
          We are one of the leading shipping and logistic company serving the global market. Our company provide complete logistic solution around the globe. We are operating from Thiruvananthapuram and also have networks all over major ports in India. We provide services to all small, medium and large industries, helping our clients or customers to ship the material or finished good without hassle and without any damage. We are one of the most reliable and reputed shipping and logistic company. At Ocean Trade and Logistics, we ensure high standard quality services in an affordable price. We guarantee our clients to ship their product, container with utter care and ensuring no damage.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'Global Partners' },
            { number: '24/7', label: 'Customer Support' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="font-display text-3xl lg:text-4xl text-[#D4830C] font-medium">
                {stat.number}
              </div>
              <div className="font-body text-xs text-white/70 mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
