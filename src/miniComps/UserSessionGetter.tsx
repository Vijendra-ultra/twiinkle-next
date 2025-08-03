"use client";
import { useStore } from "@/store";
import { supabase } from "@/SupabaseClient";
import { useUserInfoStore } from "@/userInfoStore";
import { LocalStorageNameGetter } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const UserSessionGetter = () => {
  const { setUser, user } = useStore();
  const navigate = useRouter();
  const { setUserDisplayName } = useUserInfoStore();
  const nameGetter = async () => {
    const res = await LocalStorageNameGetter();

    if (res === "NoNameFound" && typeof user === "string" && user !== "") {
      navigate.replace("/update-user-info");
    }
    setUserDisplayName(res!);
  };

  useEffect(() => {
    async function getUserSes() {
      nameGetter();
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user?.id);
      }
    }
    getUserSes();
  }, [setUser]);
  return null;
};

export default UserSessionGetter;
