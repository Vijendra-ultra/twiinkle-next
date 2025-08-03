import { Bold, Italic, UnderlineIcon } from "lucide-react";
import "../postComp/posteditor.module.css";
type editorType = {
  editor: any | null;
  style?: string;
  Iconsize?: number;
};
const BubbleToolBar: React.FC<editorType> = ({
  editor,
  style = "NoStyle",
  Iconsize = 16,
}) => {
  return (
    <div
      className={`flex py-3 gap-1 ${
        style === "NoStyle"
          ? ""
          : "py-2 px-2 bg-gray-200 dark:bg-gray-500 rounded-md flex gap-2"
      }`}
    >
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={` border-2 border-black rounded-sm  px-2 py-1 ${
          editor?.isActive("bold") ? "bg-gray-500 text-white" : ""
        }`}
      >
        <Bold size={Iconsize} />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={` border-2 border-black rounded-sm  px-2 py-1 ${
          editor?.isActive("italic") ? "bg-gray-500 text-white" : ""
        }`}
      >
        <Italic size={Iconsize ?? 18} />
      </button>

      <button
        className={` border-2 border-black rounded-sm  px-2 py-1 ${
          editor?.isActive("underline") ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon size={Iconsize} />
      </button>
      <button
        className={`border-2 border-black rounded-sm px-1.5 py-1 ${
          editor?.isActive("heading", { level: 1 }) ? "active" : ""
        }`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        H1
      </button>
      <button
        className={`border-2 border-black rounded-sm px-1.5 py-1 ${
          editor?.isActive("heading", { level: 2 }) ? " active" : ""
        }`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        H2
      </button>
      <button
        className={`border-2 border-black rounded-sm px-1.5 py-1 ${
          editor?.isActive("heading", { level: 3 }) ? " active" : ""
        }`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        H3
      </button>
      <button
        className="border-2 border-black rounded-sm px-2 py-1"
        onClick={() => editor?.chain().focus().setParagraph().run()}
      >
        P
      </button>
    </div>
  );
};
export default BubbleToolBar;
