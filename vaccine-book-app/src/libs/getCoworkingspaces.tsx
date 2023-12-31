import React from 'react'

export default async function getCoworkingspaces() {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))

    const response = await fetch("http://localhost:5000/api/v1/coworkingspaces", 
        // {next: {tags:['hospitals']}}
    )
    console.log(response)
    if(!response.ok){
        console.log(response.status)
        throw new Error("Failed to fetch coworkingspaces")
    } 
    return await response.json()
}
