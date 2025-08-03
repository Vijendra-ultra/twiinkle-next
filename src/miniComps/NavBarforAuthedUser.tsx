"use client";

import { useStore } from "@/store";
import { useUserInfoStore } from "@/userInfoStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavBarPropsType = {
  onPostReadingNoDisplay?: boolean;
};
const NavBarforAuthedUser: React.FC<NavBarPropsType> = ({
  onPostReadingNoDisplay,
}) => {
  const { user, setOpen } = useStore();
  const location = usePathname();
  const { userDisplayName } = useUserInfoStore();
  const pathIsJournal: boolean = location === "/explore/journal";
  const pathIsExplore: boolean = location === "/explore";
  const pathIsBlogCreate: boolean = location === "/posts/write";

  return (
    <div
      className={`flex justify-start fixed 
    backdrop-blur-0 dark:backdrop-blur-sm 
    bg-white/70 dark:bg-black/30 
    border-b border-white/30 dark:border-black/30  
    w-full top-0 items-center 
    pl-3 md:px-6 pb-3 pt-1.5 md:pt-3 pr-5 z-10 md:pr-10 
    transition-all ease-in-out duration-600`}
    >
      {" "}
      <h2 className="inter--font text-3xl dark:text-white  md:text-4xl">
        Twiinkle
      </h2>
      <div className="ml-auto flex items-center pt-2 gap-6">
        {!user ||
          (!pathIsJournal && !onPostReadingNoDisplay && (
            <Link href="/explore/journal">
              <button className="text-2xl  px-1 md:px-2 py-1.5 md:py-3 hover:bg-gray-200 hover:dark:bg-[#1d2225]  transition-all rounded-md  ">
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36px"
                      viewBox="0 -960 960 960"
                      width="36px"
                      className="fill-black dark:fill-white"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z" />
                    </svg>
                  </div>
                  <div className="display-none  md:block font-bold inter--font">
                    Journal
                  </div>
                </div>
              </button>
            </Link>
          ))}
        {!pathIsExplore && (
          <Link href="/explore">
            <button className="px-1  md:px-2 py-1.5 md:py-3 text-2xl hover:bg-gray-200 hover:dark:bg-[#1d2225] transition-all rounded-md ">
              <div className="flex justify-center  items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                </div>
                <div className="display-none dark:text-white md:block font-bold inter--font">
                  Home{" "}
                </div>
              </div>
            </button>
          </Link>
        )}

        {user && !pathIsBlogCreate && !onPostReadingNoDisplay && (
          <Link href="/posts/write">
            <button className="px-1  md:px-2 py-1.5 md:py-3 text-2xl hover:bg-gray-200 hover:dark:bg-[#1d2225] transition-all rounded-md ">
              <div className="flex justify-center  items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                  </svg>
                </div>
                <div className="display-none dark:text-white md:block font-bold inter--font">
                  Create{" "}
                </div>
              </div>
            </button>
          </Link>
        )}

        {user && (
          <button
            onClick={() => setOpen(true)}
            className=" display-none w-12 h-12 bg-green-500 rounded-[50%] dark:text-white text-2xl md:block "
          >
            {userDisplayName.charAt(0)}
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBarforAuthedUser;
