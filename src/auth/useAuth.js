import decode from "jwt-decode";

function useAuth() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return false;
  }

  try {
    const { exp, verified } = decode(token);
    if (exp * 1000 < new Date().getTime()) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return false;
  }
}

export default useAuth;
