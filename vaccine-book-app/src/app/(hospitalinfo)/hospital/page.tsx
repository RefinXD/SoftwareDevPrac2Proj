import CardPanel from '@/components/cardPanel'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getHospitals from '@/libs/getHospitals'
import HospitalCatalog from '@/components/hospitalCatalog'
import { Suspense } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import AddHospitalForm from '@/components/AddHospitalForm'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const hospital = await getHospitals()
  if(!session || !session.user.token) return (
    <main className = "text-center p-5">
  <Banner/>
  <Suspense fallback ={<p>Loading...<LinearProgress/></p>}>
    
    <HospitalCatalog hospitalJson = {hospital}/>
    </Suspense>
    </main>
    )
  
  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)    
  return (
      <main className = "text-center p-5">
        {/* <h1 className = 'text-xl font-medium'>Select Your Hospital</h1> */}
        
        <Banner/>
        <Suspense fallback ={<p>Loading...<LinearProgress/></p>}>
          
          <HospitalCatalog hospitalJson = {hospital}/>
          {
                    (profile.data.role =="admin")?
                    <AddHospitalForm></AddHospitalForm>
                    :null
          }

        </Suspense>
      </main>
  )
}
