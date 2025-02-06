import { atom, selector } from "recoil";

interface CarDetails {
    id: number;
    car_name: string;
    img_url: string | null;
    per_km_rate: string;
    price: number;
    seaters: string;
    car_availablity: boolean | null;
    distance: { 
        distance_km: any,
        time_to_cover_hr: any,
        origin : any, 
        destination : any
    };
}

export const pickupDateState = atom<Date | undefined>({
    key: 'pickupDateState',
    default:undefined
});

export const returnDateState = atom<Date | undefined>({
    key: 'returnDateState',
    default:undefined
});

export const timeState = atom<string>({
    key: 'timeState',
    default:''
});

export const fromsatate_State = atom<string>({
    key: 'fromsatate_State',
    default:''
});

export const tostate_State = atom<string>({
    key: 'tostate_State',
    default:''
});

export const cityState = atom<string>({
    key: 'cityState',
    default:''
});

export const carPricesState = atom<CarDetails[] | undefined>({
    key: 'carPricesState',
    default: undefined
});

export const SelectedCarState = atom<CarDetails | undefined>({
    key: 'SelectedCarState',
    default: undefined
})

export const CombinedRentDetailState = selector({
    key: 'CombinedRentDetailState',
    get: ({get}) => {
        const pickupDate = get(pickupDateState);
        const returnDate = get(returnDateState);
        const time = get(timeState);
        const fromstate = get(fromsatate_State);
        const tostate = get(tostate_State);
        const city = get(cityState);

        return {
            pickupDate,
            returnDate,
            time,
            fromstate,
            tostate,
            city
        };
    }
});