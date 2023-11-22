import { dbConnect } from "@/db/dbConnect"
import Coworkingspaces from "@/db/models/coworkingspaces"
import deleteCoworkingspace from "@/libs/deleteCoworkingspace"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function DeletePlaceForm({token}:{token:string})
{

    const deletePlace = async (deletePlaceForm:FormData) => {
        "use server"
        const temp = deletePlaceForm.get("id")
        if (temp == null){
            revalidateTag("place")
            redirect("/place")
        }
        const id = temp.toString()
        await deleteCoworkingspace(token,id) 
        revalidateTag("place")
        redirect("/place")
    }
    return(
    <form action={deletePlace}>
    <div className="bg-slate-200 w-[100%] flex flex-col items-center space-y-4 p-10 ">
            <div className = "text-xl text-blue-700">Delete Place</div>
            <div className = "flex items-center w-full my-2">
                <label className="w-32 block text-gray-700 pr-4" htmlFor="model">
                    Place ID
                </label>
                <input type="text" required id="id" name="id" placeholder = "Place Name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>
            <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                Delete Place</button>
            </div>
    </form>
    )
}