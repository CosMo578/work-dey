export default function SuccessStories() {
  return (
    <section
      id='success-stories'
      className='p-6 md:p-8 lg:p-14 bg-secondary text-primary z-[3]'>
      <div className='flex max-md:flex-col justify-between items-start mb-6'>
        <h2 className='font-bold mb-4'>
          <span className='block text-3xl'>SUCCESS</span>
          <span className='text-6xl'>STORIES</span>
        </h2>

        <div className='md:w-[53%] lg:w-[28%] text-right'>
          <p className='font-semibold mb-6 text-2xl'>Why</p>

          <p className='leading-[1.8] font-light text-xl'>
            Check out some of our star-studded campaigns and success stories.
            Warning: may cause serious FOMO.
          </p>
        </div>
      </div>

      <button
        className='text-2xl mx-auto block border rounded-full p-2 px-4 mb-24'
        onClick={() =>
          window.open('https://www.instagram.com/useworkdey', '_blank')
        }>
        Discover more
      </button>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  max-lg:justify-items-center gap-8 items-center max-w-full -mb-[15rem] lg:-mb-[21rem] z-[3]'>
        {/* Desktop */}
        {[
          {
            src: 'stories-image-1.png',
            alt: 'Story 1',
          },
          {
            src: 'stories-image-2.png',
            alt: 'Story 2',
          },
          {
            src: 'stories-image-3.png',
            alt: 'Story 3',
          },
        ].map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className='object-cover md:w-[60%] lg:w-[96%] rounded max-lg:hidden'
          />
        ))}

        {/* Mobile */}
        {[
          {
            src: 'stories-image-1-mobile.png',
            alt: 'Story 1',
          },
          {
            src: 'stories-image-2-mobile.png',
            alt: 'Story 2',
          },
          {
            src: 'stories-image-3-mobile.png',
            alt: 'Story 3',
          },
        ].map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className='object-fill w-[85%] rounded lg:hidden'
          />
        ))}
      </div>
    </section>
  );
}
