import Link from "next/link";
import NavBar from "../miniComps/NavBar";

const Article: React.FC = () => {
  return (
    <div className="main-holder  overflow-x-hidden">
      <NavBar />

      <div>
        <article className="md:major-sec md:mx-auto ">
          <h1
            style={{ fontWeight: "700" }}
            className="h1forMob boldonse text-3xl md:text-5xl  leading-relaxed px-3 md:px-8 text-center mt-8 md:leading-relaxed  "
          >
            All these memories will fade just like tears in rain
          </h1>
          <div className=" px-6 md:px-28 mt-6">
            <p className="text-md lsp  leading-normal md:p inter--font text-center">
              A small but powerfull way to {""}
              <span className="italic text-primaryPink">
                journal and write musings on your life{" "}
              </span>
              without being too flashy. Twiinkle lets you to be yourself and
              moreover you don't need to seek validations from others to what
              you love about. Just get twiinklized. Oh, we also forgot to tell
              you that memories can be corrupted. We need a way to document it
              and tell your adventures like a mythological book. All these while
              getting twiinkles. What you waiting for, join the twiinkle
              adventure by joining it only once
            </p>
          </div>
          <div className="flex justify-center inter--font items-center mt-6">
            <Link href="/login">
              <button className="hero-btn text-xl bg-primaryPink hover:bg-btnHoverCol transition duration-300 text-white">
                Twiinkle
              </button>
            </Link>
          </div>
        </article>

        <section className="md:major-sec md:mx-auto mt-20">
          <div className="px-4 md:px-16 min-h-screen">
            <h2 className="text-2xl md:text-3xl boldonse ">
              You might want to ask?
            </h2>
            <div className="mt-6">
              {/* <AccordionComp
                question={"Are we legit?"}
                answer={
                  "Once in a while you should believe in something. We might not match what others are providing now. We hope to provide a quintessential and fun journalling experience. We don't charge any money to start journey."
                }
              /> */}
              {/* <AccordionComp
                question={"Is my entry encrypted?"}
                answer={
                  "As of now, your entry is not encrypted. As the 'twiinkle' is still in development we didn't do any encryption to make your journal entry encrypted. But in the future, I'm gonna implement encryption to make the journal entry more secure and more private. "
                }
              />
              <AccordionComp
                question={"Can I transfer my journal entries to others?"}
                answer={
                  "As a person who loves to try different things. I want to make this app a vendor lock-in free site. As of now we don't provide any way to transfer datas. But in the future you could jump on to other journal site if we make the journalling very hard. We know our friendship with you will last long till the sun dies. But we still make this thing a open space "
                }
              />
              <AccordionComp
                question={"Got something else?"}
                answer={
                  "You might have any other questions. We love to hear that too. Your voice counts too. Just go to contact/help to find the answer. "
                }
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Article;
