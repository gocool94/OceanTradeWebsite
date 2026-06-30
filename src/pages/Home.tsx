import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import Services from '../sections/Services';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
