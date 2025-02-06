"use client"

import { createRentDetails } from "@/app/lib/actions/createRentDetails";
import { Button } from "@/components/ui/button";
import { carPricesState, CombinedRentDetailState } from "@/store/atoms/details"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Loading from "../loading";

export const SubmitDetails = () => {
    const {pickupDate,returnDate,time,fromstate,tostate,city} = useRecoilValue(CombinedRentDetailState);
    const router = useRouter();
    const setCarPrices = useSetRecoilState(carPricesState);
    const [loading,setLoading] = useState(false)
    return (
        <div>
            <Button
            onClick={async()=>{
                // add explore data maybe
                setLoading(true);
                const cars_prices =  await createRentDetails({pickupDate, returnDate,time,fromstate,tostate,city});
                console.log("Car Pricesssssss",cars_prices);
                
                setCarPrices(cars_prices);

                router.push('/select-car')
                setLoading(false);
            }}
            >
            {!loading? "Explore Cars Now" : <Loading/>}
            </Button>
        </div>
    )
}