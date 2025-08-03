"use client";
import PostFetcher from "@/comps/PostFetcher";
import NavBarforAuthedUser from "../../miniComps/NavBarforAuthedUser";

const MusingsFeed: React.FC = () => {
  return (
    <>
      <NavBarforAuthedUser />
      <div className=" text-black  md:mt-20  min-h-screen">
        <section className="major-sec mx-auto px-6 md:px-16 mt-8">
          <div className="mt-20">
            <h3 className="text-2xl pt-4 pb-5 text-primaryPink boldonse pl-3">
              What's up stranger?
            </h3>
          </div>
          <PostFetcher />
        </section>
      </div>
    </>
  );
};
export default MusingsFeed;
