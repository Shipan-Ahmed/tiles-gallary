import getData from '@/data/dataFetching';
import React from 'react';

const TilesDetailes = async ({ params }) => {
    const { id } = await params;
    console.log(id, "id");
    const tiles = await getData();
    const tile = tiles.find(t => t.id === id);
    console.log(tile, "tile details");
    return (
        <div>
            
        </div>
    );
};

export default TilesDetailes;