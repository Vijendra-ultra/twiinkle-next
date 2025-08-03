import type { RefObject } from "react";
import { Code } from "lucide-react";
import BubbleToolBar from "./BubbleToolBar";
import Styles from "../postComp/posteditor.module.css";
import { PostRelatedStore } from "../postStore";
type editorType = {
  editor: any | null;
  imageRef: RefObject<HTMLInputElement | null>;
};
const PostEditingTool: React.FC<editorType> = ({ editor, imageRef }) => {
  const { isDarkModeOn } = PostRelatedStore();

  return (
    <div
      className={`display-none  bg-lightGrey dark:bg-gray-600 toolbar md:flex py-3 rounded-md  pl-3 gap-1 ${Styles.postEditorWriting}`}
    >
      <BubbleToolBar editor={editor} />
      <div className="flex py-3 gap-1">
        {/* <button
          className={` border-2 cursor-pointer border-black dark:border-black rounded-sm px-1 py-1 ${
            editor?.isActive({ textAlign: "center" })
              ? "bg-gray-500 text-white"
              : ""
          }`}
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter />
        </button> */}

        <button
          className="border-2 border-black rounded-sm px-2 py-1"
          onClick={() => editor?.chain().focus().toggleCode().run()}
        >
          <Code size={16} />
        </button>
        <button
          className="border-2 border-black rounded-sm px-1 py-1"
          onClick={() => imageRef?.current?.click()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="dark:fill-white fill-black"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostEditingTool;
