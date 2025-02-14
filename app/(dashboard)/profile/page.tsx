"use client"
import { Card } from "@/components/my_ui/Card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function () {
    const session = useSession();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-16 gap-6">
            <div className="flex w-1/3 justify-end">
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
                hello
            </Card>
        </div>
    )
}