"use client";
import NavBarforAuthedUser from "../../miniComps/NavBarforAuthedUser";

import JournalInfo from "../../comps/JournalInfo";

import { useStore } from "@/store";

const MusingsFeed: React.FC = () => {
  return (
    <>
      <NavBarforAuthedUser />
      <div className=" text-black  md:mt-20  min-h-screen">
        <section className="major-sec mx-auto px-6 md:px-16 mt-4">
          <JournalInfo />
        </section>
      </div>
    </>
  );
};
export default MusingsFeed;
