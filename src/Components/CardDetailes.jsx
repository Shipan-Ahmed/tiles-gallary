import { Avatar, Badge, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardDetailes = async ({ tile }) => {
    console.log(tile, "tile details");
    return (
        <Card className='flex gap-10 w-full flex-col md:flex-row items-center justify-center mt-10 p-10 rounded-lg shadow-lg'>
            <div>
                {/* // image part */}
                <Image src={tile?.image} alt={tile?.title} width={400} height={300} className='rounded-lg mx-auto' />
            </div>
            <div >
                <h2 className='text-2xl font-bold mt-4'>{tile?.title}</h2>
                <p className='text-gray-700 mt-2'>{tile?.description}</p>
                <p className='text-lg font-semibold mt-4'>{tile?.price} {tile?.currency}</p>
                <div className='flex flex-wrap justify-between items-center gap-2 my-4'>
                    <span className="badge badge-soft badge-primary"> <span className='text-black'>Category:</span> {tile?.category} </span>
                    <span className="badge badge-soft badge-secondary"> <span className='text-black'>Dimensions:</span>  {tile?.dimensions} </span>
                    <span className="badge badge-soft badge-info"> <span className='text-black'>Material:</span>  {tile?.material} </span>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <span className="badge badge-outline badge-accent"> Rating: {tile.rating} </span>
                    <span className="badge badge-soft badge-warning"> <span className='text-black'>Stock:</span>  {tile.inStock === true ? 'In Stock' : 'Out of Stock'} </span>
        
                </div>
                <div className='mt-10'>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
           
        </Card>
    );
};

export default CardDetailes;