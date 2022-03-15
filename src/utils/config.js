const user = JSON.parse(localStorage.getItem("user"));

export const userId = user && user.userId;
export const token = user && user.accessToken;
export const refreshToken = user && user.refreshToken;

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    authorization: "Bearer " + token,
  };
};
