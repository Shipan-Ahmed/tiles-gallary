import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';


const Banner = () => {
    return (
        <div>
            <div className='flex'>
                <button className='btn btn-outline bg-red-500 px-4 py-2 text-white'>Live</button>
                <Marquee speed={50} pauseOnHover={true} gradient={false} className='bg-gray-200'>
                    <p className="animate-marquee whitespace-nowrap ">
                        New Arrivals | Ceramic | Marble | Modern Designs | Best Quality Tiles
                    </p>
                </Marquee>
            </div>
            
            <section className="bg-gray-100 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Discover Your Perfect Tiles
                </h1>
                <p className="text-gray-600 mb-6">
                    Premium tiles for modern homes & interiors
                </p>
                <Link href="/tiles" >
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded">
                        Browse Now
                    </button>
                </Link>
            </section>
            


        </div>
    );
};

export default Banner;