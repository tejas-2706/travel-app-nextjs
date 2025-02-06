"use client"
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@/components/theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <RecoilRoot>
        <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            </ThemeProvider>
        </SessionProvider>
    </RecoilRoot>
}

