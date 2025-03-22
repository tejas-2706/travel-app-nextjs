"use client"
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const UserAuth = () => {
    const session = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    if (!session.data?.user) {
        return <div>
            <Button onClick={async () => {
                await signIn();
            }}>Signin
            </Button>
        </div>
    } else {
        return <div>
            {/* <Button onClick={async () => {
                await signOut();
            }}>Signout
            </Button> */}
            <div className="relative">
                <Image className="rounded-full cursor-pointer"
                    src={session.data.user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                    width={36}
                    height={36}
                    alt=""
                    onClick={async () => {
                        toggleDropdown()
                    }} />
            </div>
            {isDropdownOpen && (
                <div className="absolute right-50 mt-2 dark:bg-black bg-white border border-gray-800 rounded-lg shadow-lg z-10 w-max">
                    <ul className="py-2">
                        <li className="px-4 py-2 border-b border-gray-700 break-all w-max">{session.data.user.email}</li>
                        <li className="px-4 py-2 border-b border-gray-700 hover:underline"><Link onClick={toggleDropdown} href={'/profile'}>Profile</Link></li>
                        <li className="py-2">
                            <Button variant={"link"} onClick={async () => {
                                toggleDropdown
                                await signOut();
                            }}>Signout
                            </Button>
                            {/* <button
                            onClick={()=>{signOut()}}
                                className="w-full text-left text-black py-2 rounded-md hover:bg-slate-200 transition-colors duration-200"
                            >
                                Sign Out
                            </button> */}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    }
}