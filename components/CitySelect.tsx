import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRecoilState, useRecoilValue } from "recoil"
import { cityState, fromsatate_State, tostate_State } from "@/store/atoms/details"
import { useEffect, useState } from "react"


export const getCities = async( {state} : {state : string} ) => {
    const data = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Set the content type to JSON
        },
        body: JSON.stringify({
            country: "india",
            state: `${state}`
        })
    })
    const response = await data.json()
    
    return response.data || []
}



export function CitySelect() {
    const [stateCities, setStateCities] = useState<string[]>([]);
    const [city,setCity] = useRecoilState<string>(cityState);
    const fromstate = useRecoilValue(fromsatate_State)
    const tostate = useRecoilValue(tostate_State)
    console.log(city);
    
    useEffect(()=>{
        const fetchData = async() => {
            if(!tostate){
                const state_cities = await getCities({state : fromstate})
                setStateCities(state_cities);
            }else {
                const state_cities = await getCities({state : tostate})
                setStateCities(state_cities);
            }
        }
        fetchData();
    },[fromstate,tostate])
    return (
        <Select
        onValueChange={(c)=>{setCity(c)}}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select City"  />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup >
                    <SelectLabel>Cities</SelectLabel>
                    {stateCities.map((c : string, index : any) => (
                        <SelectItem key={index} value={c}>{c}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
