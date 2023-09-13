import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_DAYS_ENDPOINT} = process.env

export default class DayService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    postDay = (data, callbackSuccess, callbackError) => {
        const requestInfo = {url: `${REACT_APP_BASE_URL}${REACT_APP_DAYS_ENDPOINT}`, data, callbackSuccess, callbackError};
        this.axiosClient.makePostRequest(requestInfo);
    }
}