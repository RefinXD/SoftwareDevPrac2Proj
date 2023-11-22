'use client'
import ProductCard from '@/components/ProductCard'
import { useReducer } from 'react'
import HospitalList from './hospitalList';
import Link from 'next/link';


const data = [
    {"hid":"1",
     "name":"Chula",
     "imgSrc":"/img/chula.jpg"},
    {"hid":"2",
     "name":"Rajavithi",
     "imgSrc":"/img/rajavithi.jpg"},
    {"hid":"3",
     "name":"Thammasat",
     "imgSrc":"/img/thammasat.jpg"}
]

export default function CardPanel(){

    const mapReducer = (scoreMap:Map<string,number>,action:{type:string,target:string,value:number}) : Map<string,number> => {
        switch(action.type){
            case 'update':{
                return new Map(scoreMap.set(action.target,action.value))
            }
            case 'delete':{
                scoreMap.delete(action.target)
                return new Map(scoreMap)
            }
            default: return scoreMap
        }
    }
    function checkZero(value:any):number{
        if (value == null){return 0}
        else return value;
    }
    const [scoreMap,dispatchUpdate] = useReducer(mapReducer,new Map<string,number>())

    return(
        <div className ="margin:20px w-full h-[70%] relative rounded-t-lg">
            <div style={{margin:"20px",display:"flex",
            flexDirection:"row",alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap",padding:"10px"}}>
            
                {data.map((dataItem) =>(
                    <Link className="w-1/5 h-[300px] rounded-lg shadow-lg" href={`/hospital/${dataItem.hid}`}>
                        <ProductCard key = {dataItem.hid} hospitalName = {dataItem.name} imgSrc={dataItem.imgSrc} 
                        rating={checkZero(scoreMap.get(dataItem.name))}
                    onChange={(hospitalName:string,newValue:number) =>
                    dispatchUpdate({type:'update',target:hospitalName,value:newValue})} 
                    />
                </Link>
                ))}
            </div>
            
            <div className =" m-24 p-5 space-y-10 w-full h-full relative rounded-t-lg">
                {data.map((dataItem) =>(
                    <HospitalList hospitalName={dataItem.name} rating={checkZero(scoreMap.get(dataItem.name))} 
                    onPress={(hospitalName:string,newValue:number) =>
                        dispatchUpdate({type:'delete',target:hospitalName,value:newValue})}/>
                ))}
            </div>
        
        </div>
    )
}