import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {pickupDateState, timeState } from "@/store/atoms/details";
import { useRecoilState, useRecoilValue } from "recoil";

const generateTimes = ({selecteddate}: {selecteddate : Date | undefined}) => {
    if (!selecteddate){
        return []
    }
    const times = [];
    const time = new Date();
    console.log(time);
    
    let hour = time.getHours()
    // let minute = time.getMinutes()
    
    if(selecteddate.getDate() === time.getDate()){    
        for (let i = hour+2; i < 24; i++) {
            const formattedHour = i.toString().padStart(2, '0');
            for (let j = 0; j < 60; j+=15) {
                const formattedMinutes = j.toString().padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinutes}`)
            }
        }
    }else {
        for (let i = 0; i < 24; i++) {
            const formattedHour = i.toString().padStart(2, '0');
            for (let j = 0; j < 60; j+=15) {
                const formattedMinutes = j.toString().padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinutes}`)
            }
        }
    }
    // console.log(times);
    
    return times;
}


export function TimePicker() {
    const selecteddate = useRecoilValue(pickupDateState);
    
    // const selecteddate = date.getDate()
    const available_times = generateTimes({selecteddate});
    
    const [time,setTime] = useRecoilState<string>(timeState);
    console.log(time);
    return (
        <Select
        onValueChange={(time)=>{setTime(time)}}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a time"  />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup >
                    <SelectLabel>Available Time</SelectLabel>
                    {available_times.map((x, index) => (
                        <SelectItem key={index} value={x}>{x}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
