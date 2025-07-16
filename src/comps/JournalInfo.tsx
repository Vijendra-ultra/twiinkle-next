import Link from "next/link";

const JournalInfo: React.FC = () => {
  return (
    <div className="mt-16 ">
      <h1 className="text-4xl lsp md:text-5xl boldonse text-center leading-snug md:leading-relaxed  text-primaryPink">
        Turn Your Chaos into Chronicles{" "}
      </h1>{" "}
      <h2 className="text-2xl md:text-4xl playfair mt-4 md:mt-5 text-center">
        {" "}
        Start Documenting Your Delightfully Weird Life!
      </h2>
      <div className="md:px-12 mt-3 md:mt-6">
        <p className="md:p p-ssm text-center px-4 md:px-0 text-black">
          Ever thought of documenting your life in a digital space which you can
          read to feel nostalghic about. Twiinkle makes documenting your life
          easy and fun. You could etch those memories or learnings in a space
          which never goes away.
          <span className=" ml-0.5 italic  text-black pb-0.5 pr-1">
            {" "}
            Welcome to twiinkle then....
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center pb-6 md:pb-0 mt-8">
        <button className="hero-btn text-xl bg-primaryPink hover:bg-btnHoverCol transition duration-300 text-white">
          <Link href="/journal">Start journaling</Link>
        </button>
      </div>
    </div>
  );
};
export default JournalInfo;
