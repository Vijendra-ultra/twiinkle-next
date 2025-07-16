import Link from "next/link";
import NavBar from "../miniComps/NavBar";
import AccordionComp from "@/miniComps/Accordion";
const Article: React.FC = () => {
  return (
    <div className="main-holder  overflow-x-hidden">
      <NavBar />

      <div>
        <article className="md:major-sec mx-8 sm:mx-auto ">
          <h1
            style={{ fontWeight: "700" }}
            className="h1forMob boldonse text-3xl md:text-5xl  leading-relaxed  md:px-8 sm:text-center mt-8 md:leading-relaxed  "
          >
            All these memories will fade just like tears in rain
          </h1>
          <div className=" sm:px-6 md:px-28 mt-6">
            <p className="text-md lsp  leading-normal md:p inter--font sm:text-center">
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
          <div className="px-4 md:px-16 ">
            <h2 className="text-2xl md:text-3xl boldonse ">
              You might want to ask?
            </h2>
            <div className="mt-6">
              <AccordionComp
                question={"Are we legit?"}
                answer={
                  "Once in a while you should believe in something. We might not match what others are providing now. We hope to provide a quintessential and fun journalling experience. We don't charge any money however to try this cool thing out."
                }
              />
              <AccordionComp
                question={"Is my entry encrypted?"}
                answer={
                  "As of now, your entry is not encrypted. As the 'twiinkle' is still in development we didn't do any encryption to make your journal entry encrypted. But in the future, We're gonna implement encryption to make the journal entry more secure and more private. "
                }
              />
              <AccordionComp
                question={"Can I transfer my journal entries to others?"}
                answer={
                  "As a person who loves to try different things. If this app rocks, then there's no reason to hold you like a litlle kid. As of now we don't provide any way to transfer datas. But in the future you could jump on to other journal site if our journalling sucks. We also know that you'll never leave us for others."
                }
              />
              <AccordionComp
                question={"Got something else?"}
                answer={
                  "You might have any other questions. We love to hear that too. Your voice counts too. Just go to contact/help to find the answer. "
                }
              />
              <AccordionComp
                question={"Is this cool enough to call my friends?"}
                answer={
                  "Yeah, bring it baby. We think we've made something cool for society. Also if your little cool heart says this is cool, just spread the word my majesty. Cool big things were all small things the people thought cool.  "
                }
              />
            </div>
          </div>
        </section>

        <section className="md:major-sec md:mx-auto mt-20">
          <div className="px-4  md:px-16 min-h-screen ">
            <h2 className="text-2xl  md:text-3xl text-primaryPink  boldonse">
              It was made to share
            </h2>
            <div className="pt-10">
              <h3 className="text-2xl boldonse ">Musings</h3>
              <p className="p pt-3 ">
                Sometimes the coolest things we can share are hidden behind the
                minds just because we think it's weird to say things we love.
                Did you ever see someone talking about deep life stuffs? You
                might have not. We seem to chase something which we're not or
                atleast we want to portray ourselves as someone with no
                problems. Your wisdom about your life can change the life of
                others too. Twiinkle lets ypu write musings in the coolest ways
                possible.
              </p>
              <h3 className="text-2xl boldonse pt-8 ">Blogs</h3>
              <p className="p pt-3 ">
                Ever thought blogging about something really simple or cool. Not
                about something like how to make billions within 24hrs, Fastest
                way to study everything within 3 minutes or this tool helped me
                to make millions by writing. Nowadays blogging has become more
                about selling some shitty courses than giving cool infos. In
                Twiinkle, you can write about anything you find intersting or
                cool. No clickbait, just some cool blogging!
              </p>

              <h3 className="text-2xl boldonse pt-8 ">Timelines</h3>
              <p className="p pt-3 ">
                It's still in beta, but still worth sharing. You might have
                thought about documenting what you've been doing in a journal
                type way.This timeline makes sharing your journey on building
                something cooler easy. It can also help you build some level of
                trust. It's just nostalghic to see what you've made in the long
                run.
              </p>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#271F30" }} className="mt-12">
          <section className="md:major-sec md:mx-auto py-16 md:px-3 px-4  min-h-max">
            <h2
              style={{ color: "#FFE6E8" }}
              className="text-4xl md:text-5xl boldonse leading-snug md:leading-none"
            >
              What's up stranger??
            </h2>
            <div className="mt-8">
              <p className="md:text-xl text-md leading-normal text-gray-100 inter--font">
                Maybe there's been lot going on your life. It's sometimes hard
                to think what's good or bad. Sometimes you just have to jump
                with hope and see what happens next. You might need some time to
                think, but we still be waiting here for you. Anyways, towards
                the chaos there's a way. Cool things take time.
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-5">
              <button
                style={{ backgroundColor: "#fca311" }}
                className="px-5 py-3 text-xl inter--font    rounded-lg"
              >
                <Link href="/signup">Create</Link>
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default Article;
