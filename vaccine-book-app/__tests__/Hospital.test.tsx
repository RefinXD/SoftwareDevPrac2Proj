import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
import TopMenuItem from "@/components/TopMenuItem"
import HospitalCatalog from "@/components/hospitalCatalog"
import { render, screen, waitFor } from "@testing-library/react"

const mockResult = {
    success: true,
    count: 4,
    data:[
        {"_id":{"$oid":"652797b25de0423939ceba80"},"name":"Chulalongkorn Hospital","address":"1873 Rama IV Rd","district":"Pathum Wan","province":"Bangkok","postalcode":"10330","tel":"026494000","picture":"https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"652797f55de0423939ceba83"},"name":"Rajavithi Hospital","address":"2 Phaya Thai Rd, Thung Phaya Thai","district":"Ratchathewi","province":"Bangkok","postalcode":"10400","tel":"022062900","picture":"https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"652798325de0423939ceba86"},"name":"Thammasat University Hospital","address":"95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng","district":"Khlong Luang","province":"Pathum Thani","postalcode":"12120","tel":"029269999","picture":"https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"6543d30cdb3913b1e01f28a6"},"name":"Vajira Hospital","address":"681 Samsen Road","district":"Dusit","province":"Bangkok","postalcode":"10300","tel":"02-244-3000","picture":"https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP","__v":{"$numberInt":"0"}}
    ]
}
describe('HospitalCatalog', ()=>{
    it('should have correct number of hospital image', async ()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson:mockResult})
        render(hospitalCatalog)
        await waitFor(
            ()=>{
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(4)
            }
        )
    })
})