"use client";
import { useStore } from "@/store";
import { supabase } from "@/SupabaseClient";
import { useEffect } from "react";
const UserSessionGetter = () => {
  const { setUser, user } = useStore();
  useEffect(() => {
    async function getUserSes() {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user?.id);
        console.log(user);
      }
    }
    getUserSes();
  }, []);
  return null;
};

export default UserSessionGetter;
