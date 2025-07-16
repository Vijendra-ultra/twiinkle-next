"use client";
import Link from "next/link";
import { useStore } from "../store";

const NavBar: React.FC = () => {
  const { user } = useStore();

  return (
    <div className="flex justify-start items-center px-4 md:px-6 pt-3 pr-10">
      <h2 className="inter--font text-3xl md:text-4xl">Twiinkle</h2>
      <div className="ml-auto flex items-center justify-center gap-5">
        {!user && (
          <button className="text-xl md:text-2xl boldonse py-2 px-1 md:px-2">
            <Link href="/login">Login</Link>
          </button>
        )}
        {user && (
          <button className="text-xl md:text-2xl boldonse py-2 px-1 md:px-2">
            <Link href="/explore">Explore</Link>
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBar;
