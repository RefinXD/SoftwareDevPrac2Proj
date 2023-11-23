import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UpdatePlaceBookingForm from '@/components/UpdatePlaceBookingForm'
import { getServerSession } from 'next-auth'
export default async function EditReservation({params}:{params:{reserveId:string}}) {
  const reserveId = params.reserveId
  const session = await getServerSession(authOptions)
  return (
    <div><UpdatePlaceBookingForm reservationId={reserveId} token={session?.user.token} role={session?.user.role}/></div>
  )
}