export default function Footer({}) {
  return (
    <section className='p-6 md:p-8 lg:p-14 md:pb-6 bg-secondary text-primary footer'>
      <h2 className='font-bold text-center leading-[1] pb-20'>
        <span className='text-7xl md:text-[5.5rem] block'>START</span>
        <span className='block text-8xl md:text-[10rem]'>TASK</span>
        <span className='text-7xl md:text-[5.5rem]'>NOW</span>
      </h2>

      <div className='flex max-md:flex-col-reverse max-md:gap-20 justify-between items-center'>
        <a
          className='mt-4 cursor-pointer'
          href='mailto:goworkdey@gmail.com'
          target='_blank'>
          @workdeyapp - info@workdey.ng
        </a>

        <nav className='flex max-md:flex-col max-md:text-center max-md:gap-6 max-md:font-semibold max-md:text-2xl md:justify-center md:space-x-4'>
          <a href='#'>How it works</a>
          <a href='#services'>Services</a>
          <a href='mailto:goworkdey@gmail.com'>Pricing</a>
        </nav>
      </div>
    </section>
  );
}
