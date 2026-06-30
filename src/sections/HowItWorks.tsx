import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Let us connect and know more',
    description:
      'We get started to know your exact business requirement via email, chat phone or online meet',
  },
  {
    number: '2',
    title: 'Scheduling Shipment Details',
    description:
      'We ensure you get your choice of shipment slot and service at an affordable price.',
  },
  {
    number: '3',
    title: 'On Time Delivery',
    description:
      'Sit Back and Relax while we deliver your shipment and complete your assigned service',
  },
];

export default function HowItWorks() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section id="how-it-works" className="w-full bg-white py-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[28px] font-medium text-[#2D3436]">
            How to get started ?
          </h2>
          <p className="font-body text-sm text-[#636E72] mt-3">
            We offer our services in simplest way to get started and meet your business requirements.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Team Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <img
              src="/images/process_team.jpg"
              alt="Our Professional Team"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-[#D4830C] rounded-lg -z-10" />
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="flex gap-5 items-start"
              >
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-[#D4830C] flex items-center justify-center flex-shrink-0"
                >
                  <span className="font-body text-2xl font-semibold text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="font-body text-base font-semibold text-[#2D3436]">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[#636E72] mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
