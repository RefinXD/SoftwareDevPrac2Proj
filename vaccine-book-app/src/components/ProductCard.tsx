'use client'
import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import React from 'react';

export default function ProductCard ({hospitalName,imgSrc,rating,onChange}:{hospitalName:string,imgSrc:string,rating?:any,onChange?:Function}){
    return(
        <InteractiveCard contentName={hospitalName}>
            <div className ="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'/>            
            </div>
            <div className="w-full h-[30%] p-[10px]">
                {hospitalName}
                <div>
                    { onChange? <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange ={(event, newValue) => {
                            event.stopPropagation();
                            onChange(hospitalName,newValue)
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