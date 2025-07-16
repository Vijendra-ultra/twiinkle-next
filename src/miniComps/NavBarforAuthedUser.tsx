"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarforAuthedUser: React.FC = () => {
  const location = usePathname();

  const pathIsJournal: boolean = location === "/explore/journal";
  const pathIsExplore: boolean = location === "/explore";

  return (
    <div
      className={`flex  justify-start fixed backdrop-blur-0 bg-white/70 border-b border-white/30  w-full top-0  items-center pl-3 md:px-6 pb-3 pt-1.5 md:pt-3 pr-5 md:pr-10 transition-all ease-in-out duration-600 `}
    >
      {" "}
      <h2 className="inter--font text-3xl  md:text-4xl">Twiinkle</h2>
      <div className="ml-auto flex items-center pt-2 gap-6">
        {!pathIsJournal && (
          <button className="text-2xl  px-1 md:px-2 py-1.5 md:py-3 hover:bg-gray-200  transition-all rounded-md  ">
            <Link href="explore/journal">
              <div className="flex justify-center items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36px"
                    viewBox="0 -960 960 960"
                    width="36px"
                    fill="#000"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z" />
                  </svg>
                </div>
                <div className="display-none md:block font-bold inter--font">
                  Journal
                </div>
              </div>
            </Link>
          </button>
        )}
        {!pathIsExplore && (
          <button className="px-1  md:px-2 py-1.5 md:py-3 text-2xl hover:bg-gray-200  transition-all rounded-md ">
            <Link href="/explore">
              <div className="flex justify-center items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#000"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                </div>
                <div className="display-none md:block font-bold inter--font">
                  Home{" "}
                </div>
              </div>
            </Link>
          </button>
        )}
        <button className=" display-none text-2xl md:block ">
          <Link href="/explore/profile">Profile</Link>
        </button>
      </div>
    </div>
  );
};
export default NavBarforAuthedUser;
