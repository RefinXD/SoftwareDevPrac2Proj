'use client'
import VdoPlayer from "@/components/VdoPlayer"
import {useState} from "react"

export default function VdoCard(){
    const [playing, setPlaying] = useState(true)
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg
        bg-gray-200 flex flex-row">
            <VdoPlayer isPlaying={playing} vdoSrc="video/getvaccine.mp4"/>
            <div className="m-5">Get Your Vaccine Today
            <button id="playbutton"className="block rounded-md bg-sky-600 hover:bg-indigo-600
            px-3 py-2 text-white shadow-sm" onClick={()=>setPlaying(!playing)}>
                {playing? 'Pause':'Play'}
            </button>
            </div>

        </div>
    )
}