import UpdatePlaceBookingForm from '@/components/UpdatePlaceBookingForm'

export default async function EditReservation({params}:{params:{reserveId:string}}) {
  const reserveId = params.reserveId
  return (
    <div><UpdatePlaceBookingForm reservationId={reserveId}/></div>
  )
}