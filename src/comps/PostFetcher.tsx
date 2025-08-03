import { useEffect, useState } from "react";
import PostPreviewDisplayer from "./PostPreviewDisplayer";
import { supabase } from "@/SupabaseClient";
import { PostRelatedStore } from "@/app/posts/postStore";
import LoadScreen from "@/miniComps/LoadScreen";

const PostFetcher = () => {
  const { posts, setPosts } = PostRelatedStore();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (posts.length > 0) return;
    async function postsGetter() {
      setLoading(true);
      const { data, error } = await supabase
        .from("public_posts")
        .select("*")
        .limit(12);
      if (data) {
        setPosts(data);
        setLoading(false);
      }
      if (error) {
        console.log(error.message);
      }
    }
    postsGetter();
  }, [posts]);
  useEffect(() => {
    document.title = "Some really cool posts to see.";
  }, []);
  return (
    <div>
      {loading && <LoadScreen message="Please wait a minute.... " />}
      {posts.map((postData) => (
        <PostPreviewDisplayer
          key={postData.id}
          pID={postData.id}
          postTitle={postData.title}
        />
      ))}
    </div>
  );
};
export default PostFetcher;
