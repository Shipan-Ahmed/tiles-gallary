import getData from '@/data/dataFetching';
import React from 'react';
import TilesCard from './TilesCard';

const Features = async () => {
    const features = await getData();
    console.log(features, "features");
    const firstFourFeatures = features.slice(0, 4);
    return (
        <div>
            <div className=' mt-10 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    firstFourFeatures?.map(feature => <TilesCard key={feature.id} feature={feature} />)
                }
            </div>
        </div>
    );
};

export default Features;