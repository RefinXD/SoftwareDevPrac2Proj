'use client'
import React, { useState } from 'react';
import Image from 'next/image';
// import ReservationModal from './Modal/ReservationModal';
import getUserProfile from '@/libs/getUserProfile';

export default function Card(
    { name
        ,operatingHours,address,province,postalcode,tel, picture,token,sid
    }: { name:string, token:string, sid:string
        ,operatingHours:string,address:string,province:string,postalcode:string,tel:string, picture:string
      }
    ) {
        const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col py-4 px-12'>
        {/* <ReservationModal sid={sid}token={token} open={open} setOpen={setOpen}/> */}
        {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-auto">
      <div className="p-1 bg-sky-200">
      </div>
      <div className="pt-8 pb-2 px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
        <div className='w-full h-40 relative mb-3'>
            <Image
                    src={picture}
                    alt='hospitalPicture'
                    
                    objectFit='cover'
                    className='rounded-lg'
                    fill={true}
                />
        </div>
        
        <p className="text-xl font-bold text-gray-800">Operating Hour</p>
        <p className="text-lg font-medium text-gray-800 mb-6">{operatingHours}</p>
        <ul className="text-sm text-gray-600 mb-6">
          <li className="mb-1 flex items-center">
            
            Address: {address}
          </li>
          <li className="mb-1 flex items-center">
            
            Postalcode: {postalcode}
          </li>
          <li className="mb-1 flex items-center">
        
            province: {province}
          </li>
          <li className="mb-1 flex items-center">

            tel: {tel}
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button
            onClick={()=>setOpen(!open)}
          className="w-full bg-sky-600 text-white rounded-full px-4 py-2 hover:bg-sky-950 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
          Reservation
        </button>
      </div>
    </div> */}
    <div className="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
        <div>
            <img src={picture} alt="Featured Image 1" className="rounded-t-xl"/>
            <div className="px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
                <div className="text-white space-y-4">
                    <h3 className="text-xl font-bold lead-xl bold">{name}</h3>
                    <div className="text-lg font-light">{operatingHours}</div>
                </div>
                <div className="flex justify-between pt-8">
                    <ul className="flex flex-col gap-y-2.5">
                        <li className="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">{address}</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">{postalcode}</span>
                        </li>
                            <li className="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6"/>
                            <span className="paragraph-l font-bold">{province}</span>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-end">
                        <a href={`/coworkingspace/${sid}`} className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
