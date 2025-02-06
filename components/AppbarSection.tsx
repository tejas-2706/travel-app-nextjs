"use client"
import { ModeToggle } from "./my_ui/ModeToggle";
import { UserAuth } from "./UserAuth"
import logo from "../public/logo.png"

import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Appbar = () => {
    return (
        <div className="flex justify-around border p-4 shadow-md">
            <ul className="flex gap-2">
                <div className="relative ">
                <Image className="" src={logo} alt="logo" width={30} />
                </div>
                {/* <div className="text-2xl font-bold px-4 rounded-lg">Travel App </div> */}
                <div><Button variant={"link"}>Book Now</Button></div>
                <div><Button variant={"link"}>About</Button></div>
            </ul>
            <div className="flex gap-4">
                <UserAuth />
                <ModeToggle />
            </div>
        </div>
    )
}