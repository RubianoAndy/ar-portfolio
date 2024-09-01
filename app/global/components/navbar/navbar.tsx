'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const route = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarOptions = [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'Curriculum', url: '/curriculum' },
        { id: 3, title: 'Projects', url: '/projects' },
        { id: 4, title: 'Contact', url: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full bg-white z-10">
            <div className="flex items-center justify-between p-4">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/assets/logos/Logo.png" className="h-10" alt="Logo" />
                    <span className="text-black text-xl font-bold">Andy Rubiano</span>
                </Link>

                <div className="flex md:hidden">
                    <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg bg-gray-200 hover:bg-gray-400">
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>

                <div className={`hidden md:flex items-center ml-auto ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-2 font-medium p-4 md:p-0">
                        {navbarOptions.map((option) => (
                            <li key={option.id}>
                                <Link href={option.url} className={`block py-2 px-3 text-black text-xl font-semibold md:hover:text-blue-500 ${route === option.url ? 'text-green-700' : ''}`}>
                                    {option.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-[56px] left-0 w-full bg-white md:hidden rounded-3xl shadow-lg">
                    <ul className="flex flex-col font-medium p-4 space-y-2">
                        {navbarOptions.map((option) => (
                            <li key={option.id} onClick={toggleMenu} className="w-full">
                                <Link href={option.url} className={`flex w-full justify-center py-2 px-3 text-black hover:text-blue-500 ${route === option.url ? 'text-green-700' : ''}`}>
                                    {option.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;