import { https } from "./client";

https.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      req.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
