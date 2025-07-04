import { toast } from "react-toastify";
import { useStore } from "../store";
import { supabase } from "../SupabaseClient";
import { useState, useEffect } from "react";

type onJournalSubmit = (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

const JournalTextEditor: React.FC = () => {
  const [todayDate, setTodayDate] = useState<string>("");
  const [saveBtnClicked, setSaveBtnClicked] = useState<boolean>(false);

  const {
    journalHeading,
    setJournalHeading,
    journalContent,
    setJournalContent,
  } = useStore();

  const onJournalSubmit: onJournalSubmit = async (e) => {
    e.preventDefault();
    setSaveBtnClicked(true);
    if (journalContent.trim() === "" || journalHeading.trim() === "") {
      toast.info("We think you made a mistake making entry!");
      setSaveBtnClicked(false);
      return;
    }

    try {
      const { error } = await supabase.from("journal_entries").insert([
        {
          date: todayDate,
          journal_content: journalContent,
          journal_heading: journalHeading,
        },
      ]);
      if (error) {
        console.log(error);
        toast.error("An error ocurred while entrying,Please try again later", {
          autoClose: 5000,
        });
      } else {
        toast.success("Your journal entry is successfull!", {
          autoClose: 5000,
        });
      }
    } finally {
      setJournalHeading("");
      setJournalContent("");
      setSaveBtnClicked(false);
    }
  };

  const journalDiscard = () => {
    if (journalContent.trim() === "" || journalHeading.trim() === "") {
      return;
    }
    toast.info("Your journal entry is discarded");
    setJournalContent("");
    setJournalHeading("");
  };

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    const tDate = `${year}-${month}-${day}`;
    setTodayDate(tDate);
  }, []);

  return (
    <form
      onSubmit={(e) => onJournalSubmit(e)}
      className="grid md:bg-inherit   grid-cols-1 mt-3 md:mt-12 px-3 md:px-16"
    >
      <input
        spellCheck={false}
        maxLength={93}
        value={journalHeading}
        onChange={(e) => setJournalHeading(e)}
        placeholder="Heading please.."
        className="px-2  py-2 h-auto overflow-x-hidden font-bold  text-primaryPink outline-none inter--font italic text-3xl md:text-4xl md:rounded-lg"
      />
      <textarea
        value={journalContent}
        onChange={(e) => setJournalContent(e)}
        className="md:journal--inputfield-h outline-none jouranal-input-sm text-black md:mt-3 placeholder:text-md md:rounded-lg pb-3 md:pb-0"
        placeholder="What happened today! It could be anything delighting or funny"
        spellCheck={false}
      />
      <div className="mt-2 fixed bottom-0 right-0  md:relative flex pb-2 pr-2 md:pr-0 md:pb-0 justify-end items-center gap-3">
        <button
          type="button"
          onClick={journalDiscard}
          className="text-xl px-2 py-2 bg-red-200 rounded-lg text-red-700"
        >
          Discard
        </button>
        <button
          type="submit"
          disabled={saveBtnClicked}
          style={{ backgroundColor: saveBtnClicked ? "#ffafcc" : "#d81159" }}
          className=" text-xl px-3 py-2 rounded-lg bg-primaryPink hover:bg-btnHoverCol transition duration-300 text-white"
        >
          {saveBtnClicked ? <>Saving...</> : <>Save</>}
        </button>
      </div>
    </form>
  );
};
export default JournalTextEditor;
