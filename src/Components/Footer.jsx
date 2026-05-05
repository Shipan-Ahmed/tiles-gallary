import Image from 'next/image';
import React from 'react';
import logo4 from '../assets/logo4.png';
import { LogoFacebook } from '@gravity-ui/icons';
import { FaLinkedin, FaSquareInstagram, FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t border-gray-200 bg-slate-50 pt-12 pb-6 mt-10'>
            <div className='max-w-7xl mx-auto px-6'>
                {/* Main Content Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10'>

                    {/* 1. Brand Section */}
                    <div className='flex flex-col items-center md:items-start gap-4'>
                        <div className='flex items-center gap-2'>
                            <Image src={logo4} alt="TileVogue Logo" width={45} height={35} />
                            <p className="text-2xl font-bold tracking-tight">
                                <span className='text-gray-900'>Tile</span>
                                <span className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text'>Vogue</span>
                            </p>
                        </div>
                        <p className='text-gray-500 text-sm text-center md:text-left leading-relaxed max-w-xs'>
                            Elevating your spaces with premium tiling solutions. Quality and elegance for every corner of your home.
                        </p>
                    </div>

                    {/* 2. Contact Section */}
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className='text-lg font-bold text-gray-800 mb-4'>Contact Us</h2>
                        <ul className='space-y-3 text-gray-600 text-sm'>
                            <li className='flex items-center gap-3 justify-center md:justify-start hover:text-yellow-600 transition-colors'>
                                <FaEnvelope className='text-yellow-500' /> tilevogue@gmail.com
                            </li>
                            <li className='flex items-center gap-3 justify-center md:justify-start hover:text-yellow-600 transition-colors'>
                                <FaPhone className='text-yellow-500' /> +1 (123) 456-7890
                            </li>
                            <li className='flex items-center gap-3 justify-center md:justify-start'>
                                <FaLocationDot className='text-yellow-500' /> 123 Indira Road, Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>

                    {/* 3. Social Section */}
                    <div className='flex flex-col items-center '>
                        <h2 className='text-lg font-bold text-gray-800 mb-4'>Follow Us</h2>
                        <div className='flex gap-4'>
                            <Link href="#" className='p-2 bg-white rounded-full shadow-sm hover:scale-110 hover:text-blue-600 transition-all border border-gray-100'><LogoFacebook /></Link>
                            <Link href="#" className='p-2 bg-white rounded-full shadow-sm hover:scale-110 hover:text-black transition-all border border-gray-100'><FaXTwitter /></Link>
                            <Link href="#" className='p-2 bg-white rounded-full shadow-sm hover:scale-110 hover:text-pink-600 transition-all border border-gray-100'><FaSquareInstagram /></Link>
                            <Link href="#" className='p-2 bg-white rounded-full shadow-sm hover:scale-110 hover:text-blue-700 transition-all border border-gray-100'><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className='border-t border-gray-200 pt-6 text-center'>
                    <p className='text-gray-400 text-xs tracking-wider uppercase font-medium'>
                        &copy; {new Date().getFullYear()} TileVogue. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;