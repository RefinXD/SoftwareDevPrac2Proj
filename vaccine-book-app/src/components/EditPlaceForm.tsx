
import getCoworkingspace from "@/libs/getCoworkingspace"
import updateCoworkingspace from "@/libs/updateCoworkingspace"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function EditPlaceForm({token,pid}:{token:string,pid:string})
{
    const spaceDetail = await getCoworkingspace(pid)
    console.log(spaceDetail)
    const updatePlace = async (editPlaceForm:FormData) => {
        "use server"
        const name = editPlaceForm.get("name")?.toString() == "" ? spaceDetail.data.name : editPlaceForm.get("name")?.toString()
        const address = editPlaceForm.get("address") == "" ? spaceDetail.data.address : editPlaceForm.get("address")?.toString()
        const ophours = editPlaceForm.get("ophours") == "" ? spaceDetail.data.ophours : editPlaceForm.get("ophours")?.toString()
        const province = editPlaceForm.get("province") == "" ? spaceDetail.data.province : editPlaceForm.get("province")?.toString()
        const postalcode = editPlaceForm.get("postalcode") == "" ? spaceDetail.data.postalcode : editPlaceForm.get("postalcode")?.toString()
        const tel = editPlaceForm.get("tel") == "" ? spaceDetail.data.tel : editPlaceForm.get("tel")?.toString()
        const image = editPlaceForm.get("image") == "" ? spaceDetail.data.image : editPlaceForm.get("image")?.toString()
        try{
            const place = await updateCoworkingspace(token,pid,name,address,ophours,province,postalcode,tel,image)
            console.log(place)
            // (token: string, coworkingspaceId: string, 
            //     name: string, address: string, operatingHours: string, province: string, postalcode: string,
            //     tel: string, picture: string)
        }
        catch(error){
            console.log(error)
        }
        revalidateTag("place")
        redirect("/place")
    }
    return(
    <form action={updatePlace}>
    <div className="bg-slate-200 w-[100%] flex flex-col items-center space-y-4 p-10 ">
            <div className = "text-xl text-blue-700">Update Place</div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Place Name
                </label>
                <input type="text" id="name" name="name" placeholder = "Place Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Address
                </label>
                <input type="text" id="address" name="address" placeholder = "Place Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Operating Hours
                </label>
                <input type="text" id="ophours" name="ophours" placeholder = "Place Operating Hours"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Province
                </label>
                <input type="text" id="province" name="province" placeholder = "Place Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Postal Code
                </label>
                <input type="text" id="postalcode" name="postalcode" placeholder = "Place Postal Code"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
                
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Telephone
                </label>
                <input type="text" id="tel" name="tel" placeholder = "Place Telephone"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Image
                </label>
                <input type="text" id="image" name="image" placeholder = "Place Image URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                Add New Place</button>
                </div>
    </form>
    )
}