
export default function hospitalList({hospitalName,rating,onPress}:{hospitalName:string,rating:number,onPress:Function}){
    return(
        <div 
        onClick={(e)=>
            {e.stopPropagation();
            onPress(hospitalName,0)}}
            className="w-1/5 h-[50px] p-5 bg-slate-200 flex items-center justify-between rounded-lg shadow-lg">
            <div>{hospitalName}</div>
            <div>{rating}</div>
        </div>

    )
}