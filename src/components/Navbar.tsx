"use client";

import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // ensure you have remixicon installed
import Link from 'next/link'; // adjust path as needed

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    // assumes you're using AuthContext

    const closeMenu = () => {
        setIsMenu(false);
    };

    return (
        <header className='bg-[#0a000aff] fixed top-0 left-0 w-full z-50'>
            <nav className='flex justify-between items-center h-16 sm:h-20 px-10'>
                <div className='text-2xl sm:text-3xl text-white'>Perfume.com</div>

                <div
                    id='nav-menu'
                    className={`
            bg-[#330033ff] absolute top-0 ${isMenu ? 'left-0' : 'left-[-100%]'} w-full min-h-[80vh]
            transform transition-all duration-300 ease-in-out
            flex justify-center items-center
            md:static md:min-h-fit md:w-auto md:bg-transparent
          `}
                >
                    <ul className='flex md:flex-row flex-col items-center gap-6 text-white ' onClick={closeMenu}>
                        <li><Link href='/' className='nav-links active'>Home</Link></li>
                        <li><Link href='/product' className='nav-links'>Products</Link></li>
                        <li><Link href='/mens' className='nav-links'>Mens</Link></li>
                        <li><Link href='/womans' className='nav-links'>Womens</Link></li>
                        <li><Link href='/signup' className='nav-links'>Sign Up</Link></li>
                        <li><Link href='/signin' className='nav-links'>Sign In</Link></li>

                    </ul>
                </div>

                {/* Mobile menu icon (optional) */}
                <div className='md:hidden text-white text-2xl cursor-pointer z-50' onClick={() => setIsMenu(!isMenu)}>
                    <i className={isMenu ? 'ri-close-line' : 'ri-menu-line'}></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
