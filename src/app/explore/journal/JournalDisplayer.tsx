"use client";
import { useEffect, useState } from "react";
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

  const { profileInfoIsThere, setProfileInfoThere } = useUserInfoStore();

  const [journalMsg, setJournalMsg] = useState<string>(
    "Towards the chaos, a way's there"
  );
  const navigate = useRouter();
  useEffect(() => {
    console.log(user);
    if (!user || user.trim() === "" || typeof user !== "string") {
      setJournalLoading(false);
      navigate.push("login");
      return;
    }
    async function getJournals() {
      const { data, error } = await supabase
        .from("journal_entries")
        .select("*")
        .eq("user_id", user)
        .order("date", { ascending: false })
        .limit(12);

      if (data) {
        const JournalsList = data as journalEntry[];
        if (JournalsList.length === 0) {
          setJournalMsg("No journal entries to display");
          setJournalLoading(false);
        } else {
          setJournalLoading(false);
          setJournalsList(JournalsList);
          console.log("I am running");
        }
      }
      if (error) {
        setJournalLoading(false);
        console.log(error);
        toast.error("An error ocurred.");
      }
    }
    console.log("iran");
    if (journalsList.length === 0) {
      getJournals();
    }
  }, [user]);

  useEffect(() => {
    document.title = "Your journal entries";
    const getUserProfileInfo = async () => {
      if (profileInfoIsThere) return;
      const result = await fetchUserProfileInfo();

      console.log(result);
      if (!result || result.error) {
        navigate.push("/update-user-info");
        return;
      }
      setJournalMsg(`Hi ${result.data?.user_name}, it's nice to see you again`);
      setProfileInfoThere(true);
    };
    getUserProfileInfo();
  }, []);

  return (
    <>
      <div className="sm:px-12 overflow-x-hidden ">
        <div className="flex px-3 sm:px-0 justify-start items-center ">
          {!journalLoading && (
            <>
              {" "}
              <h2 className=" md:mt-6 pl-3 md:mr-0 mr-1 sm:pl-0 text-xl mt-8 leading-relaxed sm:leading-loose sm:mt-8 sm:text-3xl mb-7  boldonse">
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
        {!journalLoading && journalsList.length <= 0 && (
          <LoadScreen message="Are you just curious as us to see???" />
        )}

        {!journalLoading &&
          journalsList.map((journal: journalEntry) => (
            <JournalEntry key={journal.id} journal={journal} />
          ))}
        {!journalLoading && (
          <h2 className="text-center text-2xl mt-12 mb-16 boldonse">
            It came to an end.
          </h2>
        )}
      </div>
    </>
  );
};
export default JournalDisplayer;
