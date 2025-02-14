import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CarTaxiFrontIcon as Taxi, Plane, Briefcase, ArrowRightCircle, MapPin } from "lucide-react"

const services = [
  {
    icon: <Taxi className="w-12 h-12 text-[#FFD700]" />,
    title: "Local Car Rental",
    description: "Efficient local rentals for daily commutes.",
  },
  {
    icon: <Plane className="w-12 h-12 text-[#FFD700]" />,
    title: "Airport Taxi",
    description: "Timely rides to and from the airport.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-[#FFD700]" />,
    title: "Outstation Taxi",
    description: "Reliable taxi service for long-distance journeys.",
  },
  {
    icon: <ArrowRightCircle className="w-12 h-12 text-[#FFD700]" />,
    title: "One-Way Booking",
    description: "Flexible one-way rides for your convenience.",
  },
  {
    icon: <Taxi className="w-12 h-12 text-[#FFD700]" />,
    title: "Corporate Car Rental",
    description: "Premium rentals tailored for corporate travel.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-[#FFD700]" />,
    title: "Luggage Transfer",
    description: "Safe and secure luggage transfer services.",
  },
];

export function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16" id="services">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our
          <span className="block">Taxi Services</span>
        </h2>
        <div className="w-16 h-1 bg-[#FFD700] mx-auto" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

