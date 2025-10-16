export default function About({}) {
  return (
    <section
      id='about'
      className='p-6 md:p-8 lg:p-14 bg-primary text-secondary'>
      {/* Desktop */}
      <div className='max-lg:hidden '>
        <p className=''>
          <b>Trusted by everyday Nigerians and small businesses like: </b>{' '}
          {/* Flutterwave, Bolt, Coldberry, Tantalizers, GIG Logistics */}
        </p>

        <p className='text-right font-light text-3xl'>Who?</p>

        <div className='flex items-center gap-4 justify-evenly'>
          <p className='w-[12%] font-light text-3xl self-end mb-20'>What?</p>

          <div className='w-[48%]'>
            <h2 className='font-semibold mb-4 mt-16'>
              <span className='text-7xl'>About</span>
              <br />
              <span className='text-5xl'>Workdey</span>
            </h2>

            <img
              src='/about-image.png'
              alt='About Image'
              className='w-48 h-48 md:w-[20.5rem] md:h-[20.5rem] object-cover rounded-3xl aspect-square'
            />

            <p className='mt-6 leading-[2] text-lg w-[75%]'>
              Our services come with a side of affordability. No hidden fees. No
              fine print – just straightforward pricing that fits your budget
              like a glove.
            </p>
          </div>

          <div className='flex flex-col lg:w-[40%] -mt-32'>
            <button className='text-2xl border rounded-full p-2 px-4 ml-auto mr-8 mb-10'>
              Learn more
            </button>

            <div className='text-xl'>
              <p className='mb-4'>
                <b>Your on-demand workforce.</b>
              </p>

              <p className='leading-[1.8]'>
                Workdey connects businesses and individuals to reliable
                freelancers for quick tasks, digital services, or even physical
                work (e.g., graphic design, tech fixes, errands).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        <p>
          <span className='font-semibold'>
            Trusted by everyday Nigerians and small businesses like:{' '}
          </span>
        </p>

        <div className='mb-4 space-y-4'>
          <h2 className='font-semibold mt-16'>
            <span className='text-7xl'>About</span>
            <br />
            <span className='text-5xl'>Workdey</span>
          </h2>

          <h3 className='text-right font-light text-3xl'>Who?</h3>

          <button
            className='text-2xl border rounded-full p-2 px-4 mx-auto mb-10 block'
            onClick={() =>
              window.open('https://www.instagram.com/useworkdey', '_blank')
            }>
            Learn more
          </button>
        </div>

        <div className='text-xl space-y-4 mb-10'>
          <h3 className='text-center'>
            <b>Your on-demand workforce.</b>
          </h3>

          <p className='leading-[1.8] text-right'>
            Workdey connects businesses and individuals to reliable freelancers
            for quick tasks, digital services, or even physical work (e.g.,
            graphic design, tech fixes, errands).
          </p>
        </div>

        <div className='space-y-8'>
          <img
            src='/about-image.png'
            alt='About Image'
            className='w-full md:w-[60%] md:mx-auto object-fill rounded-5xl aspect-square'
          />

          <div>
            <h3 className=' font-light text-2xl '>What?</h3>

            <p className='text-lg'>
              Our services come with a side of affordability. No hidden fees. No
              fine print – just straightforward pricing that fits your budget
              like a glove.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
