import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <header className='flex justify-between items-center p-6 md:p-8 lg:p-14'>
        <a href='/'>
          <div className='text-2xl md:text-3xl font-bold'>
            <img src='/logo.svg' alt='logo' width={50} height={50} />
          </div>
        </a>

        <nav className='hidden md:flex space-x-4'>
          <a href='#how-it-works' className='text-primary'>
            How it works
          </a>
          <a href='#services' className='text-primary'>
            Services
          </a>
          <a href='#pricing' className='text-primary'>
            Pricing
          </a>
        </nav>

        <button
          className='max-md:hidden text-secondary rounded-full px-2.5 py-1.5 font-semibold bg-primary'
          onClick={() => window.open('/register', '_blank')}>
          Contact Us
        </button>

        <button
          className='lg:hidden cursor-pointer'
          onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <img
              src='/hamburger.svg'
              alt='hamburger menu'
              width={50}
              height={50}
            />
          ) : (
            <X className='text-primary' width={50} height={50} />
          )}
        </button>

        <motion.ul
          initial={{
            height: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          animate={{
            height: isOpen ? 300 : 0,
            opacity: isOpen ? 1 : 0,
            paddingTop: isOpen ? '2rem' : 0,
            paddingBottom: isOpen ? '2rem' : 0,
          }}
          exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute text-primary left-0 right-0 top-20 flex h-auto flex-col items-center gap-8 overflow-hidden bg-secondary z-20 font-medium lg:hidden'>
          <li>
            <a href='#how-it-works'>How it works</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#pricing'>Pricing</a>
          </li>

          <button
            className='text-secondary rounded-full px-2.5 py-1.5 font-semibold bg-primary'
            onClick={() =>
              (window.location.href = 'mailto:goworkdey@gmail.com')
            }>
            Contact Us
          </button>
        </motion.ul>
      </header>
    </>
  );
}
