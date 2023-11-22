import React from 'react'

export default async function addReservation(token: string, coworkingspaceId: string, bookingDate: Date, numOfRooms: Number) {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))

    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${coworkingspaceId}/bookings`,{
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can adjust this header based on your API requirements
          },
        body: JSON.stringify({
            "bookingDate": bookingDate,
            "numOfRooms": numOfRooms,
        })
    })
    if(!response.ok){
        throw new Error("Failed to add reservation")
    } 
    return await response.json()
}
