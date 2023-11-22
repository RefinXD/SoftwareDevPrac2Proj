import Link from "next/link"
import ProductCard from "./ProductCard"

export default function HospitalCatalog({hospitalJson}:{hospitalJson:Object}){
    console.log(hospitalJson)
    return(
    
        <>
        {/* Explore our selection of {hospitalJson.count} hospitals */}
        <div id="imagediv" style={{margin:"20px",display:"flex",
            flexDirection:"row",alignContent:"space-around",
            justifyContent:"space-around",flexWrap:"wrap",padding:"10px"}}>
                {hospitalJson.data.map((dataItem) =>(
                    
                    <Link className="w-1/5 h-[300px] rounded-lg shadow-lg" href={`/hospital/${dataItem.id}`}>
                        <ProductCard key = {dataItem.id} hospitalName = {dataItem.name} imgSrc={dataItem.picture}/>
                </Link>
                ))}
            </div>
        </>
    )
}