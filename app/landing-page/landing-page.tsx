import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SuccessStories from '../components/SuccessStories';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen max-w-screen overflow-x-hidden bg-secondary text-white'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Pricing Section */}
      <Pricing />

      {/* Call to Action */}
      <Footer />
    </div>
  );
};

export default LandingPage;
