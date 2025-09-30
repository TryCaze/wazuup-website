import Image from "next/image";
import Link from "next/link";

export default function Cat() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Cat
        </h1>
        <p className="text-lg text-gray-400">
          Get random cat pictures from the Internet with a single command.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /cat
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
          The <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/cat</code> command fetches a random cat picture from{" "}
          <Link
            href="https://thecatapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            The Cat API
          </Link>{" "}
          and sends it in an embed. A button is included so you can instantly fetch another cat without
          re-typing the command.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/cat-feature.png"
            alt="Cat Example"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/cat</code>{" "}
          command, showing a random cat picture with a &quot;Get Another Cat!&quot; button.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
          Here&apos;s how the <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/cat</code> command works:
        </p>
        <p className="mb-4">
          <p className="text-2xl mt-4">Behavior:</p>
          <br />
          - Each time you run the command, a random cat picture is fetched. <br />
          - A clickable button lets you get another cat instantly. <br />
          - Buttons remain active for <strong>15 seconds</strong> before they automatically disable. <br />
          - You can only use the button if you triggered the command. <br />
          <br />
          <p className="text-2xl mt-4">Limits:</p>
          <br />
          - Each user has a <strong>5 second cooldown</strong> between cat requests. <br />
          - The bot has a global monthly API usage cap (10,000 requests). <br />
          - If the limit is hit, the bot replies: <em>&quot;I ran out of cats this month sorry :(&quot;</em>. <br />
          <br />
          <p className="text-2xl mt-4">Response:</p>
          <br />
          - The bot sends a cute cat embed with the title <em>&quot;Meow :3&quot;</em>. <br />
          - The embed includes the user who requested the image.<br />
          - Button interaction updates the message with a fresh cat image.<br />
          <p className="text-2xl mt-4">Error Handling:</p>
          <br />
          - If the cat service is too slow, you get: <em>&quot;The cat API is taking too long to respond!&quot;</em> <br />
          - If something else goes wrong, the bot falls back to: <em>&quot;Failed to fetch a cat picture. Please try again later!&quot;</em> <br />
          <br />
          <strong className="text-2xl">
            If an error does occur, please report it so it can be fixed. Thank you (* ^ ω ^)
          </strong>
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