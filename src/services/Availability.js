import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_AVAILABILITY_ENDPOINT} = process.env

export default class AvailabilityService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    getSchedules = (selectedField, selectedDate, callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_AVAILABILITY_ENDPOINT}?field=${selectedField}&date=${selectedDate}`,
            callbackSuccess, 
            callbackError
        };
        this.axiosClient.makeGetRequest(requestInfo);
    }
}