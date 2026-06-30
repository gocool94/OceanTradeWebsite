import { motion } from 'framer-motion';
import { CheckCircle, Users, Truck, Globe } from 'lucide-react';
import { useScrollAnimation, scaleIn, staggerContainerSlow } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: CheckCircle,
    title: 'We Work with Accuracy',
    description: 'Our work includes quality and accuracy to meet your business requirements.',
  },
  {
    icon: Users,
    title: 'Highly Skilled Agents',
    description: 'We have team of highly skilled experts, SMEs, and professionals.',
  },
  {
    icon: Truck,
    title: 'On Time Delivery',
    description: 'We are known for on time delivery of assigned shipment with perfection.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'We provide global coverage and 24/7 support to ensure you get best services.',
  },
];

export default function Features() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section id="features" className="w-full bg-[#0A2B4C] py-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 rounded-full bg-[#E8A023] flex items-center justify-center"
                >
                  <Icon size={36} className="text-white" strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-body text-base font-semibold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-white/80 mt-2 max-w-[240px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
