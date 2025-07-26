import { create } from "zustand";

type UserInfoStore = {
  profileInfoIsThere: boolean;
  setProfileInfoThere: (val: boolean) => void;
  userDisplayName: string;
  setUserDisplayName: (name: string) => void;
};
export const useUserInfoStore = create<UserInfoStore>((set) => ({
  profileInfoIsThere: false,
  setProfileInfoThere: (val) => set(() => ({ profileInfoIsThere: val })),
  userDisplayName: "Guest",
  setUserDisplayName: (name) =>
    set(() => ({
      userDisplayName: name,
    })),
}));
