'use client';
import UpdatedProfile from '@/Components/UpdatedProfile';
import { useSession } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePages = () => {
    const { data, isPending } = useSession();
    if (isPending) {
        return <div className='text-center py-4'><div><span className="loading loading-spinner text-error"></span></div></div>;
    }
    if (data) {
        console.log("Session data in Navber: ", data);
    }

    const user = data?.user;
    console.log("User data in ProfilePages: ", user);
    return (
        <Card className='w-full max-w-lg mx-auto px-20 py-10 mt-10  rounded-lg shadow-lg flex flex-col justify-center items-center gap-4'>
            <Avatar  className='mr-4'>
                <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
            </Avatar>
            <h2 className='text-xl font-bold'>{user?.name}</h2>
            <p className='text-gray-700'>{user?.email}</p>
            <UpdatedProfile/>
        </Card>
    );
};

export default ProfilePages;