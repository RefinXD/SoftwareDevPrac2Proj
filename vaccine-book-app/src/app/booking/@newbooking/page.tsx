'use client'
import LocationDateReserve from "@/components/locationDateReserve"
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../../interfaces";

export default function newbooking() {
    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null);
    const [location,setLocation] = useState<string>("CU");
    const [name,setName] = useState<string>("");
    const [surname,setSurname] = useState<string>("");
    const [id,setId] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>()
    const bookingItem = useAppSelector((state)=> state.bookSlice.booking)
    
    const makeBooking = () =>{
        if(bookingDate && location){
            const item:BookingItem = {
                name: name,
                surname: surname,
                citizenid: id,
                hospital : location,
                date : dayjs(bookingDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
            
            console.log(bookingItem[0])
        }
    }

    return (
        <main className="bg-slate-100 w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Booking</div>
            <div className="w-fit space-y-2">
            <div style={{ display: "flex", flexDirection: "row",
              justifyContent: "space-between", flexWrap:"wrap"}}>
                <div>
                    <div className="text-md text-left text-gray-600">
                        Name</div>
                    <input type = "text" id="name" placeholder="Your Name" className="rounded ring-1
                    ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400" 
                    onChange = {(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                    <div className="text-md text-left text-gray-600">
                        Surname</div>
                    <input type = "text" id="surname" placeholder="Your Surname" className="rounded ring-1
                    ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
                    onChange = {(e) => {setSurname(e.target.value)}}/>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row",
              justifyContent: "space-between", flexWrap:"wrap"}}>
                <div>
                    <div className="text-md text-left text-gray-600">
                        Citizen ID</div>
                    <input type = "text" id="id" placeholder="Your ID" className="rounded ring-1
                    ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
                    onChange = {(e) => {setId(e.target.value)}}/>
                </div>
            </div>

            
            <div className="text-md text-left text-gray-600">
                Reservation Date And Location</div>
            <LocationDateReserve onDateChange = {(value:Dayjs)=>{setBookingDate(value)}} onLocationChange
             = {(value:string)=> setLocation(value)}/>
            </div>
        <button className = "block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick={makeBooking}>
            Make Booking</button>   
        </main>

    )
}