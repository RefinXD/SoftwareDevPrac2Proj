import PlaceBookingForm from "@/components/PlaceBookingForm"
import getCoworkingspaces from '@/libs/getCoworkingspaces'
export default async function Booking() {
    const coworkingspaces  = await getCoworkingspaces()
       
    return (
        <main className="bg-slate-100 w-[100%] flex flex-col items-center space-y-4">
            <PlaceBookingForm coWorkingSpacesJson={coworkingspaces}/>
        </main>
    )
}