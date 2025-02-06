"use client"
import Image from "next/image"
import { RentDetails } from "./RentDetails"

import car from "../../../public/car.png"
import { Button } from "@/components/ui/button"
export const Hero = () => {
    return (
        <div>
            <RentDetails/>
            <div className="relative pb-32 flex content-center items-center justify-center min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold leading-tight mb-6">
                                Buy, sell & rent <span className="text-red-500">reputable cars</span>
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Buy and sell reputable cars. Renting a car is easy and fast with Topcar
                            </p>

                            <div className="flex gap-8 mb-12">
                                <div>
                                    <h3 className="text-3xl font-bold">50+</h3>
                                    <p className="text-gray-600">Car brands</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold">10k+</h3>
                                    <p className="text-gray-600">Clients</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="inline-flex rounded-md shadow-sm gap-2" role="group">
                                    <Button>
                                        Rent One Way car
                                    </Button>
                                    <Button>
                                        Rent Outstation car
                                    </Button>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <RentDetails/> */}
                        <div className="relative h-[400px] md:h-[600px]">
                            <Image
                                src={car}
                                alt="Red luxury sports car"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

