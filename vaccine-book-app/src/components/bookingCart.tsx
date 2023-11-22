"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
export default function BookingCart (){
    const bookingItem = useAppSelector((state)=> state.bookSlice.booking)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
        {
                bookingItem.length == 0? 
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
                    No Vaccine Booking
                </div>
                :
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key ={bookingItem[0].citizenid}>
                    <div className = "text-xl">Booking Detail</div>
                    <div className="text-sm">Name: {bookingItem[0].name} </div>
                    <div className="text-sm">Surname: {bookingItem[0].surname} </div>
                    <div className="text-sm">Date: {bookingItem[0].date} </div>
                    <div className="text-sm">Location: {bookingItem[0].hospital} Hospital</div>
                    <button className = "block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick = { () => dispatch(removeBooking(bookingItem[0]))}>
                        Remove Item
                    </button>
                </div>


            }
        </>
    )
}