"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/SupabaseClient";
import { useUserInfoStore } from "@/userInfoStore";
import { PostRelatedStore } from "@/app/posts/postStore";

import { useStore } from "@/store";
import { useState } from "react";

type MyModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileModal = ({ open, setOpen }: MyModalType) => {
  const [logingOut, setLogingOut] = useState(false);
  const navigate = useRouter();
  const { setUser } = useStore();
  const { userDisplayName, setUserDisplayName } = useUserInfoStore();
  const { isDarkModeOn } = PostRelatedStore();

  async function logout() {
    setLogingOut(true);
    const { error } = await supabase.auth.signOut();
    setUser("");
    setUserDisplayName("Guest");
    if (error) {
      console.log("Try again later");
    }
    navigate.replace("/login");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div>
          <span className="text-3xl inter--font lsp">
            Hi,{userDisplayName}!
          </span>
        </div>
        <div className="space-y-2 my-2 flex justify-between items-center">
          <h2 className="text-2xl inter--font">Themes</h2>
          <button className="px-3 py-1 text-white rounded-sm bg-darkmblack">
            {!isDarkModeOn ? "Dark" : "Light"}
          </button>
        </div>
        <div>
          <button
            onClick={() => logout()}
            disabled={logingOut}
            className={`w-full text-xl  bg-gray-600 ${
              logingOut ? "bg-gray-400" : ""
            } py-2 text-gray-200 rounded-md`}
          >
            {logingOut ? "Loging you out..." : "Logout"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProfileModal;
