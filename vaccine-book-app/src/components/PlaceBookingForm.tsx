'use client'
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { BookingItem } from "../../interfaces";
import { Dayjs } from "dayjs";
import addReservation from '@/libs/addReservation'
import {useSession } from 'next-auth/react'
import { useRouter,redirect } from "next/navigation";
import Alert from '@mui/material/Alert';


export default function PlaceBookingForm({coWorkingSpacesJson} : {coWorkingSpacesJson:Object} ) {
  const coworkingspaces  = coWorkingSpacesJson

  const {data : session} = useSession()
  const token = session?.user.token
  const router  = useRouter()

  const [isOpen, setOpen] = useState(false);
  const [isErr, setErr] = useState(false);
  const [formData, setFormData] = useState<BookingItem>({
    bookingDate: new Date(),
    numOfRooms: 0 ,
    coWorkingSpaceId: ""
  });

  const handleSubmit =  (event: FormEvent) => {
    event.preventDefault();
    if (formData.numOfRooms == undefined || formData.numOfRooms <= new Number(3)){
      addReservation(token, formData.coWorkingSpaceId, formData.bookingDate, formData.numOfRooms).then(
        res => {
          setErr(false)
        }
      ).finally(() => {
        setOpen(true)
      })
    }else {
      setOpen(true)
      setErr(true)
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (value: Dayjs | null) => {
    const dateValue = value ? value.toDate() : null;
    setFormData({
      ...formData,
      bookingDate: dateValue as Date, // Type assertion to 'Date'
    });
  };
  

  return (
    <form
      className="my-5 flex flex-col bg-slate-100 rounded-lg  px-10 py-5 space-y-5 justify-center"
      onSubmit={handleSubmit}
    >
      <Collapse in={isOpen}>
        {isErr ? (
        <Alert severity="error"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
          Close
          </Button>
        }
        sx={{ mb: 2 }}
      >
        Room number can be in range of 1-3
      </Alert>
        ) : (
          <Alert
          action={
            <Button
              color="inherit" 
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
            Close
            </Button>
          }
          sx={{ mb: 2 }}
        >
          Booking sucess
        </Alert>
        )}

      </Collapse>
    
      <div>
          <TextField
            name="numOfRooms"
            label="Number of rooms"
            fullWidth={true}
            onChange={handleChange}
          />
      </div>
      <FormControl>
        <InputLabel>Co-working spaces</InputLabel>
        <Select
          name="coWorkingSpaceId"
          variant="outlined"
          label="Hospital"
          value={formData.coWorkingSpaceId}
          onChange={handleChange}
        >
        {coworkingspaces.data.map( (coworkingspace: Object ) => (
            <MenuItem value={coworkingspace.id}>{coworkingspace.name}</MenuItem>
        ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-transparent" onChange={handleDateChange}/>
      </LocalizationProvider>
      <Button type="submit">Reserve</Button>
    </form>
  );
}