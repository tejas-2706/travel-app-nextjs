"use client"
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
export const UserAuth = () => {
    const session = useSession();
    if (!session.data?.user) {
        return <div>
            <Button onClick={async () => {
                await signIn();
            }}>Signin
            </Button>
        </div>
    } else {
        return <div>
            <Button onClick={async () => {
                await signOut();
            }}>Signout
            </Button>
        </div>
    }
}