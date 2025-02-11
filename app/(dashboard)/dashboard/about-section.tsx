import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
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
          Welcome to Prayag Travels, your trusted partner for premium travel services in and around Aurangabad.
          </p>
          <Link href={'/about'}><Button variant="outline">Read More</Button></Link>
        </div>

        {/* Image card */}
        <Card className="bg-white dark:bg-black p-6 rounded-lg overflow-hidden shadow-md shadow-gray-600 dark:shadow-white">
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

