import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRecoilState } from "recoil"
// import { countrystate_State } from "@/store/atoms/details"
import { useEffect, useState } from "react"


export const getStates = async() => {
    const data = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Set the content type to JSON
        },
        body: JSON.stringify({
            country: "india"
        })
    })
    const response = await data.json()
    const states = response.data.states.map( (state : {name:string} ) => state.name)
    return states
  }

export function StateSelect( {statevalue , onStateChange} : {statevalue : string , onStateChange : (state : string) => void}){
    // const [state,setState] = useRecoilState<string>(countrystate_State);
    const [state,setState] = useState<string>(statevalue);
    useEffect(() => {
        if (state) {
            onStateChange(state);
        }
      }, [state, onStateChange]);

    const [countryStates, setCountryStates] = useState<string[]>([]);
    // console.log(state);
    
    useEffect(() => {
        const fetchData = async() => {
          const country_states = await getStates();
          setCountryStates(country_states)
      };
      fetchData();
    }, [])
    


    return (
        <Select
        onValueChange={(s)=>{setState(s)}}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select State"  />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup >
                    <SelectLabel>States</SelectLabel>
                    {countryStates.map((s : string, index:any) => (
                        <SelectItem key={index} value={s}>{s}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}