import getReservations from '@/libs/getReservations'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ReservationForm from '@/components/ReservationForm'
export default async function Reservation() {

  const session = await getServerSession(authOptions)
  const  token = session?.user.token

  const reservations = await getReservations(token)
  if (!reservations.count) return (
    <p>No Reservation</p>
  )
  return (
    reservations.data.map( (reservation : Object ) => (
        <ReservationForm reservation={reservation}/>
    ))
  )
}