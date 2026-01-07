import type { StateCreator } from "zustand";
import { type User } from "./user.interface";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { getProfile } from "../api";

export type UserState = {
  profile: User | null;
};

export type UserActions = {
  getProfile: () => void;
};

type CreateUserStoreType = StateCreator<UserState & UserActions>;

const userSLice: CreateUserStoreType = (set) => ({
  profile: null,
  getProfile: async () => {
    const profile = await getProfile();
    set({ profile });
  },
});

export const useUserStore = create<UserState & UserActions>()(
  devtools(userSLice, { name: "user" })
);
