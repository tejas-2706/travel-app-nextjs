// "use client"
// import { DatePickerDemo } from "@/components/DatePicker";
// import { TimePicker } from "@/components/TimePicker";
// import { CitySelect } from "@/components/CitySelect";
// import { StateSelect } from "@/components/StateSelect";
// import { SubmitDetails } from "./SubmitDetails";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { fromsatate_State, pickupDateState, returnDateState, tostate_State } from "@/store/atoms/details";
// import { Card } from "@/components/my_ui/Card";
// import { Center } from "@/components/my_ui/Center";

// export const RentDetails = () => {
//     const [pickupDate, setPickupDate] = useRecoilState<Date | undefined>(pickupDateState);
//     const [returnDate, setReturnDate] = useRecoilState<Date | undefined>(returnDateState);
//     const [fromState, setfromState] = useRecoilState<string>(fromsatate_State);
//     const [toState, settoState] = useRecoilState<string>(tostate_State);

//     const fromstate = useRecoilValue(fromsatate_State)
//     const tostate = useRecoilValue(tostate_State)
//     console.log("Pickup Date" + pickupDate);

//     return (
//         <div className="flex flex-col justify-between items-center gap-10">
//             <Card title="Outstation">
//                 <div className="flex gap-4">
//                     <div>
//                         <label htmlFor="">Pickup Date</label>
//                         <DatePickerDemo datevalue={pickupDate} onDateChange={setPickupDate} />
//                     </div>
//                     <label htmlFor="">From</label>
//                     <div>
//                         {!toState ? <StateSelect statevalue={fromState} onStateChange={setfromState} /> : "Aurangabad, Maharastra"}
//                     </div>
//                     <div>
//                         {!tostate ? <CitySelect /> : null}
//                     </div>
//                     <label htmlFor="">Pickup Time</label>
//                     <div>
//                         <TimePicker />
//                     </div>
//                 </div>

//                 <div className="flex gap-4">
//                     <div>
//                         <label htmlFor="">Return Date</label>
//                         <DatePickerDemo datevalue={returnDate} onDateChange={setReturnDate} />
//                     </div>
//                     <label htmlFor="">TO</label>
//                     <div>
//                         {!fromstate ? <StateSelect statevalue={tostate} onStateChange={settoState} /> : "Aurangabad, Maharastra"}
//                     </div>
//                     <div>
//                         {!fromstate ? <CitySelect /> : null}
//                     </div>
//                 </div>
//                 <Center>
//                     <SubmitDetails />
//                 </Center>

//             </Card>
//         </div>
//     )
// }






"use client";
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

export const RentDetails = () => {
  const [pickupDate, setPickupDate] = useRecoilState<Date | undefined>(
    pickupDateState
  );
  const [returnDate, setReturnDate] = useRecoilState<Date | undefined>(
    returnDateState
  );
  const [fromState, setfromState] = useRecoilState<string>(fromsatate_State);
  const [toState, settoState] = useRecoilState<string>(tostate_State);

  const fromstate = useRecoilValue(fromsatate_State);
  const tostate = useRecoilValue(tostate_State);
  console.log("Pickup Date: " + pickupDate);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Outstation Booking</h2>
      
      {/* Horizontal layout on wider screens, vertical on small */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        
        {/* From Section */}
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="from-state" className="font-medium">
            From
          </label>
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
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="to-state" className="font-medium">
            To
          </label>
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
        
        {/* Pickup Date & Time Section */}
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="pickup-date" className="font-medium">
            Pickup Date
          </label>
          <DatePickerDemo datevalue={pickupDate} onDateChange={setPickupDate} />
          {/* <label htmlFor="pickup-time" className="font-medium mt-2">
            Pickup Time
          </label> */}
          <TimePicker />
        </div>
        
        {/* Return Date Section */}
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="return-date" className="font-medium">
            Return Date
          </label>
          <DatePickerDemo datevalue={returnDate} onDateChange={setReturnDate} />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <SubmitDetails />
      </div>
    </div>
  );
};
