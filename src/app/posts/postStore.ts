import { posts } from "@/types";
import React from "react";
import { create } from "zustand";
type PostRelatedType = {
  isDarkModeOn: boolean;
  setIsDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  posts: [] | posts[];
  setPosts: (posts: posts[]) => void;
};
export const PostRelatedStore = create<PostRelatedType>((set) => ({
  isDarkModeOn: false,
  setIsDarkModeOn: () =>
    set((state) => ({
      isDarkModeOn: !state.isDarkModeOn,
    })),
  posts: [],
  setPosts: (postArray: posts[]) => set({ posts: postArray }),
}));
