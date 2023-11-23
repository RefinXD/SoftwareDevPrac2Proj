'use client'
// import { useWindowListener } from "@/hooks/useWindowListener"
import { useRef, useState } from "react"
import { useEffect } from "react"

export default function VdoPlayer({vdoSrc, isPlaying,callback} : {callback:Function,vdoSrc:string, isPlaying:boolean}){

    const vdoRef = useRef<HTMLVideoElement>(null)
    // useWindowListener("contextmenu",(e) => e.preventDefault())
    const [finished, setFinished] = useState(false);
    
    useEffect(()=> {
        //alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying){
            vdoRef.current?.play()
        }
        else {
            vdoRef.current?.pause()
        }
        const videoElement = vdoRef.current;

        const handleVideoEnded = () => {
            callback();
        };

        if (videoElement){
            videoElement.addEventListener('ended',handleVideoEnded);
        }
        return () => {
            videoElement?.removeEventListener('ended', handleVideoEnded);
        };

    },[finished])
    
    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} autoPlay muted controls/>
    )
}


