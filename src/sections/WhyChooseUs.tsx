import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation';

const benefits = [
  'We are Committed to excellence',
  'Highly Skilled and Managed Staffs',
  'We offer you select the best deals',
  'Affordable & Competitive Price',
  'We Work round the clock',
  'Connectivity across the Globe',
  'Effective Communication',
];

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section className="w-full bg-white py-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src="/images/about_warehouse.jpg"
              alt="Warehouse Operations"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#D4830C] text-white p-4 rounded-lg shadow-lg"
            >
              <div className="font-display text-2xl font-medium">15+</div>
              <div className="font-body text-xs uppercase tracking-wider">Years</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeInRight}
              className="font-script text-[28px] text-[#2D3436] mb-6"
            >
              Why Customers Like our Services ?
            </motion.h2>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#D4830C] flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="font-body text-sm text-[#2D3436]">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
