import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to the Documentation
        </h1>
        <p className="text-lg text-gray-400">
          This is a Discord bot. It should be pretty straight forward how it works, but just in case some of you do not understand basic commands I spent 4 hours making this. I hope it was at least useful to one person.
          All documentation is optimized for{" "}
          <span className="font-semibold text-accent">dark mode</span> to reduce
          eye strain.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          To get started invite the bot to your server or authorise it to your account.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The logo</h2>
        <p className="mb-6">
          I have no idea what to put in the introudtion section man it is a basic Discord bot.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg">
          <Image
            src="/logo.png"
            alt="Project folder structure"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sections</h2>
        <p className="mb-4">
          Every command the bot supports as the latest of 29.9.2025.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2 flex flex-col">
          <li>
            <Link
              href="/documentation/avatar"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Avatar
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/banner"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Banner
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/bowling-ball"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Bowling Ball
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/caption"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Caption
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/cat"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Cat
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/count"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Count
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/deepfry"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Deepfry
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/interactions"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Interactions
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/ping"
              className="font-semibold text-accent hover:underline hover:text-accent/80 transition"
            >
              Ping
            </Link>
          </li>
        </ul>
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