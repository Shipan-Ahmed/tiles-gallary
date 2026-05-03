'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        
        <Link href={href} className={` ${isActive ? 'text-blue-700 font-bold border-b border-b-blue-800' : ''}`}>
            {children}
        </Link>
        
    );
};

export default NavLink;