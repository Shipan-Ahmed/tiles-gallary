import TilesCard from '@/Components/TilesCard';
import TilesClient from '@/Components/TilesClient';
import getData from '@/data/dataFetching';
import { Button, Card, Label, SearchField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
export const dynamic = 'force-dynamic'

const AllTiles = async () => {
    const tiles = await getData();
    console.log(tiles, "tiles");
    return (
        // <div className='m-10'>
        //     <div className='flex justify-end items-center mt-10'>
        //         <SearchField name="search">
        //             <Label>Search</Label>
        //             <SearchField.Group>
        //                 <SearchField.SearchIcon />
        //                 <SearchField.Input className="w-[280px]" placeholder="Search..." />
        //                 <SearchField.ClearButton />
        //             </SearchField.Group>
        //         </SearchField>
        //     </div>
        //     <div className=' mt-10 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        //         {
        //             tiles?.map(tile => <TilesCard key={tile.id} feature={tile} />)
        //         }
        //     </div>
        // </div>
        <TilesClient tiles={tiles} />
    );
};

export default AllTiles;