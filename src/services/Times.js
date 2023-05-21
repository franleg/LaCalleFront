import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_SCHEDULES_ENDPOINT} = process.env

export default class TimeService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    getTimes = (callbackSuccess, callbackError) => {
        const requestInfo = {url: `${REACT_APP_BASE_URL}${REACT_APP_SCHEDULES_ENDPOINT}`, callbackSuccess, callbackError};
        this.axiosClient.makeGetRequest(requestInfo);
    }
}