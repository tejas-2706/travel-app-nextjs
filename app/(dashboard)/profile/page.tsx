"use client"
import { Card } from "@/components/my_ui/Card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import axios from "axios";
const FormSchema = z.object({
    // username: z.string().min(2, {
    //     message: "Username must be at least 2 characters.",
    // }),
    // email: z.string().email({
    //     message: "Enter Correct Email Id",
    // }),
    username: z.string().optional(),
    email: z.string().optional(),
    mobile: z.string().min(10, { message: 'Must be a valid mobile number' }).max(10, { message: 'Must be a valid mobile number' }),
})

export default function () {
    const session = useSession();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            mobile: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(session.data?.user?.email);
        
        const UpdateDetails = await axios.put(`/api/user/${session.data?.user?.email}`, data);
        if(!UpdateDetails){
            toast({
                variant: "destructive",
                title: "No Car Selected",
                description: "Select a Car Before Confirmation of Booking!!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        toast({
            title: "Your Profile is Updated Successfully!!",
            description: (
              <div className="">
                  Updated, Refresh Page!!
              </div>
            ),
            variant:"cool"
          });
      }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-16 gap-6">
            <div className="container mx-auto w-1/2">
                <Card title="Profile" >
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="font-bold text-3xl">{session.data?.user?.name}</h2>
                        <img className="rounded-full cursor-pointer w-1/2 p-2"
                            src={session.data?.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                            width={36}
                            alt=""
                        />
                        <Button>
                            Upload New Photo
                        </Button>
                    </div>
                </Card>
            </div>
            <Card title="Edit Profile">
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
                                        disabled
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
                                        disabled    
                                        type="email"
                                        // value={session.data?.user?.email}
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
                        <Button type="submit">Update Details</Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}