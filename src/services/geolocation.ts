import {apiFetch} from "@/services/api";
import {GEOLOCATION_BASE_URL} from "@/services/constants";

export const getGeolocation = async () => {
    return await apiFetch<GeolocationType>(`/ipgeo`, {
        baseUrl: GEOLOCATION_BASE_URL,
        searchParams: {

            apiKey: process.env.GEOLOCATION_API_KEY,
        },
    });
}

type GeolocationType = {
    state_code: string;
    city: string;
    latitude: string;
    longitude: string;
}
