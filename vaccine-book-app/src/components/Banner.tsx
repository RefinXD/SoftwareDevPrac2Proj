'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
export default function Banner (){
    const router = useRouter()
    const covers = ['/img/bg1.jpg','/img/bg2.jpg','/img/bg3.jpg','/img/bg4.jpg']
    const [index, setIndex] = useState(0);
    const { data:session } = useSession()
    console.log(session?.user.token)
    return (
        <div className={styles.banner} onClick ={()=> setIndex(index+1)}>
            
               <Image src={covers[index%4]}
               alt='cover'
               fill={true} 
               objectFit='cover'/>
                <div className={styles.bannerText}>
                    
                <div className="bg-slate-400 h-15 w-[100%] bg-opacity-50 flex flex-col items-center space-y-4 p-10 ">
                    <h1 className='text-4xl font-medium'>Welcome To CoWorkers</h1>

                    <h3 className='text-2xl font-serif'>Find your perfect coworking spaces here</h3>
                    </div>
                </div>
                {
                    session? <div className='z-30 absolute top-5 right-10 font-bold text-white
                    text-xl'> Hello {session.user?.name}</div> :null
                }
                <button id="enterbutton" className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation();router.push('/place')}}>
                    Enter Now
                </button>
        </div>
    )
}