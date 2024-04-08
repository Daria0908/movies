import axios from "axios";
import env from "react-dotenv";

const instance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": `${env.API_TOKEN}`,
  },
});

export default instance;
