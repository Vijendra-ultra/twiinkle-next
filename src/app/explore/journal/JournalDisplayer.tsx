"use client";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../../SupabaseClient";
import { useStore } from "../../../store";
import JournalEntry from "./JournalEntry";
import LoadScreen from "../../../miniComps/LoadScreen";
import type { journalEntry } from "../../../types";
import { toast } from "react-toastify";
import { fetchUserProfileInfo } from "../../../userDataRelatedFunc";
import { useUserInfoStore } from "../../../userInfoStore";
import { useRouter } from "next/navigation";

type JournalDisplayerProp = {
  setWriteJournalBtn: (val: boolean) => void;
};

const JournalDisplayer: React.FC<JournalDisplayerProp> = ({
  setWriteJournalBtn,
}) => {
  const {
    journalsList,
    setJournalsList,
    journalLoading,
    setJournalLoading,
    user,
  } = useStore();

  const navigate = useRouter();
  const { profileInfoIsThere, setProfileInfoThere, setUserDisplayName } =
    useUserInfoStore();

  const [journalMsg, setJournalMsg] = useState<string>(
    "Towards the chaos, a way's there"
  );
  const getJournals = useCallback(async (user: string) => {
    const { data, error } = await supabase
      .from("journal_entries")
      .select("journal_heading,journal_content,date")
      .eq("user_id", user)
      .order("date", { ascending: false })
      .limit(12);

    if (data) {
      const JournalsList = data as journalEntry[];

      setJournalLoading(false);
      setJournalsList(JournalsList);
      return;
    }

    if (error) {
      setJournalLoading(false);
      setJournalMsg("No journal entries to display");
      console.log(error);
      toast.error("An error ocurred.");
    }
  }, []);

  useEffect(() => {
    if (!user || user.trim() === "" || typeof user !== "string") {
      setJournalLoading(false);
      return;
    } else {
      if (journalsList.length > 0) return;
      getJournals(user);
    }
  }, [user, getJournals, setJournalLoading, journalsList]);

  useEffect(() => {
    if (profileInfoIsThere) return;
    document.title = "Your cool journal entries";

    const getUserProfileInfo = async () => {
      const result = await fetchUserProfileInfo();

      if (!result) {
        navigate.replace("/update-user-info");
        return;
      }
      setJournalMsg(
        ` ${
          result.data?.user_name !== undefined
            ? `Hi, ${result.data?.user_name} it's nice to see you again`
            : "Are you new here ??"
        } `
      );
      setProfileInfoThere(true);
      setUserDisplayName(result.data?.user_name);
    };
    getUserProfileInfo();
  }, [profileInfoIsThere, navigate, setProfileInfoThere]);

  return (
    <>
      <div className="sm:px-12 overflow-x-hidden ">
        <div className="flex px-3 sm:px-0 justify-start items-center ">
          {!journalLoading && (
            <>
              {" "}
              <h2 className=" md:mt-6 pl-3 md:mr-0 dark:text-white mr-1 sm:pl-0 text-xl mt-8 leading-relaxed sm:leading-loose sm:mt-8 sm:text-3xl mb-7  boldonse">
                {journalMsg}
              </h2>
              <button
                onClick={() => setWriteJournalBtn(true)}
                className="flex items-center ml-auto hero-btn text-xl bg-primaryPink hover:bg-btnHoverCol transition duration-300 text-white"
              >
                Add{" "}
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </div>
              </button>
            </>
          )}
        </div>
        {journalLoading && (
          <LoadScreen message="Somethings are cool when you...." />
        )}

        {!journalLoading &&
          journalsList.map((journal: journalEntry) => (
            <JournalEntry key={journal.date} journal={journal} />
          ))}
        {!journalLoading && journalsList.length > 0 && (
          <h2 className="text-center dark:text-white text-2xl mt-12 mb-16 boldonse">
            It came to an end.
          </h2>
        )}
      </div>
    </>
  );
};
export default JournalDisplayer;
