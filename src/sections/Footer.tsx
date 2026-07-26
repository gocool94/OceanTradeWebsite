import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const serviceLinks = [
  'Custom Broking Services',
  'DDU & DDP Shipments',
  'Dock Stuffing Services',
  'Full Container Load Services',
  'HAZ Cargo Specialized Services',
  'Inland Transportation Services',
  'Less than Full Container Load',
  'Transportation Services',
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Ocean-Trade-and-Logistics-61577040312933/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <footer ref={ref}>
      {/* Main Footer */}
      <div className="bg-[#D4830C] pt-16 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-[1200px] mx-auto px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Service Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-body text-sm font-semibold text-[#0A2B4C] mb-4 uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-body text-sm text-[#0A2B4C] hover:opacity-70 transition-opacity leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2 - Office Address */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-body text-sm font-semibold text-[#0A2B4C] mb-4 uppercase tracking-wider">
                Our Office
              </h4>
              <div className="font-body text-sm text-[#0A2B4C] leading-relaxed">
                <p className="font-semibold">Ocean Trade and Logistics</p>
                <p className="mt-2">
                  TC-29/29/533(3, 102(2) CSM Nagar,
                  <br />
                  Edappazhanji, PO, Sasthamangalam,
                  <br />
                  Thiruvananthapuram, Kerala 695010
                </p>
              </div>
            </motion.div>

            {/* Column 3 - Social Icons */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-body text-sm font-semibold text-[#0A2B4C] mb-4 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[#0A2B4C] flex items-center justify-center text-white hover:bg-[#112D4E] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 4 - Contact Details */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-body text-sm font-semibold text-[#0A2B4C] mb-4 uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="font-body text-sm text-[#0A2B4C] leading-relaxed space-y-1">
                <p>
                  <span className="font-medium">P:</span> +91 81297 12096
                </p>
                <p className="mt-3">
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href="mailto:oceantrade.logistics@gmail.com"
                    className="hover:underline"
                  >
                    sajith@ologline.com
                  </a>
                </p>
                <div className="mt-4 pt-4 border-t border-[#0A2B4C]/20">
                  <a
                    href="#"
                    className="text-xs text-[#0A2B4C] hover:opacity-70 transition-opacity mr-4"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-xs text-[#0A2B4C] hover:opacity-70 transition-opacity"
                  >
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0A2B4C] py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-white/80 text-center sm:text-left">
            Copyright {new Date().getFullYear()} — Ocean Trade and Logistics | All Rights Reserved
          </p>
          <p className="font-body text-xs text-white/60">
            Made with love by Magran IT Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
