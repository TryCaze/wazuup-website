import Image from "next/image";

export default function Banner() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Banner
        </h1>
        <p className="text-lg text-gray-400">
          Fetching a user&apos;s profile banner.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /banner
          </code>{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            user
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
            Idk I forgot.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/banner-feature.png"
            alt="Banner"
            width={600}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/banner</code> 
          command, showing a user&apos;s profile banner.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
          Here&apos;s how it works.
        </p>
        <p className="mb-4">
          Fetches and displays a user&apos;s Discord banner in an embed.
          <br />
          <p className="text-2xl mt-4">Behavior:</p>
          <br />
          If a user option is provided, it fetches that user&apos;s banner.
          <br />
          If no user is provided, it defaults to the command invoker&apos;s banner.
          <br />
          <strong>If the user does not have a banner set, the bot replies with a message instead of an embed.</strong>
          
          <br />
          <p className="text-2xl mt-4">Banner Handling:</p>
          <br />
          Fetches the full user object from Discord to access the banner property.
          <br />
          Checks if the banner is animated (a_ prefix in the hash).
          <br />
          Uses .gif for animated banners, otherwise .png.
          <br />
          Fetches the banner at 1024px resolution for high quality.
          <br />
          <p className="text-2xl mt-4">Response:</p>
          <br />
          Sends an embed containing:
          <br />
          - The requested user&apos;s banner image.
          <br />
          - The user&apos;s name in the embed title.
          <br />
          - The user who requested the command in the footer.
          <br />
          - A timestamp for context.
          <br />
          
          <br />
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