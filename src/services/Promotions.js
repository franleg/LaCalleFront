import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL, REACT_APP_PROMOTIONS_ENDPOINT} = process.env

export default class PromotionService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    createPromotion = (data, callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_PROMOTIONS_ENDPOINT}`, 
            data,
            callbackSuccess, 
            callbackError
        };
        this.axiosClient.makePostRequest(requestInfo);
    };

    getPromotions = (callbackSuccess, callbackError) => {
        const requestInfo = {
            url: `${REACT_APP_BASE_URL}${REACT_APP_PROMOTIONS_ENDPOINT}`,
            callbackSuccess,
            callbackError
        };
        this.axiosClient.makeGetRequest(requestInfo);
    }
}