"use client"
import { Card } from "@/components/my_ui/Card"
import { SelectedCarState } from "@/store/atoms/details"
import { Armchair, Hourglass, MapPin, MapPinCheck, Ruler } from "lucide-react"
import { useRecoilValue } from "recoil"

export const BookingDetails = () => {
    const SelectedCar = useRecoilValue(SelectedCarState);
    return (
        <div>
            <Card title="Booking Details">
                <div className="w-full max-w-[280px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="px-3 pt-3">
                        <img
                            className="w-full h-28 object-contain rounded-t-lg bg-white"
                            src={SelectedCar?.img_url || ''}
                            alt={SelectedCar?.car_name}
                        />
                    </div>
                    <div className="px-4 pb-4">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
                            {SelectedCar?.car_name}
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
                                        {SelectedCar?.seaters}
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
                                        {(SelectedCar?.distance.distance_km / 1000).toFixed()}km
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
                                        {SelectedCar?.distance.time_to_cover_hr}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-300">Per km:</span>
                                    <span className="text-gray-900 dark:text-white font-medium">₹{SelectedCar?.per_km_rate || "----"}/Km</span>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <MapPin className="mr-2 h-4 w-4 opacity-70" />
                                            <span className="text-s text-muted-foreground">From: </span>
                                        </div>
                                        <span className="text-xs dark:text-white">{SelectedCar?.distance.origin || "----"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <MapPinCheck className="mr-2 h-4 w-4 opacity-70" />
                                            <span className="text-s text-muted-foreground">TO: </span>
                                        </div>
                                        <span className="text-xs dark:text-white">{SelectedCar?.distance.destination || "----"}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    ₹{SelectedCar?.price.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------ */}


            </Card>
        </div>
    )
}