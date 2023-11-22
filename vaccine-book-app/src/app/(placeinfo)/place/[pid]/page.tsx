import Image from 'next/image'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getCoworkingspace from '@/libs/getCoworkingspace'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'




export default async function DetailPage({params}:{params:{pid:string}}) {
  console.log(params)
  const placeDetail = await getCoworkingspace(params.pid)
  const session = await getServerSession(authOptions)
  // const token = session?.user.token
  
if(session && session.user.token) {
  var profile = await getUserProfile(session.user.token)
  var token = await session.user.token
}
  //console.log(placeDetail)
  return (
      <main className = {styles.main}>
        <Banner/>
        <main className='text-center p-5'>
        <div className='flex flex-row my-5'>
          <Image src={placeDetail.data.picture} alt="place"
          width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
  
            <div className='text-md mx-5 text-left m-5'>{placeDetail.data.name}
              <div>Address: {placeDetail.data.address}</div>
              <div>Operating Hours: {placeDetail.data.operatingHours}</div>
              <div>Province: {placeDetail.data.province}</div>
              <div>Postal Code: {placeDetail.data.postalcode}</div>
              <div>Telephone: {placeDetail.data.tel}</div>
            </div>

          
        
    </div>
    </main>
      </main>
  )
}