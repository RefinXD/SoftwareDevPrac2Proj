'use client'
import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import React from 'react';

export default function ProductCard ({placeName,imgSrc,opHours,rating,onChange}:{placeName:string,opHours:string,imgSrc:string,rating?:any,onChange?:Function}){
    return(
        <InteractiveCard contentName={placeName}>
            <div className ="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'/>            
            </div>
            <div className="w-full h-[30%] p-[10px]">
                {placeName}
                <br/>
                Operating Hours: {opHours}
                <div>
                    { onChange? <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange ={(event, newValue) => {
                            event.stopPropagation();
                            onChange(placeName,newValue)
                        }
                        }
                        onClick={(e)=>e.stopPropagation()}
                        /> : ''
                    }
                </div>
            </div>
        </InteractiveCard>
    )
}