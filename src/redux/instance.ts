import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});
export default instance;

instance.defaults.headers.common["x-api-key"] = process.env.NEXT_PUBLIC_API_KEY;
