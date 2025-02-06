"use client"
import { ContactDetails } from "./ContactDetails"
import { BookingDetails } from "./BookingDetails"

export default function () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
            <div>
                <ContactDetails />
            </div>
            <div>
                <BookingDetails />
            </div>
        </div>
    )
}