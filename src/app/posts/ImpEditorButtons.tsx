import { PostRelatedStore } from "./postStore";
type impEditType = {
  postSubmissionHandler: () => void;
};
const ImpEditorButtons: React.FC<impEditType> = ({ postSubmissionHandler }) => {
  const { setIsDarkModeOn, isDarkModeOn } = PostRelatedStore();
  return (
    <div className={`flex ml-auto gap-3 mt-3 pr-5 `}>
      <button className="text-2xl bg-darkmblack dark:bg-gray-300 dark:text-black font-semibold inter-font transition-all display-none md:block px-5 py-2 br-50 col hover:scale-105 text-white">
        Save
      </button>
      <button
        onClick={() => postSubmissionHandler()}
        className="text-2xl font-semibold inter-font  transition-all bg-primaryPink hover:scale-105 px-5 py-2 br-50 text-white"
      >
        Post
      </button>
    </div>
  );
};
export default ImpEditorButtons;
