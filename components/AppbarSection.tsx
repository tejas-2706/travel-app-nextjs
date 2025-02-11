"use client"
import { ModeToggle } from "./my_ui/ModeToggle";
import { UserAuth } from "./UserAuth"
import logo from "../public/logo.png"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export const Appbar = () => {
    return (
        <div className="flex justify-around border p-4 shadow-md">
            <ul className="flex gap-2">
                <div className="relative ">
                <Link href={'/dashboard'}><Image className="" src={logo} alt="logo" width={30} /></Link>
                </div>
                {/* <div className="text-2xl font-bold px-4 rounded-lg">Travel App </div> */}
                <Link href={'/book-now'} ><Button variant={"link"}>Book Now</Button></Link>
                <Link href={'/about'} ><Button variant={"link"}>About</Button></Link>
            </ul>
            <div className="flex gap-4">
                <UserAuth />
                <ModeToggle />
            </div>
        </div>
    )
}