"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarforAuthedUser: React.FC = () => {
  const location = usePathname();

  const pathIsJournal: boolean = location === "/explore/journal";
  const pathIsExplore: boolean = location === "/explore";

  return (
    <div
      className={`flex  justify-start fixed w-full top-0  items-center pl-3 md:px-6 pb-3 pt-1.5 md:pt-3 pr-5 md:pr-10 transition-all ease-in-out duration-600 `}
    >
      {" "}
      <h2 className="inter--font text-3xl  md:text-4xl">Twiinkle</h2>
      <div className="ml-auto flex items-center pt-2 gap-6">
        {!pathIsJournal && (
          <button className="text-2xl  px-1 md:px-2 py-1.5 md:py-3  ">
            <Link href="explore/journal">Journal</Link>
          </button>
        )}
        {!pathIsExplore && (
          <button className="px-1  md:px-2 py-1.5 md:py-3 text-2xl ">
            <Link href="/explore">Twiinkle </Link>
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
