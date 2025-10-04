export default function Hero({}) {
  return (
    <div>
      <section className='p-6 md:p-8 lg:p-14 hero relative lg:pb-[20rem]'>
        {/* Desktop */}
        <div className='max-md:hidden '>
          <h1 className='md:text-[7rem] lg:text-[10rem] text-primary leading-[1] text-center font-bold mb-4'>
            WORKDEY <br /> NOW
          </h1>

          <div className='flex flex-col md:flex-row items-start justify-between'>
            <div className='space-y-2 w-[30%]'>
              <p>
                <span className='font-semibold block'>
                  Your hustle just got easier.
                </span>
              </p>
              <p className='mb-4 leading-[1.8] font-light'>
                Post a task, get it done. Hire trusted freelancers for graphics,
                writing, delivery, and more right here, right now.
              </p>

              <a href='/register' className='cursor-pointer'>
                <button className='bg-primary text-secondary px-4 py-2 rounded-full font-semibold cursor-pointer'>
                  Start Now
                </button>
              </a>
            </div>

            <div className='text-2xl mt-2'>
              <ul className='space-y-3'>
                <li className='font-light'>
                  <span className='font-semibold'>+2,000</span> Tasks Completed
                </li>
                <li className='font-light'>
                  <span className='font-semibold'>+12k</span> Trusted Users
                </li>
                <li className='font-light'>
                  <span className='font-semibold'>+500</span> Verified
                  Freelancers
                </li>
              </ul>
            </div>
          </div>

          <div className='w-fit left-1/2 -translate-x-1/2 -bottom-32 absolute'>
            <img
              src='/hero-image.png'
              alt='Hero Image'
              className='rounded-2xl w-48 h-48 md:w-[388.8496px] md:h-[580px] object-cover object-top'
            />
          </div>

          <button
            type='button'
            className='size-20 flex items-center justify-center rounded-full bg-primary absolute bottom-8 right-8 cursor-pointer'>
            <img src='/chat-icon.svg' alt='chat icon' className='w-[60%]' />
          </button>
        </div>

        {/* Mobile */}
        <div className='md:hidden pt-20'>
          <h1 className='text-[5rem] text-primary leading-[1] text-center font-bold mb-12'>
            WORKDEY <br /> NOW
          </h1>

          <ul className='flex flex-col gap-4 w-[60%] text-xl ml-auto mb-12'>
            <li className='font-light'>
              <span className='font-semibold'>+2,000</span> Tasks Completed
            </li>
            <li className='font-light'>
              <span className='font-semibold'>+12k</span> Trusted Users
            </li>
            <li className='font-light'>
              <span className='font-semibold'>+500</span> Verified Freelancers
            </li>
          </ul>

          <img
            src='/hero-image.png'
            alt='Hero Image'
            className='rounded-2xl w-[60%] h-auto mx-auto object-fill'
          />

          <button
            type='button'
            className='size-20 flex items-center justify-center rounded-full bg-primary absolute bottom-4 right-4 cursor-pointer'>
            <img src='/chat-icon.svg' alt='chat icon' className='w-[60%]' />
          </button>
        </div>
      </section>

      <div className='bg-secondary text-white md:hidden p-6'>
        <div className='space-y-6'>
          <p>
            <span className='font-semibold block'>
              Your hustle just got easier.
            </span>
          </p>
          <p className='mb-4 leading-[1.8] font-light'>
            Post a task, get it done. Hire trusted freelancers for graphics,
            writing, delivery, and more right here, right now.
          </p>

          <a href='/register' className='cursor-pointer'>
            <button className='bg-primary text-secondary px-4 py-2 rounded-full font-semibold cursor-pointer'>
              Start Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
