import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "../ui/button";
import { Armchair, Hourglass, MapPin, MapPinCheck, Ruler } from "lucide-react";


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

export const CarCard = ({
    id,
    car_name,
    img_url,
    per_km_rate,
    price,
    seaters,
    car_availablity,
    distance,
    onSelect
}: CarDetails & { onSelect: (carDetails: CarDetails) => void }) => {
    return (
        <div className="w-full max-w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-black dark:border-gray-600 hover:shadow-lg transition-shadow">
            <div className="px-3 pt-3">
                <img
                    className="w-full h-28 object-contain rounded-t-lg bg-white"
                    src={img_url || ''}
                    alt={car_name}
                />
            </div>
            <div className="px-4 pb-4">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
                    {car_name}
                </h5>

                <div className="mt-3 mb-3">
                    <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex">
                                <Armchair className="mr-1 h -4 w-4 opacity-70" />
                                <span className="text-gray-500 dark:text-gray-300">
                                    Seating:
                                </span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                                {seaters}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex">
                                <Ruler className="mr-1 h -4 w-4 opacity-70" />
                                <span className="text-gray-500 dark:text-gray-300">
                                    Distance:
                                </span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                                {(distance.distance_km / 1000).toFixed()}km
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                        <div className="flex">
                                <Hourglass className="mr-1 h -4 w-4 opacity-70" />
                                <span className="text-gray-500 dark:text-gray-300">
                                    Travel time:
                                </span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                                {distance.time_to_cover_hr}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ₹{price.toLocaleString()}
                        </span>
                    </div>
                    <Button
                        onClick={() => onSelect({ id, car_name, img_url, per_km_rate, price, seaters, distance, car_availablity })}
                    // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
                    >
                        Select
                    </Button>
                </div>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button className="pl-0 underline" variant={"link"}>more details</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div>
                            <span>Per km:</span>
                            <span className="font-medium">{per_km_rate}</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <MapPin className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-muted-foreground">From: </span>
                                <span className="text-xs text-gray-300">{distance.origin}</span>
                            </div>
                            <div className="flex">
                                <MapPinCheck className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-muted-foreground">To: </span>
                                <span className="text-xs text-gray-300">{distance.destination}</span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    );
};
