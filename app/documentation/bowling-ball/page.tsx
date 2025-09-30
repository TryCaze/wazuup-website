import Image from "next/image";

export default function BowlingBall() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Bowling Ball
        </h1>
        <p className="text-lg text-gray-400">
          I felt a little creative so I made a Bowling Ball instead of an 8-ball because I like bowling.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /bowlingball
          </code>{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            question
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
            Ask the Bowling Ball a question and it will show you his wisdom.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/ball-feature.png"
            alt="Banner"
            width={600}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/bowlingball</code> 
          command, showing me fight my own creation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
            Here is the basics.
        </p>
        <p className="mb-4">
            Bot chooses a random response from the selction
            <br />
            That is literally it.
            <br />
            Yes I say that the bot starts behaving like its begging you to leave it alone but that is just from my personal use and its funny when it does that but I did not code that in I promise.
            <br />
            There is a special response :3
          <p className="text-2xl mt-4">Error Handling:</p>
          <br />
          If fetching fails, the error is logged, and the bot replies with a fallback error message.
          <br />
          <strong className="text-2xl">If an error does occur please report. Thank you (* ^ ω ^)</strong>
        </p>
      </section>

      <footer className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Wazuup</span>. 
          Built with <span className="text-accent">NodeJS</span> &{" "}
          <span className="text-accent">Typescript</span>.
        </p>
      </footer>
    </article>
  );
}