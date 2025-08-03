import Link from "next/link";
type postPreviewType = {
  pID: string;
  postTitle: string;
  postPTxt?: string;
};
const PostPreviewDisplayer: React.FC<postPreviewType> = ({
  pID,
  postTitle,
  postPTxt,
}) => {
  return (
    <Link href={`/posts/${pID}`}>
      <div className="mb-1 md:mb-3  flex  flex-col  items-start w-full hover:dark:bg-[#1d2225] hover:bg-[#ddd] rounded-md transition-all duration-400 py-1 md:py-3 px-3">
        <h2 className="text-2xl md:text-3xl lsp fw-max inter--font text-left  dark:text-white">
          {postTitle}
        </h2>
        <p className="mt-1 md:mt-3 dark:text-white  text-left truculenta text-md md:text-xl">
          What do you mean by server side rendering and all.
        </p>
      </div>
    </Link>
  );
};
export default PostPreviewDisplayer;
