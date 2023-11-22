import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import addReservation from '@/libs/addReservation'
import getCoworkingspace from '@/libs/getCoworkingspace'
import getUserProfile from '@/libs/getUserProfile'
import updateCoworkingspace from '@/libs/updateCoworkingspace'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export default async function DetailPage({params}:{params:{sid:string}}) {
    const spaceDetail = await getCoworkingspace(params.sid)
    const session = await getServerSession(authOptions)
    // const token = session?.user.token
    
  if(session && session.user.token) {
    var profile = await getUserProfile(session.user.token)
    var token = await session.user.token
  }


  const reserve = async (reserveForm:FormData) => {
    "use server"
    const bookingDate = String(reserveForm.get("date")) 
    const numOfRooms = Number(reserveForm.get("room")) 
    // console.log(profile,params.sid,bookingDate,numOfRooms)
    addReservation(token, params.sid, new Date(bookingDate) , numOfRooms)
  }
  
  // const edit = async (editForm:FormData) => {
  //     "use server"
  //     const Name = String(editForm.get("date")) 
  //     const Address = String(editForm.get("room"))
  //     const Address = String(editForm.get("room"))
  //     // console.log(profile,params.sid,bookingDate,numOfRooms)
  //     updateCoworkingspace(
  //       token,
  //       params.sid,
  //       Name,
  //       Address,
  //       OperatingHours,
  //       Province,
  //       Postalcode,
  //       Tel,
  //       Picture)
  //   }
  return (
    <div>
        <div className='text-md mx-5 text-left m-5'>{spaceDetail.data.name}
              <div>Address: {spaceDetail.data.address}</div>
              <div>operating time: {spaceDetail.data.operatingHours}</div>
              <div>Province: {spaceDetail.data.province}</div>
              <div>Postal Code: {spaceDetail.data.postalcode}</div>
              <div>Telephone: {spaceDetail.data.tel}</div>
              <Image src={spaceDetail.data.picture} alt="Place"
          width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
            </div>
        <form action={reserve} className='p-5 bg-slate-300 w-1/2 m-10'>
          <div className = "text-xl text-blue-700">Add New Reservation</div>
            <div className = "flex items-center w-full my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Date
        </label>
        <input type="date" required id="date" name="date"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Room
        </label>
        <input type="number" required id="room" name="room" placeholder = "1"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
        Add New Reservation</button>
    </form>
    {/* <form action={edit} className='p-5 bg-slate-300 w-1/2 m-10'>
          <div className = "text-xl text-blue-700">Edit Space</div>
            <div className = "flex items-center w-full my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Date
        </label>
        <input type="date" required id="date" name="date"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Room
        </label>
        <input type="number" required id="room" name="room" placeholder = "1"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
        Add New Reservation</button>
    </form> */}
  </div>

  )
}
