"use client"
import { createRentDetails } from "@/app/lib/actions/createRentDetails";
import { CarCard } from "@/components/my_ui/CarCard";
import { carPricesState, CombinedRentDetailState, SelectedCarState } from "@/store/atoms/details";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface CarDetails {
    id: number;
    car_name: string;
    img_url: string | null;
    per_km_rate: string;
    price: number;
    seaters: string;
    car_availablity: boolean | null;
    distance: {
        distance_km: any,
        time_to_cover_hr: any,
        origin: any,
        destination: any
    };
}

export default function () {
    const router = useRouter();
    const CarPrices = useRecoilValue(carPricesState);
    const SetselectedCar = useSetRecoilState(SelectedCarState);
    const handleCarSelect = (carDetails: CarDetails) => {
        SetselectedCar(carDetails)
        console.log('Selected car:', carDetails);
        router.push(`/book-now`)
    };
    console.log(CarPrices);
    if (!CarPrices){
        return <div>No Options Selected, select From ---- To Options
            {/* <button onClick={()=>{router.push(`/book-now`)}}>click</button> */}
        </div>
    }

    // const carCards = [];

    // for (let i = 0; i < 10; i++) {
    //     carCards.push(
    //         <div className="flex pb-6">
    //             <CarCard
    //                 id={i}
    //                 car_name="Toyota Innova Crysta"
    //                 img_url="https://www.savaari.com/assets/img/cars/Savaari-Ertiga-Cab.jpg"
    //                 per_km_rate="₹15"
    //                 price={2500}
    //                 seaters="6 + 1"
    //                 distance={{
    //                     distance_km: 200000,
    //                     time_to_cover_hr: "1 hr 20 mins",
    //                     origin: "Aurangabad, Maharastra",
    //                     destination: "Pune, Maharastra"
    //                 }}
    //                 car_availablity={true}
    //             onSelect={handleCarSelect}
    //         />
    //         </div>
    //     )
    // }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {CarPrices?.map((car, index) => (
                <div className="flex pb-6">
                <CarCard
                    key={index}
                    id={car.id}
                    car_name={car.car_name}
                    img_url={car.img_url}
                    per_km_rate={car.per_km_rate}
                    price={car.price}
                    seaters={car.seaters}
                    distance={car.distance}
                    car_availablity={car.car_availablity}
                    onSelect={handleCarSelect} // Ensure onSelect is defined in your scope
                    />
                    </div>
            ))}

            {/* {carCards} */}

        </div>
    )
}


