import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function () {
    return (
        <div className="container mx-auto px-4 py-16 ">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* Text content */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            About
                            <span className="block">Prayag Travels</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#FFD700]" />
                    </div>
                    <p className="text-gray-600">
                        Welcome to Prayag Travels, your trusted partner for premium travel services in and around Aurangabad. We specialize in providing high-quality car rental services and outstation travel with professional drivers, ensuring you enjoy a comfortable and hassle-free journey every time.

                        Whether you're planning a scenic getaway from Aurangabad to any destination or need a reliable ride to bring you back home, we have you covered. Our modern fleet of well-maintained vehicles and experienced drivers are at your service, ready to take you wherever you need to go.

                        At Prayag Travels, we believe that travel should be enjoyable, safe, and stress-free. That's why we focus on punctuality, customer care, and personalized service to make every trip memorable. Our mission is to redefine your travel experience by combining comfort with convenience—giving you the freedom to explore without worrying about the road ahead.

                        Join us on the journey and discover a new way to travel from Aurangabad—where every ride is a promise of reliability and excellence.
                    </p>
                    {/* <Button variant="outline">Read More</Button> */}
                </div>

                {/* Image card */}
                <Card className="bg-gray-900 p-6 rounded-lg overflow-hidden">
                    <Image
                        src={"/innova.png"}
                        alt="Yellow Taxi"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded"
                    />
                </Card>
            </div>
        </div>
    )
}

