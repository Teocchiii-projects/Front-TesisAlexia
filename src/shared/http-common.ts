import axios, {AxiosInstance} from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";

/**
 * @summary
 * Axios instance for making HTTP requests
 * @type {AxiosInstance}
 */

const http:AxiosInstance=axios.create({
        baseURL: API_BASE_URL
});

export default http;