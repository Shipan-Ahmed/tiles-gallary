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
    if (data) {
        console.log("Session data in Navber: ", data);
    }

    const user = data?.user;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-base-100">
            <header className="flex h-16 items-center justify-between px-6">
                <Link href={"/"} className='flex justify-center items-center gap-2'>
                    <Image src={logo4} alt="Logo" width={50} height={40} className='mx-auto' />
                    <p><span className='text-gray-900 font-bold text-3xl'>Tile</span><span className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-bold text-3xl'>Vogue</span></p>
                </Link>
                <ul className="flex items-center gap-4">
                    <li><NavLink href="/" className='font-semibold'>Home</NavLink></li>
                    <li><NavLink href="/tiles" className='font-semibold'>All Tiles</NavLink></li>
                    <li><NavLink href="/profile" className='font-semibold'>My Profile</NavLink></li>
                </ul>
                <div>
                    {
                        user ? <>
                            <Avatar className='mr-4'>
                                <Avatar.Image alt={user.name} src={user.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                            </Avatar>
                            {/* <span className='font-semibold mr-2  bg-sky-200 rounded-full px-4 py-2'>{user.name[0]}</span> */}
                            <button onClick={() => {signOut()}} className='btn bg-red-500 ml-2 text-white px-4 py-2 rounded'>Logout</button>
                        </> : <div className='flex gap-2'><Link href="/signin" className='btn bg-yellow-500 text-white px-4 py-2 rounded'>Sign In</Link>
                            <Link href="/signup" className='btn bg-green-500 text-white px-4 py-2 rounded'>Sign Up</Link></div>
                   }
                </div>
            </header>
        </nav>
    );
};

export default Navber;