"use client";
import { useEffect, useState } from "react";
import JournalDisplayer from "../journal/JournalDisplayer";
import NavBarforAuthedUser from "@/miniComps/NavBarforAuthedUser";
import JournalTextEditor from "@/comps/JournalTextEditor";
import ProfileModal from "@/comps/ProfileModal";
import { useStore } from "@/store";
const JournalWriting: React.FC = () => {
  const { open, setOpen } = useStore();
  const [writeJournalBtn, setWriteJournalBtn] = useState<boolean>(false);
  useEffect(() => {
    document.title = "Write some cool journals";
  });
  return (
    <div className={` overflow-y-hidden min-h-screen text-black `}>
      <NavBarforAuthedUser />
      <ProfileModal open={open} setOpen={setOpen} />
      <div className="major-sec mt-20 grid grid-cols-1  mx-auto">
        <div className="flex flex-col gap-3">
          {!writeJournalBtn && (
            <JournalDisplayer setWriteJournalBtn={setWriteJournalBtn} />
          )}

          {writeJournalBtn && (
            <div className="overflow-y-hidden md:mt-5">
              {" "}
              <div className="boldonse display-none dark:text-white sm:block font-bold text-4xl mb-2 text-center">
                Write what happened today!
              </div>
              <JournalTextEditor setWriteJournalBtn={setWriteJournalBtn} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default JournalWriting;
