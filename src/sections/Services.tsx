import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const services = [
  {
    title: 'Full Container Load (FCL) Service',
    description:
      'We offer FCL Service for larger volume of goods and goods that are fragile and most likely to get damaged.',
    image: '/images/services_fcl.jpg',
  },
  {
    title: 'Less than full Container Load (LCL)',
    description:
      "LCL method is cost effective and recommended when shipping involves combining multiple shippers' cargo.",
    image: '/images/services_lcl.jpg',
  },
  {
    title: 'Custom Broking Service',
    description:
      'Our custom broker team makes the import and export paper works and regulations easy for the shipment.',
    image: '/images/services_custom.jpg',
  },
  {
    title: 'Transportation Service',
    description:
      'We provide innovative and dynamic transport solutions with modern and advanced technologies.',
    image: '/images/services_transport.jpg',
  },
  {
    title: 'Dock Stuffing Service',
    description:
      'We have a team of skilled experts in the area of dock stuffing where the cargos are stuffed in containers.',
    image: '/images/services_dock.jpg',
  },
  {
    title: 'HAZ Cargo Specialized Service',
    description:
      'We provide hazardous cargo services that means transporting goods, materials, articles, that are dangerous.',
    image: '/images/services_haz.jpg',
  },
  {
    title: 'Inland Transportation Service',
    description:
      'We offer multiple modes of transportation and ensure and maintain the quality and provide the best service.',
    image: '/images/services_inland.jpg',
  },
  {
    title: 'DDU & DDP Shipments',
    description:
      'We provide DDU & DDP shipment services and handle all the procedures to ensure safe and reliable shipping.',
    image: '/images/services_ddu.jpg',
  },
];

export default function Services() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="services" className="w-full bg-white py-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[28px] font-medium text-[#2D3436]">
            Our Domestic and International Services
          </h2>
          <div className="w-16 h-1 bg-[#D4830C] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A2B4C]/0 group-hover:bg-[#0A2B4C]/20 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-medium text-[#2D3436] text-center mt-4 px-2 leading-tight">
                {service.title}
              </h3>
              <p className="font-body text-sm text-[#636E72] text-center mt-2 px-2 line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
