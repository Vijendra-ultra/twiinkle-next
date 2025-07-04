import type { journalEntry } from "../../../types";
import { formatJournalDate } from "../../../utils";
type journalEntryProp = {
  journal: journalEntry;
};
const JournalEntry: React.FC<journalEntryProp> = ({ journal }) => {
  return (
    <div className="px-6 sm:px-0 mb-5 flex  justify-start flex-col ">
      <h3
        style={{ color: "#880d1e" }}
        className="
       text-3xl sm:text-4xl playfair font-bold italic"
      >
        {journal.journal_heading}
      </h3>

      <div className="flex items-baseline">
        <span className=" block pt-3 italic inter--font ">
          On {formatJournalDate(journal.date)}
        </span>
      </div>
      <div className="pt-3 sm:pl-2 sm:pr-10 leading-normal">
        <p className="sm:p p-ssm  inter--font">{journal.journal_content}</p>
      </div>
    </div>
  );
};
export default JournalEntry;
