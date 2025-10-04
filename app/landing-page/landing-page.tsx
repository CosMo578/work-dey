import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import Pricing from '../components/Pricing';

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
      <section id='services' className='p-6 md:p-8 lg:p-14 text-secondary bg-primary'>
        <div className='md:flex items-end justify-between mb-8'>
          <button className='text-2xl max-md:hidden border rounded-full p-2 px-4'>
            Discover more
          </button>

          <h2 className='font-bold leading-[1.2] text-right'>
            <span className='text-[3rem]'>Workdey</span> <br />
            <span className='text-[5rem]'>Services</span>
          </h2>
        </div>

        <p className='mb-4 max-md:text-xl'>
          Launching your brand into the stratosphere with captivating campaigns
          that stop the scroll.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='p-4'>
            <img
              src='/services-image-1.png'
              alt='Promote Product'
              className='size-full mx-auto object-cover rounded-3xl aspect-square object-center'
            />
          </div>

          <div className='p-4 flex flex-col justify-between'>
            <p className='text-right w-[80%] ml-auto text-lg max-md:hidden'>
              Launching your brand into the stratosphere with captivating
              campaigns that stop the scroll
            </p>

            <h3 className='text-2xl font-semibold max-md:text-right'>
              Promote Product
            </h3>
          </div>

          <div className='p-4'>
            <img
              src='/services-image-2.png'
              alt='Drive Engagement'
              className='size-full mx-auto object-cover rounded-3xl aspect-square object-center'
            />
          </div>

          <div className='p-4 flex flex-col justify-between'>
            <h3 className='text-right text-2xl font-semibold'>
              Drive Engagement
            </h3>

            <p className='w-[72%] text-lg max-md:hidden'>
              From crafting killer content to engaging with your audience, we’ve
              got your back.
            </p>
          </div>

          <div className='p-6'>
            <img
              src='/services-image-3.png'
              alt='Grow Community'
              className='size-full mx-auto object-cover rounded-3xl aspect-square object-center'
            />

            <h3 className='mt-2 text-2xl font-semibold max-md:hidden'>
              Grow Community
            </h3>
          </div>

          <div className='p-6'>
            <img
              src='/services-image-4.png'
              alt='Grow Community'
              className='size-full mx-auto object-cover rounded-3xl aspect-square object-center'
            />
          </div>

          <h3 className='mt-2 text-2xl font-semibold text-right md:hidden'>
            Grow Community
          </h3>
          <p className='text-lg md:hidden'>
            From crafting killer content to engaging with your audience, we’ve
            got your back.
          </p>
        </div>
      </section>

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
