import Image from "next/image";

export default function Deepfry() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Deepfry
        </h1>
        <p className="text-lg text-gray-400">
          Over-saturate, compress, and distort images.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /deepfry
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
          The{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /deepfry
          </code>{" "}
          command takes an uploaded image or a direct image URL and applies multiple layers of artificial
          compression, noise, and color distortion. Enjoy your deepfried creation!
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/deepfry-feature.png"
            alt="Deepfry Example"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">
            /deepfry
          </code>{" "}
          command, showing an image processed with intensity level 4.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">Here&apos;s how the <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/deepfry</code> command works:</p>
        <p className="mb-4">
          <p className="text-2xl mt-4">Behavior:</p>
          <br />
          - You can either paste an image URL or upload a file (.png, .jpg, .jpeg, .webp). <br />
          - An optional <strong>intensity</strong> parameter lets you choose how extreme the effect is (1 = subtle, 5 = maximum fry). <br />
          - The image is then re-rendered and returned deepfried<br />
          <br />
          <p className="text-2xl mt-4">Limits:</p>
          <br />
          - Works only with static image formats (.png, .jpg, .jpeg, .webp). <br />
          - Images must be under <strong>10MB</strong>. <br />
          - Intensity values are capped between <strong>1</strong> (lightly fried) and <strong>5</strong> (completely ruined). <br />
          <br />
          <p className="text-2xl mt-4">Response:</p>
          <br />
          - The bot replies with your deepfried image as an attachment. <br />
          - A short message <em>&quot;DEEPFRIED!!!!!&quot;</em> is sent alongside the result. <br />
          <br />
          <p className="text-2xl mt-4">Error Handling:</p>
          <br />
          - If no valid image is provided, you&apos;ll get: <em>&quot;Provide a valid image URL or attachment&quot;</em>. <br />
          - If the image is invalid, corrupted, or too large, the bot replies:{" "}
          <em>&quot;Could not process the image. Make sure it&apos;s a valid image under 10MB.&quot;</em> <br />
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