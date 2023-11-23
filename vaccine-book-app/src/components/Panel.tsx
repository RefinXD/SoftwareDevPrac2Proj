"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';
import getCoworkingspaces from '@/libs/getCoworkingspaces';
import getUserProfile from '@/libs/getUserProfile';

export default function Panel({session}:{session:any}) {
    const [coworkingSpaces,setCoworkingSpaces] = useState<any>(null)
    const [profile,setProfiles] = useState<any>(null)
    async function loadData() {
        await new Promise((resolve) => setTimeout(resolve,300))
        const coworkingSpaces = await getCoworkingspaces()
        setCoworkingSpaces(coworkingSpaces)
        
        if(session && session.user.token) {
            var p = await getUserProfile(session.user.token)
            setProfiles(p)
        }
    }
    useEffect(() => {
        loadData()
      }, []);
    
        return(
            <div className="bg-gray-100 min-h-screen py-2 flex items-center justify-center w-full p-0 flex-col">
            <h1 className='text-5xl font-extrabold text-gray-800 mt-6 mb-16 text-left'>Browsing Your Space.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { (session?.user.token != null && coworkingSpaces != null)?coworkingSpaces.data.map((spaceItem:Object)=>(
                <Card name={spaceItem.name}
                    address={spaceItem.address}
                    operatingHours={spaceItem.operatingHours}
                    postalcode={spaceItem.postalcode}
                    picture={spaceItem.picture}
                    province={spaceItem.province}
                    tel={spaceItem.tel}
                    key={spaceItem.name}
                    token={session?.user.token}
                    sid={spaceItem._id}
                />
            )):null}
                </div>
            </div>
        )
}
