import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import { Link } from 'react-router-dom';
import Contact from './assets/contact.svg';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';
import MotionDiv from './components/MotionDiv.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index path='/' element={<HomePage />} />
      </Route>
      <Route
        path='/contact'
        element={
          <MotionDiv style='appear' className='px-14 pb-8'>
            <h1 className='text-7xl pt-10 pb-6'>Contact Us</h1>
            <div className='flex justify-around items-center'>
              <div className='w-3/5'>
                <p className='w-4/5'>
                  If you are interested in collaborating with us or have any
                  queries, feedback or suggestions regarding our projects, feel
                  free to reach out to us. We'd love to hear from you!
                </p>
                <span className='w-full flex items-center justify-center'>
                  <img src={Contact} alt='contact' className='w-2/3 flex' />
                </span>
                <div className='contact-details'>
                  <div className='contact-details-item'>
                    <CiLocationOn className='contact-icon' />
                    <p>
                      <span className='block'>Location: </span>
                      <Link to='https://www.google.com/maps/dir//Netaji+Subhas+University+of+Technology+Azad+Hind+Fauj+Marg+Dwarka+Sector-3,+Dwarka+Delhi,+110078/@28.6100216,77.0379647,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390d05dd375e5a13:0x108adaa3abe4bd07'>
                        Directions
                      </Link>
                    </p>
                  </div>
                  <div className='contact-details-item'>
                    <FaPhone className='contact-icon' />
                    <p>
                      <span className='block'>Contact Number:</span>
                      <Link to='tel:+919999999999'>+91 99999 99999</Link>
                    </p>
                  </div>
                  <div className='contact-details-item'>
                    <CiMail className='contact-icon' />
                    <p>
                      <span className='block'>Email Address:</span>
                      <Link to='mailto:johndoe@email.com'>
                        johndoe@email.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <form
                action=''
                method='post'
                onSubmit={(e) => e.preventDefault()}
                className='max-w-md mb-8'
              >
                <div className='mb-4'>
                  <input
                    type='text'
                    name='name'
                    id=''
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                    placeholder='Your name'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='email'
                    name='email'
                    id=''
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='text'
                    name='subject'
                    id=''
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                    placeholder='Subject'
                  />
                </div>
                <div className='mb-4'>
                  <textarea
                    name='message'
                    id=''
                    cols={30}
                    rows={7}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                    placeholder='Enter your message here...'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
                >
                  Send Message
                </button>
              </form>
            </div>
          </MotionDiv>
        }
      />
      <Route path='*' element={<div>Not Found</div>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
