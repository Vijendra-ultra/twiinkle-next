"use client";

import { useRouter, usePathname } from "next/navigation";
import PostFetcher from "@/comps/PostFetcher";
import NavBarforAuthedUser from "@/miniComps/NavBarforAuthedUser";
import { useEffect, useState } from "react";
import { user_info } from "@/types";
import UserProfileCard from "@/comps/UserProfileCard";

const users: { [id: string]: user_info } = {
  Vijendra_ultra: {
    user_name: "Vijendra Vasre",
    bio: "SHOW ME WHO YOU TRULY ARE",
  },
  CaffeinatedGoblin69: {
    user_name: "Zoya",
    bio: "Designer by day, dragon slayer by night.",
  },
  "404_user": {
    user_name: "Kris",
    bio: "Still buffering...",
  },
};

const UserProfileDisplayer = ({ params }: { params: { userId: string } }) => {
  const navigate = useRouter();
  const curPath = usePathname();
  const [fetchedInfo, setFetchedInfo] = useState<user_info | null>(null);

  useEffect(() => {
    const userInfo = users[params.userId];
    if (!userInfo) {
      navigate.replace("/not-found");
    } else {
      setFetchedInfo(userInfo);
      document.title = `Say HI to ${userInfo.user_name} (${params.userId})`;
    }
  }, [params.userId]);

  const onPreviewClick = (pID: string) => {
    console.log("I was called");
    navigate.push(`${curPath}/${pID}`);
  };

  if (!fetchedInfo) return null;

  return (
    <div className="max-h-screen flex items-center flex-col">
      <NavBarforAuthedUser />
      <div className="mt-20 md:mt-24 grid md:w-[768px] px-6 md:px-0 py-3 mx-auto pb-40">
        <UserProfileCard fetchedInfo={fetchedInfo} u_id={params.userId} />
        <h2 className="text-2xl boldonse mt-8 px-3">Posts</h2>
        <PostFetcher onPreviewClick={onPreviewClick} />
      </div>
    </div>
  );
};

export default UserProfileDisplayer;
