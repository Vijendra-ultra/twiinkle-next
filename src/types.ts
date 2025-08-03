import type { Session, User } from "@supabase/supabase-js";
export type postInfo = {
  postInfo: postInfoObj;
};
type postInfoObj = {
  name: string;
  date: string;
  type: string;
};

export type post = {
  post: postObj;
};

type postObj = {
  id: number;
  postText: string;
  postInfo: postInfoObj[];
};
type SignUpUser =
  | { user: User | null; session: Session | null }
  | { user: null; session: null }
  | null;

export type signUpObj = {
  data: SignUpUser;
  error: string | null;
};

export type journalEntry = {
  created_at: string;
  date: string;
  id: string;
  journal_content: string;
  journal_heading: string;
  user_id: string;
};
export type posts = {
  id: string;
  bl_cont: string;
  title: string;
  created_at: string;
};

export type journalEntryList = {
  journalList: journalEntry[];
};
export type user_info = {
  user_name: string;
  bio: string;
};
