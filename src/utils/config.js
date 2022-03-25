const user = JSON.parse(localStorage.getItem("user"));

export const userId = user && user.userId;
export const token = user && user.accessToken;
export const refreshToken = user && user.refreshToken;

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    authorization: "Bearer " + token,
  };
};

export const backendServerURL =
  process.env.REACT_APP_LOCAL_SERVER || process.env.REACT_APP_BACKEND_SERVER;
