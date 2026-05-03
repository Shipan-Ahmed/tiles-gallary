import Image from 'next/image';
import React from 'react';
import logo4 from '../assets/logo4.png';
import { LogoFacebook } from '@gravity-ui/icons';
import { FaLinkedin, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='border-2 border-separator bg-gray-300 py-6 text-center mt-10'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-6 mb-4'>
                <div className='flex justify-center items-center gap-2'>
                    <Image src={logo4} alt="Logo" width={50} height={40} className='mx-auto' />
                    <p><span className='text-gray-900 font-bold text-3xl'>Tile</span><span className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-bold text-3xl'>Vogue</span></p>
                </div>
                <div>
                    <p className='text-lg font-bold text-gray-700'>Contact Us</p>
                    <p>Email:tilevogue@gmail.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Indira Road, Dhaka, Bangladesh</p>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-gray-700'>Follow Us</h2>
                    <p className='flex justify-center items-center gap-2'><LogoFacebook></LogoFacebook>  <FaXTwitter />  <FaSquareInstagram />  <FaLinkedin /></p>

                </div>
            </div>
            <div className='border-t border-t-gray-300 p-4 max-w-screen-lg mx-auto'>
                <p >&copy; 2026 TileVogue. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;