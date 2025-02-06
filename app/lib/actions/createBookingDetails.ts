"use server"
import db from "@/lib/prisma"
interface BookingData {
    username: string,
    email: string,
    mobile:string,
    pickup?:string,
    drop?:string
}

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
        origin : any, 
        destination : any
    };
}

export const createBookingDetails = async(data:BookingData,SelectedCar:CarDetails,pickupDate?:Date,returnDate?:Date,pickuptime?:string) => {
    const {email,username,mobile} = data;
    const exact_pickup = `${data.pickup}, ${SelectedCar.distance.origin}`
    const exact_drop = `${data.drop}, ${SelectedCar.distance.destination}`
    let user = await db.user.findUnique({
        where : {email}
    })
    if (!user){
        user = await db.user.create({
            data : {
                name: username,
                email: email,
                number:mobile,
                password: ""
            }
        });
    }

    const overlappingBooking = await db.booking.findFirst({
        where:{
            carId: SelectedCar.id,
            NOT: {
                OR : [
                    {returnDate: {lte:pickupDate}},
                    {pickupDate: {gte:returnDate}}
                ]
            }
        }
    })

    if (overlappingBooking) {
        throw new Error("Selected car is not available for the requested time period.");
    }

    const booking = await db.booking.create({
        data : {
            userId: user.id,
            carId: SelectedCar.id,
            pickup: exact_pickup,
            drop: exact_drop,
            pickupDate: pickupDate || "",
            returnDate: returnDate || "",
            time:pickuptime || "",
            distance_km:(SelectedCar.distance.distance_km/1000).toFixed(),
            price:SelectedCar.price
        }
    })
    if (booking){
        console.log("Booking Confirm!!");
        return {
            message: "Booking Confirmed"
        }
    }
}