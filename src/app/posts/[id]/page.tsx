import NavBarforAuthedUser from "@/miniComps/NavBarforAuthedUser";
import styles from "../../posts/postComp/posteditor.module.css";
import { supabase } from "@/SupabaseClient";
import React from "react";

const postDisplyer = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { data } = React.use(
    supabase.from("public_posts").select("title,bl_cont").eq("id", id).single()
  );
  const onPostReadingNoDisplay: boolean = true;
  return (
    <>
      <NavBarforAuthedUser onPostReadingNoDisplay={onPostReadingNoDisplay} />
      <div
        className={` px-5 pt-20 md:pt-28 md:max-w-[52rem] md:pb-8 post-w md:mx-auto fade-in ${styles.postDisplayCont}`}
      >
        <h1
          className={` font-bold md:leading-normal dark:text-white text-5xl  leading-loose ${styles.headingStyle}`}
        >
          <strong>{data?.title}</strong>
        </h1>
        <div className="flex justify-between items-center gap-6">
          <div className="mb-2">
            <span className="text-xl inter--font text-black dark:text-white fw-md">
              Vijendra
            </span>
            <div>
              Written on <span className=" italic fw-md">27 July 2025 </span>
            </div>
          </div>
          <div className="md:pr-12 pb-1">
            <button className="px-3 py-2 bg-primaryPink inter--font text-white rounded-md">
              Follow
            </button>
          </div>
        </div>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: data?.bl_cont }}
        ></div>
      </div>
    </>
  );
};

export default postDisplyer;
