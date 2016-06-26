import axios from 'axios';

const API_KEY = '4f5241aa517e1f086bda971f7c3c1b2c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// define a var, assign a string to it
// this is a convention
export const FETCH_WEATHER = 'FETCH_WEATHER';

// whenever fetchWeather is called it always has a city passed in
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
