import { create } from "zustand";
import { supabase } from "./SupabaseClient";
import type { User, Session } from "@supabase/supabase-js";
import type { journalEntry } from "./types";

type store = {
  //User Info
  user: null | string;
  setUser: (name: string) => void;

  name: string;
  setName: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  age: number;
  setAge: (num: number | "") => void;
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  signUp: (
    email: string,
    password: string
  ) => Promise<{
    data:
      | { user: User | null; session: Session | null }
      | { user: null; session: null }
      | null;
    error: string | null;
  }>;
  login: (
    email: string,
    password: string
  ) => Promise<{
    data:
      | { user: User | null; session: Session | null }
      | { user: null; session: null }
      | null;
    error: null | string;
  }>;
  journalHeading: string;
  setJournalHeading: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  journalContent: string;
  setJournalContent: (
    e: React.ChangeEvent<HTMLTextAreaElement> | string
  ) => void;

  journalsList: journalEntry[] | [];
  setJournalsList: (data: journalEntry[]) => void;
  journalLoading: boolean;
  setJournalLoading: (val: boolean) => void;
  errorMsg: string;
  setErrorMsg: (str: string) => void;
};

export const useStore = create<store>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  name: "",
  setName: (e) =>
    set(() => ({ name: typeof e === "string" ? e : e.target.value })),
  age: 0,
  setAge: (number) => set(() => ({ age: number === "" ? 0 : number })),
  email: "",
  setEmail: (e) =>
    set(() => ({ email: typeof e === "string" ? e : e.target.value })),
  password: "",
  setPassword: (e) =>
    set(() => ({ password: typeof e === "string" ? e : e.target.value })),
  signUp: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log(error.message);
        return { data: null, error: error.message };
      }
      return { data: data ?? { user: null, session: null }, error: null };
    } catch (err) {
      console.log("Error occured", err);
      return { error: "Unexpected error occured", data: null };
    }
  },

  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { data: null, error: error.message };
    }
    console.log(data);
    return { data: data ?? { user: null, session: null }, error: null };
  },

  journalHeading: "",
  setJournalHeading: (e) =>
    set(() => ({ journalHeading: typeof e === "string" ? e : e.target.value })),
  journalContent: "",
  setJournalContent: (e) =>
    set(() => ({ journalContent: typeof e === "string" ? e : e.target.value })),
  journalsList: [],
  setJournalsList: (data) => set(() => ({ journalsList: data })),
  journalLoading: true,
  setJournalLoading: (val) => set(() => ({ journalLoading: val })),
  errorMsg: "",
  setErrorMsg: (errormsg) => set({ errorMsg: errormsg }),
}));
