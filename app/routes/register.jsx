import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import type { Route } from './+types/home';
// {}: Route.MetaArgs

export function meta() {
  return [
    { title: 'Workdey' },
    { name: 'description', content: 'Welcome to workdey!' },
  ];
}

const Register = () => {
  const [userData, setUserData] = useState({
    fullname: '',
    number: '',
    email: '',
    location: '',
    acctType: '',
  });
  const [error, setError] = useState(''); // For validation errors

  // Reusable change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error on input change
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!userData.fullname || !userData.email || !userData.acctType) {
      setError('Please fill in all required fields.');
      return;
    }

    // Simulate API submission (replace with your actual API call)
    console.log('Form Data Submitted:', userData);

    // Example: Send to backend
    // axios.post('/api/register', userData)
    //   .then(response => console.log('Success:', response))
    //   .catch(error => setError('Registration failed: ' + error.message));

    // Reset form on success
    setUserData({
      fullname: '',
      number: '',
      email: '',
      location: '',
      acctType: '',
    });
    setError('');

    alert('Registration successful! Check the console for data.');
  };

  return (
    <div className='min-h-screen max-w-screen overflow-x-hidden bg-secondary   text-primary '>
      <Header />

      <div className='flex flex-col items-center py-20 max-md:px-8'>
        <div className='flex items-center flex-col gap-2 mb-20'>
          <h2 className='text-7xl md:text-8xl font-semibold'>Get Started</h2>
          <p className='text-2xl md:text-3xl'>
            Please fill out the form below.
          </p>
        </div>

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        )}

        <div className='border border-[#473BA3] rounded-2xl p-3 md:w-[80%] lg:w-[60%] xl:w-[48%] w-full'>
          <form
            className='border border-[#473BA3] rounded-2xl md:p-12 p-6'
            onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className='flex gap-2 flex-col mb-6'>
              <label className='font-medium' htmlFor='fullName'>
                Full Name
              </label>
              <input
                className='border border-[#473BA3] py-3 px-4 rounded-lg font-medium placeholder:font-medium'
                type='text'
                name='fullname' // Matches state key
                id='fullName'
                value={userData.fullname}
                onChange={handleChange}
                required
                placeholder='Ivy Smith'
              />
            </div>

            {/* Phone Number */}
            <div className='flex gap-2 flex-col mb-6'>
              <label className='font-medium' htmlFor='phoneNumber'>
                Phone Number
              </label>
              <input
                className='border border-[#473BA3] py-3 px-4 rounded-lg font-medium placeholder:font-medium'
                type='tel'
                name='number' // Matches state key
                id='phoneNumber'
                value={userData.number}
                onChange={handleChange}
                placeholder='WhatsApp preferred'
                required
              />
            </div>

            {/* Email */}
            <div className='flex gap-2 flex-col mb-6'>
              <label className='font-medium' htmlFor='emailAddress'>
                Email
              </label>
              <input
                className='border border-[#473BA3] py-3 px-4 rounded-lg font-medium placeholder:font-medium'
                type='email'
                name='email' // Matches state key
                id='emailAddress'
                value={userData.email}
                onChange={handleChange}
                placeholder='Email Address'
                required
              />
            </div>

            {/* Location */}
            <div className='flex gap-2 flex-col mb-6'>
              <label className='font-medium' htmlFor='location'>
                Location
              </label>
              <input
                className='border border-[#473BA3] py-3 px-4 rounded-lg font-medium '
                type='text'
                name='location' // Matches state key
                id='location'
                value={userData.location}
                onChange={handleChange}
                placeholder='City/State'
                required
              />
            </div>

            {/* Account Type */}
            <div className='mb-4'>
              <label className='mb-2 block font-semibold'>
                Account Type (Select One)
              </label>

              <div className='flex flex-col gap-3 text-lg font-medium'>
                <label className='mb-2 flex items-center gap-3'>
                  <input
                    className='appearance-none size-6 checked:bg-primary border bg-gray-600 '
                    type='checkbox'
                    name='acctType' // Same name groups the radio buttons
                    value='hire'
                    checked={userData.acctType === 'hire'}
                    onChange={handleChange}
                  />{' '}
                  I want to HIRE
                </label>

                <label className='mb-2 flex items-center gap-3'>
                  <input
                    className='appearance-none size-6 checked:bg-primary border bg-gray-600 '
                    type='checkbox'
                    name='acctType' // Same name groups the radio buttons
                    value='work'
                    checked={userData.acctType === 'work'}
                    onChange={handleChange}
                  />{' '}
                  I want to WORK
                </label>

                <label className='mb-2 flex items-center gap-3'>
                  <input
                    className='appearance-none size-6 checked:bg-primary border bg-gray-600 '
                    type='checkbox'
                    name='acctType' // Same name groups the radio buttons
                    value='both'
                    checked={userData.acctType === 'both'}
                    onChange={handleChange}
                  />{' '}
                  Both
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className='font-medium text-lg w-full rounded-full py-3 border-2 border-primary'
              type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
