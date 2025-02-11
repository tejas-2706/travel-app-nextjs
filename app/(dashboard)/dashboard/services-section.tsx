import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CarTaxiFrontIcon as Taxi, Plane, Briefcase } from "lucide-react"

const services = [
  {
    icon: <Taxi className="w-12 h-12 text-[#FFD700]" />,
    title: "Private Driver",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <Plane className="w-12 h-12 text-[#FFD700]" />,
    title: "Airport Transfer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-[#FFD700]" />,
    title: "Luggage Transfer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]

export function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16">
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

