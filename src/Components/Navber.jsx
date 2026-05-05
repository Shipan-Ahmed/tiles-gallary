'use client';
import Link from 'next/link';
import logo4 from '../assets/logo4.png';
import Image from "next/image";
import NavLink from './NavLink';
import { signOut, useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navber = () => {
    const { data, isPending } = useSession();

    if (isPending) {
        return <div className='text-center py-4'><div><span className="loading loading-spinner text-error"></span></div></div>;
    }

    const user = data?.user;

    // To keep it minimalist, we define the links once
    const navLinks = (
        <>
            <li><NavLink href="/" className='font-semibold text-sm'>Home</NavLink></li>
            <li><NavLink href="/tiles" className='font-semibold text-sm'>All Tiles</NavLink></li>
            <li><NavLink href="/profile" className='font-semibold text-sm'>My Profile</NavLink></li>
        </>
    );

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-base-100">
            <header className="navbar  items-center justify-between px-8">

                {/* 1. MOBILE MENU ICON & LOGO */}
                <div className="navbar-start flex items-center">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-3">
                            {/* Standard Hamburger Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-gray-100">
                            {navLinks}
                        </ul>
                    </div>

                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image src={logo4} alt="Logo" width={40} height={32} className='hidden sm:block' />
                        <p className="text-2xl font-bold tracking-tight">
                            <span className='text-gray-900'>Tile</span>
                            <span className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text'>Vogue</span>
                        </p>
                    </Link>
                </div>

                {/* 2. DESKTOP MIDDLE LINKS */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-6">
                        {navLinks}
                    </ul>
                </div>

                {/* 3. USER ACTIONS */}
                <div className="navbar-end">
                    {user ? (
                        <div className='flex items-center gap-3'>
                            <Avatar size="sm">
                                <Avatar.Image alt={user.name} src={user.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user.name?.[0]}</Avatar.Fallback>
                            </Avatar>
                            <button onClick={() => signOut()} className='btn  bg-red-500 hover:bg-red-600 text-white border-none'>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className='flex gap-2'>
                            <Link href="/signin" className='btn   bg-yellow-500 hover:bg-yellow-600 text-white border-none'>Sign In</Link>
                            <Link href="/signup" className='btn  bg-green-500 hover:bg-green-600 text-white border-none'>Sign Up</Link>
                        </div>
                    )}
                </div>
            </header>
        </nav>
    );
};

export default Navber;