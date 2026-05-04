import getData from '@/data/dataFetching';
import React from 'react';
import TilesCard from './TilesCard';
export const dynamic = 'force-dynamic'
const Features = async () => {
    const features = await getData();
    console.log(features, "features");
    const firstFourFeatures = features.slice(0, 4);
    return (
        <div className='mt-20 mx-4'>
            <h2 className='text-3xl font-bold ml-4'> Top Features</h2>
            <div className=' mt-10 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    firstFourFeatures?.map(feature => <TilesCard key={feature.id} feature={feature} />)
                }
            </div>
        </div>
    );
};

export default Features;