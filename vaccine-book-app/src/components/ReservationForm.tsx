'use client'
import deleteReservation from '@/libs/deleteReservation'
import { Button, LinearProgress } from '@mui/material'
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { useState } from 'react'

export default function ReservationForm({reservation, token} : {reservation:Object, token:string|undefined}){
    const router = useRouter()
    const [deleted , setDeleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleRemove = (reserveId : string ) => {
        setLoading(true)
        deleteReservation(token, reserveId).then((res) => {
            setDeleted(true)
        }).finally(() => {
            setLoading(false)
        } )
        
    }

    const handleRouteChange = (reserveId : string) => {
        router.push('/reservation/' + reserveId);
    }
    
    if (loading) return (<p>Deleting please wait...<LinearProgress/></p>)
    if (deleted) return (<div></div>)
    return (
        <div className="bg-slate-200 rounded px-8 mx-8 py-5 my-5">
        <div className="text-md">Booking Date : {reservation.bookingDate}</div>
        <div className="text-md">Number of rooms : {reservation.numOfRooms}</div>
        <div className="text-md">Place : {reservation.coworkingspace.name}</div>
        <div className="text-md">Booked by : {reservation.user.name}</div>
        <button className="bg-white border font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-700 hover:text-white" onClick={() => handleRouteChange(reservation._id)}>Edit reservation</button>
        <button className="bg-white border font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-700 hover:text-white" onClick={() => handleRemove(reservation._id)}>Remove reservation</button>
    </div>)
        

    
}   