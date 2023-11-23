'use client'
import VdoPlayer from "@/components/VdoPlayer"
import { fabClasses } from "@mui/material"
import {useEffect, useState} from "react"

export default function VdoCard(){
    const [playing, setPlaying] = useState(true)
    const covers = ['/video/vid1.mp4','/video/vid2.mp4','/video/vid3.mp4']
    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    const handledVideoEnded = () =>{
        setFinished(true)
        setIndex((index+1)%covers.length)
        console.log(index)
        setFinished(false)
        setPlaying(true);
    }

    
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg
        bg-gray-200 flex flex-row">
            <VdoPlayer isPlaying={playing} vdoSrc={covers[index]} callback={handledVideoEnded}/>
            <div className="m-5">Join Us Today
            <button id="playbutton"className="block rounded-md bg-sky-600 hover:bg-indigo-600
            px-3 py-2 text-white shadow-sm" onClick={()=>setPlaying(!playing)}>
                {playing? 'Pause':'Play'}
            </button>
            </div>

        </div>
    )
}