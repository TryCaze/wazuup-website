import Image from "next/image";

export default function Interactions() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Interaction Commands
        </h1>
        <p className="text-lg text-gray-400">
          Fun social commands that let you interact with other users using GIFs or
          randomized responses.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Commands</h2>
        <p className="mb-4">
          Available interaction commands:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="my-5">
            <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/headpat</code>
          </li>
          <li className="my-5">
            <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/slap</code>
          </li>
          <li className="my-5">
            <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/hug</code>
          </li>
          <li className="my-5">
            <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/kill</code>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What they do</h2>
        <p className="mb-6">
          These commands let you interact with others:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>/headpat</strong> - Sends a cute headpat GIF, showing one user patting another.  
            Includes a button so the target user can pat back within 15 seconds.
          </li>
          <li>
            <strong>/hug</strong> - Sends a warm hug GIF. Like headpat, the hugged user can return
            the hug with a button.
          </li>
          <li>
            <strong>/slap</strong> - Sends a playful slap GIF. The slapped user can slap back
            instantly with the included button.
          </li>
          <li>
            <strong>/kill</strong> - Generates a random funny (and over-the-top) death scenario for
            the chosen user. Unlike the others, it does not use GIFs or buttons.
          </li>
        </ul>

        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/interactions-feature.png"
            alt="Headpat Example"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/headpat</code>{" "}
          command. The target can press a button to headpat back.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">Here’s how these commands behave:</p>

        <p className="text-2xl mt-4">Behavior:</p>
        <br />
        - <strong>/headpat</strong>, <strong>/hug</strong>, and <strong>/slap</strong> send a random GIF embed showing the interaction.<br />
        - The target user gets a <em>&quot;Interact Back&quot;</em> button (e.g., &quot;Headpat them back!&quot;).<br />
        - Buttons remain active for <strong>15 seconds</strong> before they disable automatically.<br />
        - Only the chosen user can press the button.<br />
        - <strong>/kill</strong> replies with a random funny text scenario instead of an embed.<br />

        <p className="text-2xl mt-4">Limits:</p>
        <br />
        - Buttons expire after 15 seconds and cannot be reused.<br />
        - Only the chosen target can trigger the “interact back” button.<br />

        <p className="text-2xl mt-4">Response:</p>
        <br />
        - Commands send colorful embeds with GIFs (except /kill).<br />
        - Descriptions tag both the initiator and the target.<br />
        - If the target interacts back, a second embed is sent showing the reversed action.<br />

        <p className="text-2xl mt-4">Error Handling:</p>
        <br />
        - If something goes wrong, the bot replies with a fallback error message.<br />
            <strong className="text-2xl">
            If an error does occur, please report it so it can be fixed. Thank you (* ^ ω ^)
          </strong>
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