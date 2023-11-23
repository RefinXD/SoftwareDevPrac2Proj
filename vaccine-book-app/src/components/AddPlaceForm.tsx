import { dbConnect } from "@/db/dbConnect"
import Coworkingspaces from "@/db/models/coworkingspaces"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddPlaceForm()
{

    const addPlace = async (addPlaceForm:FormData) => {
        "use server"
        
        const name = addPlaceForm.get("name")
        const address = addPlaceForm.get("address")
        const ophours = addPlaceForm.get("ophours")
        const province = addPlaceForm.get("province")
        const postalcode = addPlaceForm.get("postalcode")
        const tel = addPlaceForm.get("tel")
        const image = addPlaceForm.get("image")
        try{
            await dbConnect()
            const place = await Coworkingspaces.create({
                "name":name,
                "address":address,
                "operatingHours":ophours,
                "province":province,
                "postalcode":postalcode,
                "tel":tel,
                "picture":image,
            })
            console.log(place)
        }
        catch(error){
            console.log(error)
        }
        revalidateTag("place")
        redirect("/place")
    }
    return(
    <form action={addPlace} className="flex justify-center">
    <div className="bg-slate-200 w-[100%] flex flex-col space-y-4 p-10 ">
            <div className = "text-xl text-blue-700">Add New Place</div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Place Name
                </label>
                <input type="text" required id="name" name="name" placeholder = "Place Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Address
                </label>
                <input type="text" required id="address" name="address" placeholder = "Place Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Operating Hours
                </label>
                <input type="text" required id="ophours" name="ophours" placeholder = "Place Operating Hours"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Province
                </label>
                <input type="text" required id="province" name="province" placeholder = "Place Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Postal Code
                </label>
                <input type="text" required id="postalcode" name="postalcode" placeholder = "Place Postal Code"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
                
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Telephone
                </label>
                <input type="text" required id="tel" name="tel" placeholder = "Place Telephone"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Image
                </label>
                <input type="text" required id="image" name="image" placeholder = "Place Image URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <button type="submit" className = "self-center bg-blue-500 w-[20%] hover:bg-blue-700 text-white p-2 rounded">
                Add New Place</button>
            </div>
    </form>
    )
}