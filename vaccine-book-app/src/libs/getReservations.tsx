import React from 'react'

export default async function getReservations(token: string, coworkingspaceId?: string) {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))
    const requestBody: Record<string, any> = {};

    if (coworkingspaceId) requestBody.coworkingspaceId = coworkingspaceId;

    const response = await fetch("http://localhost:5000/api/v1/bookings",{
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can adjust this header based on your API requirements
          },
        // body: JSON.stringify(requestBody)
    })
    if(!response.ok){
        throw new Error("Failed to fetch reservations")
    }
    return await response.json()
}
