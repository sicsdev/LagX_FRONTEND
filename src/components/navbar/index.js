'use client';
import React, { useState } from "react";
import Link from 'next/link';
import './navbar.css';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="container mx-auto px-4 px-20">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center logo">
                            <Link href="/">
                                <img src='/images/logo.png' />
                            </Link>
                        </div>
                        {/* <div className="hidden md:flex links"> */}
                        <div
                            className={`hidden md:flex links nav_basic ${isActive ? 'border-blue-500' : ''
                                }`}
                            onClick={() => setIsActive(!isActive)}

                        >
                            <Link href="#" className="text-sm px-3 py-2">Home</Link>
                            <Link href="#" className="text-sm px-3 py-2">Games</Link>
                            <Link href="#" className="text-sm px-3 py-2">How it works</Link>
                            <Link href="/pricing" className={pathname.startsWith('/pricing') ? 'text-sm px-3 py-2 active' : 'text-sm px-3 py-2'} >Pricing</Link>
                            <Link href="#" className="text-sm px-3 py-2">FAQ</Link>

                        </div>
                        <div className="hidden md:flex login">
                            <Link href="#" className="text-sm hover:text-white px-3 py-2">Login</Link>
                            <Link href="#" className="text-sm hover:text-white px-3 py-2">Free Trail</Link>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav >
            <div>
            </div>
        </>

    );
};

export default Navbar;
