import PostPreviewDisplayer from "./PostPreviewDisplayer";

const PostFetcher = ({
  onPreviewClick,
}: {
  onPreviewClick: (pID: string) => void;
}) => {
  return (
    <div className="mt-4">
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="How much chaos is too much chaos"
        postPTxt="Whether you've been through things you hated or thorught something all it takes maybe its all..."
      />
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="Why paramathma is a classic and why you should watch it"
        postPTxt="I have seen lot of films and some films really make me watch it again and again and one of them is this..."
      />
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="Nothing fancy!"
        postPTxt="So many days of hardwork to prove one thing and here I am "
      />
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="Nothing fancy!"
        postPTxt="So many days of hardwork to prove one thing and here I am "
      />
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="Nothing fancy!"
        postPTxt="So many days of hardwork to prove one thing and here I am "
      />
      <PostPreviewDisplayer
        onPreviewClick={onPreviewClick}
        pID="345"
        postTitle="Nothing fancy!"
        postPTxt="So many days of hardwork to prove one thing and here I am "
      />
    </div>
  );
};
export default PostFetcher;
