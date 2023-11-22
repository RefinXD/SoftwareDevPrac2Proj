
import Image from 'next/image'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getCoworkingspace from '@/libs/getCoworkingspace'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import MakeReservationForm from '@/components/MakeReservationForm'
import EditPlaceForm from '@/components/EditPlaceForm'
import { Button } from '@mui/material'
import deleteCoworkingspace from '@/libs/deleteCoworkingspace'
import router, { redirect } from 'next/navigation'
import { revalidateTag} from 'next/cache'




export default async function DetailPage({params}:{params:{pid:string}}) {
  const placeDetail = await getCoworkingspace(params.pid)
  const session = await getServerSession(authOptions)
  if (session == null) return
  // const token = session?.user.token
  
if(session && session.user.token) {
  var profile = await getUserProfile(session.user.token)
  var usertoken = await session.user.token
}

  return (

      <main>
        <main>
        <div className='text-center p-5 bg-slate-300 w-1/2 m-10 rounded-lg flex flex-row my-5'>
          
          <Image src={placeDetail.data.picture} alt="place"
          width={0} height={0} sizes='100vw' className='round-lg w-[50%] bg-black'/>
        
            <div className='text-xl mx-5 text-left m-5'>{placeDetail.data.name}
              <div className='font-serif'>Address: {placeDetail.data.address}</div>
              <div className='font-serif'>Operating Hours: {placeDetail.data.operatingHours}</div>
              <div className='font-serif'>Province: {placeDetail.data.province}</div>
              <div className='font-serif'>Postal Code: {placeDetail.data.postalcode}</div>
              <div className='font-serif'>Telephone: {placeDetail.data.tel}</div>

            </div>

          
         </div>
         <div className='items-center content-center'>
           <MakeReservationForm params={params.pid}></MakeReservationForm> 
           {
            (profile.data.role =="admin")?
            <EditPlaceForm pid={params.pid} token={session?.user.token}></EditPlaceForm>
            :null
          }
         </div>
    </main>
      </main>
  )
}