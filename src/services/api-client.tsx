import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "55f3e504ce1a432eb0d8efc6bf97487f",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endpoint: string) {
    this.endPoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
   return  axiosInstance.get<T>(this.endPoint + "/" + id).then((res) => res.data);
  };
}

export default APIClient;
