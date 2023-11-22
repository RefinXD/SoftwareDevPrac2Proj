
export default function BookingLayout(
    {children,newbooking,userdata}: {children:React.ReactNode,newbooking: React.ReactNode,userdata: React.ReactNode}){
        return(
            <div className="flex flex-col w-full">
                {children}
                {userdata}
                {newbooking}
            </div>
        );
}