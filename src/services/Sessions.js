import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_LOGIN_ENDPOINT, REACT_APP_REGISTER_ENDPOINT} = process.env

export default class SessionService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    loginUser = (data, callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_LOGIN_ENDPOINT}`, 
            data,
            callbackSuccess, 
            callbackError
        };
        this.axiosClient.makePostRequest(requestInfo);
    }

    registerUser = (data, callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_REGISTER_ENDPOINT}`, 
            data: data,
            callbackSuccess, 
            callbackError
        };
        this.axiosClient.makePostRequest(requestInfo);
    }
}