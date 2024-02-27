import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'Product',
      link: '#product',
    },
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'About Us',
      link: '#about',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed hidden top-0 sm:flex w-full items-center transition-all duration-150 justify-between md:px-12 sm:px-6 lg:px-24 py-2 z-[10] ${
        scrolled ? 'bg-[#FAF9F4] shadow-2xl ' : 'border-b-[0.8px]'
      }`}
    >
      <Link to='/' className='flex items-center gap-[0.5dvw]'>
        <img src={Logo} alt='' className='w-[5dvw] py-[1.25dvw]' />
        <p
          className={`${
            scrolled ? 'text-black' : 'text-white'
          } text-[2.5dvw] tracking-tighter`}
        >
          SolarBreeze
        </p>
      </Link>
      <nav className='gap-[2dvw] flex'>
        {navLinks.map((link, index) => (
          <a href={link.link} key={index}>
            <p
              className={`text-[1.35dvw] ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
            </p>
          </a>
        ))}
      </nav>
    </header>
  );
}
