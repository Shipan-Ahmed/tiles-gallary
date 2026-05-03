
import Link from 'next/link';
import logo4 from '../assets/logo4.png';
import Image from "next/image";

const Navber = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-base-100">
            <header className="flex h-16 items-center justify-between px-6">
                <Link href={"/"} className='flex justify-center items-center gap-2'>
                    <Image src={logo4} alt="Logo" width={50} height={40} className='mx-auto' />
                    <p><span className='text-gray-900 font-bold text-3xl'>Tile</span><span className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-bold text-3xl'>Vogue</span></p>
                </Link>
                <ul className="flex items-center gap-4">
                    <li><Link href="/" className='font-semibold'>Home</Link></li>
                    <li><Link href="/tiles" className='font-semibold'>All Tiles</Link></li>
                    <li><Link href="/myProfile" className='font-semibold'>My Profile</Link></li>
                </ul>
                <div>
                   Profile
                </div>
            </header>
        </nav>
    );
};

export default Navber;