"use client"

import { createRentDetails } from "@/app/lib/actions/createRentDetails";
import { Button } from "@/components/ui/button";
import { carPricesState, CombinedRentDetailState } from "@/store/atoms/details"
// import { useRouter } from "";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"
import Loading from "../loading";
import { useRouter } from "next/navigation";

export const SubmitDetails = () => {
    const {pickupDate,returnDate,time,fromstate,tostate,city} = useRecoilValue(CombinedRentDetailState);
    const router = useRouter();
    const setCarPrices = useSetRecoilState(carPricesState);
    const [loading,setLoading] = useState(false)
    return (
        <div>
            <Button className="w-full bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90 dark:text-gray-900"
            onClick={async()=>{
                // // add explore data maybe
                try {
                    setLoading(true);
                    const cars_prices = await createRentDetails({ pickupDate, returnDate, time, fromstate, tostate, city });
                    setCarPrices(cars_prices);
                    router.push('/select-car'); // Navigate after successful data fetch
                } catch (error) {
                    console.error("Error fetching car prices:", error);
                } finally {
                    setLoading(false);
                }
            }}
            >
            {!loading? "Explore Cars Now" : <Loading/>}
            </Button>
        </div>
    )
}
