import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className=' text-center p-20 mt-10'>
            <h1 className="text-7xl md:text-9xl font-extrabold">
                <span className="text-gray-900">4</span>
                <span className="text-yellow-500">0</span>
                <span className="text-gray-900">4</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Oops! Tile not found 🧩
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                Looks like this page is missing. Maybe the design changed or the tile moved.
            </p>

         
            {/* Buttons */}
            <div className="flex gap-4 mt-8  justify-center">
                <Link href="/">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-black transition">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;