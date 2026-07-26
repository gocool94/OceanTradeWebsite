import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call us',
    description: 'Talk with our expert team, who can help you with all your queries.',
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Send an email to us, and our expert will promptly get back to you.',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    description: 'Visit our Office and Branch to discuss your business requirements.',
  },
];

export default function Contact() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full bg-white py-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                >
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="font-display text-2xl text-[#2D3436] text-center">
                  Thank You!
                </h3>
                <p className="font-body text-sm text-[#636E72] text-center mt-2">
                  Your message has been prepared locally. Please email us or use the contact details on the right.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-[#2D3436] block mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 border border-[#DFE6E9] rounded-lg font-body text-sm text-[#2D3436] placeholder:text-[#636E72]/60 focus:outline-none focus:border-[#0A2B4C] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[#2D3436] block mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3.5 border border-[#DFE6E9] rounded-lg font-body text-sm text-[#2D3436] placeholder:text-[#636E72]/60 focus:outline-none focus:border-[#0A2B4C] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[#2D3436] block mb-1.5">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3.5 border border-[#DFE6E9] rounded-lg font-body text-sm text-[#2D3436] placeholder:text-[#636E72]/60 focus:outline-none focus:border-[#0A2B4C] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[#2D3436] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3.5 border border-[#DFE6E9] rounded-lg font-body text-sm text-[#2D3436] placeholder:text-[#636E72]/60 focus:outline-none focus:border-[#0A2B4C] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[#DFE6E9] text-[#2D3436] font-body text-[13px] font-medium tracking-[0.08em] uppercase px-8 py-3 rounded transition-all duration-300 hover:bg-[#0A2B4C] hover:text-white hover:border-[#0A2B4C] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  SUBMIT
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Let's Talk Graphic */}
            <motion.div variants={fadeInRight} className="mb-8">
              <div className="relative inline-block">
                <h3 className="font-display text-4xl text-[#0A2B4C]">
                  Let's Talk
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-1 bg-[#D4830C] mt-1 rounded-full"
                />
              </div>
            </motion.div>

            {/* Contact Info Blocks */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-[#0A2B4C] flex items-center justify-center flex-shrink-0"
                    >
                      <Icon size={24} className="text-white" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h4 className="font-body text-base font-semibold text-[#2D3436]">
                        {info.title}
                      </h4>
                      <p className="font-body text-sm text-[#636E72] mt-1">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct Contact Details */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 p-6 bg-[#0A2B4C] rounded-lg"
            >
              <h4 className="font-display text-xl text-white mb-4">
                Contact Details
              </h4>
              <div className="space-y-3">
                <p className="font-body text-sm text-white/90">
                  <span className="font-medium">Phone:</span> +91 81297 12096
                </p>
                <p className="font-body text-sm text-white/90">
                  <span className="font-medium">Email:</span>{' '}
                  oceantradelogistics@gmail.com
                </p>
                <p className="font-body text-sm text-white/90">
                  <span className="font-medium">Address:</span>{' '}
                  TC-29/29/533(3, 102(2) CSM Nagar, Edappazhanji, PO, Sasthamangalam, Thiruvananthapuram, Kerala 695010
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
