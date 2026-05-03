import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ feature }) => {
    console.log(feature, "feature");
    return (
        < Card key={feature.id} className="  rounded-xl hover:shadow-2xl transition-shadow  duration-300" >
            <div>
                <Image src={feature.image} alt={feature.title} width={400} height={300} className='rounded-lg' />
            </div>
            <Card.Header>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Description>{feature.description}</Card.Description>
            </Card.Header>
            <Card.Content>
                <Link href={`/tiles/${feature.id}`} className="btn btn-outline btn-primary mt-4">
                    View Details
                </Link>
            </Card.Content>
        </Card>
    );
};

export default TilesCard;