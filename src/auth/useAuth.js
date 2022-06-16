import decode from "jwt-decode";

function useAuth() {
  const token = localStorage.getItem("authToken");

  try {
    const { exp, verified } = decode(token);
    console.log(decode(token));
    if (exp * 1000 < new Date().getTime()) {
      localStorage.removeItem("authToken");
      return false;
    } else {
      return true;
    }
  } catch (err) {
    localStorage.removeItem("authToken");
    return false;
  }
}

export default useAuth;
