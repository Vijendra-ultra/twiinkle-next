"use client";
import NavBarforAuthedUser from "../../miniComps/NavBarforAuthedUser";

import JournalInfo from "../../comps/JournalInfo";

const MusingsFeed: React.FC = () => {
  // if (!user) {
  //   navigate("/signup");
  // }
  return (
    <>
      <NavBarforAuthedUser />
      <div className=" text-black  md:mt-20  min-h-screen">
        <section className="major-sec mx-auto px-6 md:px-16 mt-4">
          <JournalInfo />
          {/* <FeedOptionChooser /> */}

          {/*This is the main section*/}
          {/* <Feed /> */}
        </section>
      </div>
    </>
  );
};
export default MusingsFeed;
