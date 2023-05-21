import axios from 'axios';

export default class AxiosClient {

    makeGetRequest = ({ url, config, callbackSuccess, callbackError }) => {
        axios.get(url, config)
        .then(callbackSuccess)
        .catch(callbackError)
    }
}