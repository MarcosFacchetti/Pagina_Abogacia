import { useState } from 'react';
import React from 'react';
import { ImBriefcase } from 'react-icons/im';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  let Links = [
    { name: 'LABORAL', link: 'laboral' },
    { name: 'CIVIL', link: 'civil' },
    { name: 'PENAL', link: 'penal' },
    { name: 'CONTACTO', link: 'contacto' },
  ];

  let [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    setOpen(false); // Cerrar el menú al hacer clic en el enlace "Inicio"
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='text-2xl cursor-pointer flex items-center font-opti-times-roman text-gray-medium'
          onClick={scrollToTop}
        >
          <span className='text-4xl text-gray-medium mr-5'>
            <ImBriefcase />
          </span>
          <div className='text-3xl'>Nombre Apellido</div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-10 top-5 cursor-pointer md:hidden'
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        <ul
          className={`md:flex md:items-center font-opti-times-roman md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-[68px]' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='md:ml-8 text-xl pr-2 md:my-0 my-7 border-b-[1px] border-l-gray-medium'
            >
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)} // Cerrar el menú al hacer clic en un enlace
                className='text-gray-medium rounded-sm p-1 hover:bg-gray-500 hover:text-white duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
