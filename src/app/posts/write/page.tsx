"use client";
import { useEditor, EditorContent, BubbleMenu, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import PostEditingTool from "../postComp/PostEditingTool";
import BubbleToolBar from "../postComp/BubbleToolBar";
import ImpEditorButtons from "../ImpEditorButtons";

import { useRef, useState } from "react";
import { supabase } from "@/SupabaseClient";
import { useStore } from "@/store";
import NavBarforAuthedUser from "@/miniComps/NavBarforAuthedUser";
import "./posteditor.css";

export default function PostTextEditor() {
  const [blogTitle, setBlogTitle] = useState<string>("");
  const { user } = useStore();
  const imageRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Image,
      Color.configure({ types: ["textStyle"] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>some cool things....</p>",
    onUpdate: ({ editor }) => {
      const json = editor?.getJSON();
      localStorage.setItem("tip_tap_content", JSON.stringify(json));
    },
    editorProps: {
      attributes: {
        class:
          "outline-none prose dark:prose-invert prose-lg max-w-4xl mx-auto px-4 py-4 min-h-[80vh]",
      },
    },
  });

  const postPublisher = async (
    editor: Editor,
    blogTitle: string,
    u_id: string
  ) => {
    const editorsHTML = editor?.getHTML();
    const { data, error } = await supabase
      .from("userpostssecured")
      .insert({ title: blogTitle.trim(), bl_cont: editorsHTML, u_id: u_id });
    if (data) {
      setBlogTitle("");
      console.log("Your blog submission is succesfull");
    } else {
      console.log(error);
    }
  };

  const postSubmissionHandler = () => {
    if (!editor || !user) return;
    postPublisher(editor, blogTitle, user);
  };

  return (
    <>
      <div className="flex flex-col md:pt-24  dark:bg-black min-h-screen items-center overflow-x-hidden pb-12">
        <NavBarforAuthedUser />
        <div className="major-sec">
          <div className="mt-5 mx-auto min-h-screen postEditorWriting px-3 md:px-2 w-full">
            <PostEditingTool imageRef={imageRef} editor={editor} />
            <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
              <BubbleToolBar
                editor={editor}
                style={"BubbleStyle"}
                Iconsize={12}
              />
            </BubbleMenu>

            <div className="mt-12 px-5 md:px-0">
              <textarea
                className={`w-full textarea h-auto text-5xl md:text-7xl px-1 pt-3 bg-transparent outline-none dark:text-white inter--font mb-3 textarea`}
                spellCheck={false}
                value={blogTitle}
                name="BlogTitle"
                placeholder="A cool heading please..."
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>

            <EditorContent
              className={"tiptap z-0 major-sec ProseMirror"}
              editor={editor}
              spellCheck={false}
            />
          </div>
        </div>

        <div className="hidden md:flex justify-end bottom-0 fixed z-10 w-full items-center pb-4 pt-1">
          <ImpEditorButtons postSubmissionHandler={postSubmissionHandler} />
        </div>
      </div>
    </>
  );
}
