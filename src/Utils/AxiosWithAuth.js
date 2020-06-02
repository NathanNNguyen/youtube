import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://authorization-token.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;
