import axios from "axios";

const register = async (userData) => {
  const response = await axios.post(
    "http://localhost:8000/api/v1/auth/register",
    userData,
  );

  if (response.data) {
    console.log(response.data);
    localStorage.setItem("authToken", JSON.stringify(response.data.token));
  }

  return response.data;
};

const login = async (userDate) => {
  const response = await axios.post(
    "http://localhost:8000/api/v1/auth/login",
    userDate,
  );
  if (response.data) {
    console.log(response.data);
    localStorage.setItem("authToken", JSON.stringify(response.data.token));
  }
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
