import Image from "next/image";

export default function Avatar() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Avatar
        </h1>
        <p className="text-lg text-gray-400">
          Fetching a users avatar (profile picture).
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /avatar
          </code>{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            user
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
          I dont know.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/avatar-feature.png"
            alt="Avatar"
            width={400}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/avatar</code> command, showing a user&apos;s profile picture.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
          To show I did not just put this up because I was bored I explained how the code works.
        </p>
        <p className="mb-4">
            Fetches and displays a user&apos;s Discord avatar in an embed.
            <br />
            <p className="text-2xl mt-4">Behavior:</p>
            <br />
            If a `user` option is provided, it fetches that user&apos;s avatar.
            <br />
            If no `user` is provided, it defaults to the command invoker&apos;s avatar.
            <br />
            <strong>Bot users are ignored (command replies that avatars for bots are not fetched).</strong>
            
            <br />
            <p className="text-2xl mt-4">Avatar Handling:</p>
            <br />
            Checks if the user&apos;s avatar is animated (`a_` prefix in the avatar hash).
            <br />
            Uses `.gif` format for animated avatars, otherwise `.png`.
            <br />
            Fetches the avatar at 1024px resolution for high quality.
            <br />
            <p className="text-2xl mt-4">Response:</p>
            <br />
            Sends an embed containing:
            <br />
            - The requested user&apos;s avatar as an image.
            <br />
            - User&apos;s name.
            <br />
            - User who requested the command.
            <br />
            - Timestamp for context.
            <br />
            
            <br />
            Error Handling:
            <br />
            If fetching fails, logs the error and replies with an error message.
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