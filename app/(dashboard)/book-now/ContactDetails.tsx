"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/my_ui/Card"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "../../../hooks/use-toast"
import { createBookingDetails } from "@/app/lib/actions/createBookingDetails"
import { ToastAction } from "@/components/ui/toast"
import { useRecoilValue } from "recoil"
import { pickupDateState, returnDateState, SelectedCarState, timeState } from "@/store/atoms/details"


const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email( {
      message: "Enter Correct Email Id",
    }),
    mobile: z.string().min(10, { message: 'Must be a valid mobile number' }).max(10, { message: 'Must be a valid mobile number' }),
    pickup: z.string().optional(),
    drop: z.string().optional()
  })


export const ContactDetails = () => {
    const session = useSession();
    const SelectedCar = useRecoilValue(SelectedCarState)
    const pickupDate = useRecoilValue(pickupDateState);
    const returnDate = useRecoilValue(returnDateState);
    const pickuptime = useRecoilValue(timeState);
    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
          email: "",
          mobile:"",
          pickup:"",
          drop:""
        },
      })
      useEffect(() => {
        if (session.data?.user?.name || session.data?.user?.email) {
          form.setValue("username", session.data.user.name || "")
          form.setValue("email", session.data.user.email || "")
        }
      }, [session.data?.user?.name]);

      async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Your In" + data.email,data.username);
        if (!SelectedCar){
            toast({
                variant: "destructive",
                title: "No Car Selected",
                description: "Select a Car Before Confirmation of Booking!!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
            return {
                message: "Car not selected"       
            }
        }
        if (!session.data?.user){
            console.log("Signup/Login Before Booking");
            toast({
                variant: "destructive",
                title: "Signup/Signin",
                description: "Please Signin Before Confirmation of Booking!!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        const booking_db = await createBookingDetails(data, SelectedCar, pickupDate, returnDate, pickuptime)
        if(booking_db){
            toast({
              title: "Your Booking is Confirmed!!",
              description: (
                <div className="">
                    We will Contact you ASAP!!
                </div>
              ),
              variant:"cool"
            });
        }else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
      }
    return (
        <div>
            <Card title="Contact Details">
                
                {/* {JSON.stringify(Name)} */}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Name" {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Email" {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Enter Valid Email Id for Contact
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Mobile No. 10 digits" {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Don't need to enter +91 / Supports IN no. only 
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pickup"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pickup <span className="font-mono text-gray-400">(optional)</span></FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Enter Your Exact pickup address" {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {`Enter Your ${SelectedCar?.distance.origin} pickup Address`} 
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="drop"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Drop <span className="font-mono text-gray-400">(optional)</span></FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Enter Your Exact Drop Address" {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                    {`Enter Your ${SelectedCar?.distance.destination} Drop Address`} 
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Book Now</Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}