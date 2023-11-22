import Image from 'next/image'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getCoworkingspace from '@/libs/getCoworkingspace'




export default async function DetailPage({params}:{params:{hid:string}}) {
  console.log(params)
  const placeDetail = await getCoworkingspace(params.hid)
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
              <div>District: {placeDetail.data.district}</div>
              <div>Province: {placeDetail.data.province}</div>
              <div>Postal Code: {placeDetail.data.postalcode}</div>
              <div>Telephone: {placeDetail.data.tel}</div>
            </div>

          
        
    </div>
    </main>
      </main>
  )
}