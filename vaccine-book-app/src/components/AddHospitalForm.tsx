import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm()
{

    const addHospital = async (addHospitalForm:FormData) => {
        "use server"
        
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const image = addHospitalForm.get("image")
        try{
            await dbConnect()
            const hospital = await Hospital.create({
                "name":name,
                "address":address,
                "district":district,
                "province":province,
                "postalcode":postalcode,
                "tel":tel,
                "picture":image,
            })
        }
        catch(error){
            console.log(error)
        }
        revalidateTag("hospital")
        redirect("/hospital")
    }
    return(
    <form action={addHospital}>
    <div className = "text-xl text-blue-700">Add New Hospital</div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Hospital Name
        </label>
        <input type="text" required id="name" name="name" placeholder = "Hospital Name"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Address
        </label>
        <input type="text" required id="address" name="address" placeholder = "Hospital Address"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            District
        </label>
        <input type="text" required id="district" name="district" placeholder = "Hospital District"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Province
        </label>
        <input type="text" required id="province" name="province" placeholder = "Hospital Province"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Postal Code
        </label>
        <input type="text" required id="postalcode" name="postalcode" placeholder = "Hospital Postal Code"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Tel
        </label>
        <input type="text" required id="tel" name="tel" placeholder = "Hospital Telephone"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <div className = "flex items-center w-full my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="model">
            Image
        </label>
        <input type="text" required id="image" name="image" placeholder = "Hospital Image URL"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400"/>
    </div>
    <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
        Add New Hospital</button>
    </form>
    )
}