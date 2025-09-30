import Image from "next/image";

export default function Introduction() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Counting Game
        </h1>
        <p className="text-lg text-gray-400">
          A collaborative counting game where players must count in order without making mistakes.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /count
          </code>{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            number
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
          The <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/count</code> command is a simple multiplayer game: everyone in the server works
          together to count upwards from 1. Each player takes turns submitting the next number in
          sequence. Sounds easy, right? But there are some rules...
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/counting-feature.png"
            alt="Counting Game Example"
            width={600}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/count</code>{" "}
          game showing the current number and leaderboard.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
          Here&apos;s how the counting game works:
        </p>
        <p className="mb-4">
          <div className="text-2xl mt-4">Rules:</div>
          <br />
          - Players must count in order (1, 2, 3, …). <br />
          - You cannot count twice in a row (wait for another player before playing again). <br />
          - You must wait 5 seconds before you can play again (cooldown). <br />
          - If the wrong number is given, the streak resets back to 0. <br />
          
          <br />
          <p className="text-2xl mt-4">Feedback:</p>
          <br />
          - Correct numbers get a random success message like <em>&quot;Nice!&quot;</em> or
            <em>&quot;Meow :3&quot;</em>. <br />
          - Incorrect numbers trigger responses such as <em>&quot;Bruh.&quot;</em> or
            <em>&quot;HOW DID YOU GET THAT WRONG.&quot;</em>. <br />
          - When someone fails, the bot tells everyone what the correct number should have been and
            announces the streak that just ended. <br />
          
          <br />
          <p className="text-2xl mt-4">Leaderboard:</p>
          <br />
          - The game tracks each user&apos;s stats: how many correct counts they&apos;ve made, and their accuracy. <br />
          - A leaderboard shows the top 10 players with the most correct counts. <br />
          - Accuracy percentage is displayed alongside their total. <br />
          
          <br />
          <p className="text-2xl mt-4">Goal:</p>
          <br />
          The goal is simple: work together with your server to see how high you can count without failing.
          Keep the streak alive as long as possible and climb the leaderboard!
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
