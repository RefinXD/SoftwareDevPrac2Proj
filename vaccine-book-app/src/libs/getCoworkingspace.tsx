import React from 'react'

export default async function getCoworkingspace(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspace")
    } else {
        console.log("correct")
    }
    return await response.json()
}
