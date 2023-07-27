import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_BOOKING_ENDPOINT} = process.env

export default class BookingService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    makeReservation = (data, callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_BOOKING_ENDPOINT}`, 
            data,
            callbackSuccess, 
            callbackError
        };
        this.axiosClient.makePostRequest(requestInfo);
    }
}