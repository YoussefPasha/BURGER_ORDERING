import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-5dee4.firebaseio.com/",
});

export default instance;