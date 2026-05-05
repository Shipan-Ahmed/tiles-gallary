import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ feature }) => {
    return (
        <Card
            key={feature?.id}
            className="flex flex-col h-full rounded-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
        >
            {/* 1. Image Wrapper for consistent height */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl">
                <Image
                    src={feature?.image}
                    alt={feature?.title}
                    fill
                    className='object-cover'
                />
            </div>

            {/* 2. Content Section */}
            <div className='flex flex-col flex-grow p-4 text-center items-center justify-between'>
                <div>
                    <h2 className="font-bold text-gray-800 text-lg mb-2">{feature?.title}</h2>
                    <p className="text-gray-500 text-sm line-clamp-2">
                        {feature?.description}
                    </p>
                </div>

                {/* 3. Action Button stays at bottom */}
                <div className="w-full mt-4">
                    <Link
                        href={`/tiles/${feature?.id}`}
                        className="btn btn-outline btn-sm btn-primary w-full max-w-[150px]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default TilesCard;