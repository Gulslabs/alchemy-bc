import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3042",
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json'
  }
});

export default server;
