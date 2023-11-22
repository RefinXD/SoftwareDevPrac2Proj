import React from 'react'

export default async function updateCoworkingspace(token: string, coworkingspaceId: string, 
    name: string, address: string, operatingHours: string, province: string, postalcode: string,
    tel: string, picture: string) {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))
    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${coworkingspaceId}`,{
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can adjust this header based on your API requirements
          },
        body: JSON.stringify({
            "name": name,
            "address": address,
            "operatingHours": operatingHours,
            "province": province,
            "postalcode": postalcode,
            "tel": tel,
            "picture": picture
        })
    })
    console.log(JSON.stringify({
        "name": name,
        "address": address,
        "operatingHours": operatingHours,
        "province": province,
        "postalcode": postalcode,
        "tel": tel,
        "picture": picture
    }))
    console.log(response)
    if(!response.ok){
        throw new Error("Failed to update coworkingspace")
    } 
    return await response.json()
}
