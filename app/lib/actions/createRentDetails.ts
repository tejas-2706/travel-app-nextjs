"use server"
import db from "../../../lib/prisma"
import { getServerSession } from "next-auth"
import { autthOptions } from "../auth"
import axios from "axios"

interface RentDetails {
    pickupDate : Date | undefined,
    returnDate: Date | undefined ,
    time : string,
    fromstate : string,
    tostate : string,
    city : string
}

interface LocationDetails {
    fromstate: string,
    tostate: string,
    city: string
}

export const UseUrl = ({ fromstate, tostate, city }: LocationDetails) => {
    let url: string;
    if (!fromstate) {
        url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=Aurangabad,Maharashtra&destinations=${encodeURIComponent(city)},${encodeURIComponent(tostate)}&key=${encodeURIComponent(process.env.DISTANCE_MATRIX_API || '')}`;
    } else {
        url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(city)},${encodeURIComponent(fromstate)}&destinations=Aurangabad,Maharashtra&key=${encodeURIComponent(process.env.DISTANCE_MATRIX_API || '')}`;
    }
    return url;
};


export const CalculateDistance = async( {fromstate,tostate,city} : LocationDetails ) => {
    const url = await UseUrl({fromstate,tostate,city});
    const response = await axios.get(url);
    const details = (response.data as any).rows[0].elements[0];
    const distance_km = details.distance.value;
    const time_to_cover_hr = details.duration.text;
    const origin = details.origin;
    const destination = details.destination;
    return {
        distance_km,
        time_to_cover_hr,
        origin,
        destination
    }
}

export const CalculatePriceRoundTrip = async (per_km_rate : string, distance : number) => {
    const distance_value = (distance/1000).toFixed(); // meters to km
    console.log(distance_value);
    const total_distance = Number(distance_value) * 2;
    // console.log(total_distance);
    const km_rate = Number(per_km_rate);
    // console.log(km_rate);
    return total_distance*km_rate;
}

export const createRentDetails = async({pickupDate,returnDate,time,fromstate,tostate,city} : RentDetails) => {
    // const session = await getServerSession(autthOptions);
    if (!pickupDate || !returnDate){
        console.error("🚨 Error: Pickup and Return Date are required!");
        return;
    }
    console.log(pickupDate.toLocaleString('en-IN'),returnDate.toLocaleString('en-IN'),time,fromstate,tostate,city);
    const distance  = await CalculateDistance( {fromstate,tostate,city} )
    console.log("Distance" + distance.distance_km, distance.time_to_cover_hr,distance.origin,distance.destination);
    // console.log("Distance" + ((distance.distance_km)/1000).toFixed());

    const cars = await db.car.findMany({
        where: {
            car_availablity: true
        }
    })

    const prices = await Promise.all(cars.map(async(car) => {
        const price = await CalculatePriceRoundTrip(car.per_km_rate,distance.distance_km);
        return {
            ...car,
            price,
            distance
        }
    }));
    
    console.log(prices);
    return prices; // array to display ready on frontend
}

