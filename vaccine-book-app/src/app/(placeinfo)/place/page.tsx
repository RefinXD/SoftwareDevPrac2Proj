import CardPanel from '@/components/cardPanel'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getCoworkingspaces from '@/libs/getCoworkingspaces'
import PlaceCatalog from '@/components/PlaceCatalog'
import { Suspense } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import AddPlaceForm from '@/components/AddPlaceForm'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DeletePlaceForm from '@/components/DeletePlaceForm'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const place = await getCoworkingspaces()
  if(!session || !session.user.token) return (
    <main className = "text-center">
  <Banner/>
  <Suspense fallback ={<p>Loading...<LinearProgress/></p>}>
    
    <PlaceCatalog placeJson = {place}/>
    </Suspense>
    </main>
  )
  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)    
  return (
      <main className = "text-center justify-items-center">
        {/* <h1 className = 'text-xl font-medium'>Select Your Hospital</h1> */}
        
        <Banner/>
        <Suspense fallback ={<p>Loading...<LinearProgress/></p>}>
          
          <PlaceCatalog placeJson = {place}/>
          {
                    (profile.data.role =="admin")?
                    <div>
                    <AddPlaceForm></AddPlaceForm>
                    <DeletePlaceForm token = {session.user.token}></DeletePlaceForm>
                    </div>
                    :null
                    
          }

        </Suspense>
      </main>
  )
}
