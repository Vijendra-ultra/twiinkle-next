"use client";
import ProfileModal from "@/comps/ProfileModal";
import { useStore } from "@/store";

const ProfileWindowHolder = () => {
  const { open, setOpen } = useStore();
  return (
    <>
      <ProfileModal open={open} setOpen={setOpen} />
    </>
  );
};
export default ProfileWindowHolder;
