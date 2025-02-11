"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { DatePickerDemo } from "@/components/DatePicker";
import { TimePicker } from "@/components/TimePicker";
import { CitySelect } from "@/components/CitySelect";
import { StateSelect } from "@/components/StateSelect";
import { SubmitDetails } from "./SubmitDetails";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fromsatate_State,
  pickupDateState,
  returnDateState,
  tostate_State,
} from "@/store/atoms/details";
import Link from "next/link";


export function HeroSection() {
  // const router = useRouter();
  const [pickupDate, setPickupDate] = useRecoilState<Date | undefined>(pickupDateState);
  const [returnDate, setReturnDate] = useRecoilState<Date | undefined>(returnDateState);
  const [fromState, setfromState] = useRecoilState<string>(fromsatate_State);
  const [toState, settoState] = useRecoilState<string>(tostate_State);
  const fromstate = useRecoilValue(fromsatate_State);
  const tostate = useRecoilValue(tostate_State);
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-background">
      {/* Yellow background shape */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-[#FFD700] dark:bg-[#FFD700]/90 rounded-br-[100px] md:rounded-br-[200px]" />

      <div className="container relative mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white pb-4">
              Welcome to
              <span className="block">Prayag Travels</span>
            </h1>
            <Link href={'/about'} ><Button variant="outline" className="bg-background">
              Read More
            </Button>
            </Link>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-8">
              {[0, 1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-foreground" : "bg-muted-foreground"}`}
                />
              ))}
            </div>
          </div>

          {/* Booking form */}
          <Card className="w-full backdrop-blur-sm bg-background/95">
            <CardHeader>
              <CardTitle className="text-xl text-center">Outstation Booking</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="grid gap-6 pb-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* From Section */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">From</label>
                    <div>
            {!toState ? (
              <StateSelect statevalue={fromState} onStateChange={setfromState} />
            ) : (
              "Aurangabad, Maharastra"
            )}
          </div>
          <div>
            {!tostate ? <CitySelect /> : null}
          </div>
                  </div>

                  {/* To Section */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">To</label>
                    <div>
            {!fromstate ? (
              <StateSelect statevalue={toState} onStateChange={settoState} />
            ) : (
              "Aurangabad, Maharastra"
            )}
          </div>
          <div>
            {!fromstate ? <CitySelect /> : null}
          </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Pickup Date & Time */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Pickup Date</label>
                    <DatePickerDemo datevalue={pickupDate} onDateChange={setPickupDate} />
                    <TimePicker />
                  </div>

                  {/* Return Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Return Date</label>
                    <DatePickerDemo datevalue={returnDate} onDateChange={setReturnDate} />
                  </div>
                </div>

              </form>

                {/* Submit Details Section */}
                <SubmitDetails />

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}



