export default function Pricing({}) {
  return (
    <section
      id='pricing'
      className='p-6 md:p-8 lg:p-14 pt-[20rem] md:pt-[16rem] pb-16 lg:pt-[24rem] bg-primary text-secondary z-[2] grid lg:grid-cols-2 gap-10'>
      {/* Desktop */}
      <div className='max-lg:hidden items-end flex flex-col gap-12'>
        <p className='font-semibold mb-4 text-2xl'>How</p>

        <button
          className='text-2xl border rounded-full p-2 px-4'
          onClick={() => (window.location.href = 'mailto:goworkdey@gmail.com')}>
          More Detail
        </button>

        <p className='mb-4 w-[50%] text-xl font-light text-right'>
          Our services come with a side of affordability. No hidden fees. No
          fine print – just straightforward pricing that fits your budget like a
          glove.
        </p>
      </div>

      <div className='max-lg:hidden flex flex-col gap-6'>
        <h2 className='font-bold ml-20'>
          <span className='block  text-6xl'>Workdey</span>
          <span className='text-7xl'>Pricing</span>
        </h2>

        <img
          src='pricing-image.png'
          alt='Pricing Image'
          className='aspect-square w-[20rem] object-cover rounded-3xl mr-auto'
        />
      </div>

      {/* Mobile */}
      <div className='items-center flex flex-col gap-8 lg:hidden text-center'>
        <p className='font-semibold text-2xl'>How</p>

        <h2 className='font-bold'>
          <span className='block  text-6xl'>Workdey</span>
          <span className='text-7xl'>Pricing</span>
        </h2>

        <p className='mb-4 text-xl font-light'>
          Our services come with a side of affordability. No hidden fees. No
          fine print – just straightforward pricing that fits your budget like a
          glove.
        </p>

        <button
          className='text-2xl border rounded-full p-2 px-4'
          onClick={() => (window.location.href = 'mailto:goworkdey@gmail.com')}>
          More Detail
        </button>

        <img
          src='pricing-image.png'
          alt='Pricing Image'
          className='aspect-square md:w-[60%] w-[85%] object-fill rounded-3xl'
        />
      </div>
    </section>
  );
}
