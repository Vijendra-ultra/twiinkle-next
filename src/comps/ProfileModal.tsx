"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/SupabaseClient";
import { useUserInfoStore } from "@/userInfoStore";
import { useStore } from "@/store";
import React, { useEffect, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "react-toastify";

type MyModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileModal: React.FC<MyModalType> = ({ open, setOpen }) => {
  const [logingOut, setLogingOut] = useState(false);
  const [mode, setMode] = useState<"dark" | "light">("light");
  const navigate = useRouter();
  const { setUser } = useStore();
  const { userDisplayName, setUserDisplayName } = useUserInfoStore();

  async function logout() {
    setLogingOut(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Error loging you out.");
      setLogingOut(false);
      return;
    }
    setUser("");
    localStorage.removeItem("Name");
    localStorage.removeItem("mode");
    setOpen(false);
    navigate.replace("/login");
  }
  const updateTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode") as "dark" | "light";
    if (!savedMode) return;
    setMode(savedMode);
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="sr-only">
          Profile Name and Theme changing
        </DialogTitle>
        <div>
          <span className="text-3xl inter--font lsp">
            Hi{userDisplayName === "NoNameFound" ? "" : "," + userDisplayName}!
          </span>
        </div>
        <div className="space-y-2 my-2 flex justify-between items-center">
          <h2 className="text-2xl inter--font">Themes</h2>
          <button
            onClick={updateTheme}
            className="px-3 py-1 text-white rounded-sm bg-darkmblack"
          >
            {mode === "light" ? "Dark" : "Light"}
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
