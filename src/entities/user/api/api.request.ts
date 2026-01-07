import type { User } from "../model";
import { USER_API } from "./api.routes";
import { http } from "@/shared/api";

export const getProfile = async () => {
  const response = await http.get<User>(USER_API.profile);

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to fetch profile");
};
