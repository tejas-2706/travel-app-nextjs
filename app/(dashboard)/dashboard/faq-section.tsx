import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
    return (
        <div id="faq">
            <div>
                <div className="space-y-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="block">FAQ's</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#FFD700] mx-auto" />
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full flex flex-col container mx-auto px-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How do I book a ride?</AccordionTrigger>
                    <AccordionContent>
                        You can easily book a ride through our website. Just select the service you need, provide your pickup and drop-off details, and confirm your booking.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>What services do you offer?</AccordionTrigger>
                    <AccordionContent>
                        We offer a variety of services including Local Car Rental, Airport Taxi, Outstation Taxi, One-Way Booking, Corporate Car Rental, and Luggage Transfer. Each service is designed to cater to your travel needs in and around Aurangabad.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Do your rides include drivers?</AccordionTrigger>
                    <AccordionContent>
                        Yes, every ride comes with a professional, experienced driver. This ensures you have a safe and comfortable journey no matter which service you choose.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>How do I pay for my ride?</AccordionTrigger>
                    <AccordionContent>
                        You can pay using multiple methods including cash, UPI, credit/debit cards, or through our secure online payment system during the booking process.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>What if my travel plans change?</AccordionTrigger>
                    <AccordionContent>
                        You can modify or cancel your booking via our customer support portal. Please review our cancellation policy for any applicable fees.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>Are your vehicles well-maintained and safe?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! We ensure all our vehicles are regularly serviced, thoroughly cleaned, and maintained to provide you with a safe and comfortable ride.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>How far in advance can I book a ride?</AccordionTrigger>
                    <AccordionContent>
                        You can book your ride up to 30 days in advance via our website or mobile app.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>Do you operate only in Aurangabad?</AccordionTrigger>
                    <AccordionContent>
                        While our services are centered in Aurangabad, we offer both local and outstation rides, ensuring you can travel from Aurangabad to any destination and vice versa.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                    <AccordionTrigger>Is there a discount for corporate bookings?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we offer special rates for corporate car rentals. Please contact our support team for more information on corporate discounts.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                    <AccordionTrigger>What should I do if I lose something during my ride?</AccordionTrigger>
                    <AccordionContent>
                        If you lose an item during your ride, please contact our customer support immediately. We have procedures in place to help locate and return lost belongings.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}