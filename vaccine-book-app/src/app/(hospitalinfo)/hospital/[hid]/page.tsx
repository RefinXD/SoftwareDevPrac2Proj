import Image from 'next/image'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getHospital from '@/libs/getHospital'




export default async function DetailPage({params}:{params:{hid:string}}) {
  console.log(params)
  const hospitalDetail = await getHospital(params.hid)
  //console.log(hospitalDetail)
  return (
      <main className = {styles.main}>
        <Banner/>
        <main className='text-center p-5'>
        <div className='flex flex-row my-5'>
          <Image src={hospitalDetail.data.picture} alt="Hospital"
          width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
  
            <div className='text-md mx-5 text-left m-5'>{hospitalDetail.data.name}
              <div>Address: {hospitalDetail.data.address}</div>
              <div>District: {hospitalDetail.data.district}</div>
              <div>Province: {hospitalDetail.data.province}</div>
              <div>Postal Code: {hospitalDetail.data.postalcode}</div>
              <div>Telephone: {hospitalDetail.data.tel}</div>
            </div>

          
        
    </div>
    </main>
      </main>
  )
}