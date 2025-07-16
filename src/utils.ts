import type { ChangeEvent } from "react";
import { Editor } from "@tiptap/core";
export function formatJournalDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  if (date.getFullYear() !== now.getFullYear()) {
    options.year = "numeric";
  }

  return date.toLocaleDateString("en-US", options);
}

export function handleAddImage(
  e: ChangeEvent<HTMLInputElement>,
  editor: Editor | null
) {
  const file = e.target.files?.[0];
  if (!file || !editor) return;

  const filereader = new FileReader();
  filereader.onload = () => {
    editor
      .chain()
      .focus()
      .setImage({ src: filereader.result as string })
      .run();
  };
  filereader.readAsDataURL(file);
}
