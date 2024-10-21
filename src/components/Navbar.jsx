import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
    const [scrolled, setScrolled] = useState(false);

    // Menggunakan useEffect untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Ubah nilai ini sesuai kebutuhanmu
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener saat component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-transparent py-1' : 'bg-white shadow-md py-4'}`}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                <div className="flex justify-between h-16">
                    {/* Logo di sebelah kiri */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="block h-16 w-auto rounded-full"
                            src="H.png"
                            alt="Workflow"
                        />
                    </div>

                    {/* Navigasi di sebelah kanan */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                        <Link
                            to={'/'}
                            className={active === 'Home' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium' : `hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out duration-500 ${scrolled ? 'text-white' : 'text-green-700'}`}
                        >
                            Home
                        </Link>
                        <Link
                            to={'/about'}
                            className={active === 'About' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium' : `hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out duration-500 ${scrolled ? 'text-white' : 'text-green-700'}`}
                        >
                            About
                        </Link>
                        <Link
                            to={'/Contact'}
                            className={active === 'Contact' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium' : `hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out duration-500 ${scrolled ? 'text-white' : 'text-green-700'}`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
