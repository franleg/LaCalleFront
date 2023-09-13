import AxiosClient from "./axiosClient";

const { REACT_APP_BASE_URL, REACT_APP_USER_ENDPOINT } = process.env;

export default class UsersService {
    constructor() {
        this.axiosClient = new AxiosClient();
    }

    getUserDataByEmail = async (email, callbackSuccess, callbackError) => {
        try {
            const requestInfo = {
                url: `${REACT_APP_BASE_URL}${REACT_APP_USER_ENDPOINT}?email=${email}`, 
                callbackSuccess,
                callbackError
            };
            this.axiosClient.makeGetRequest(requestInfo);
        } catch (error) {
            throw error;
        }
    }
}


