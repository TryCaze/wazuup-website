import Image from "next/image";

export default function Caption() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Caption
        </h1>
        <p className="text-lg text-gray-400">
          Add text on top of an image to create a captioned picture.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="mb-4">
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            /caption
          </code>{" "}
          <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            url
          </code>
          <code className="bg-[#2f3136] text-[#dbdbdb] ml-1 px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">
            image
          </code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What it does</h2>
        <p className="mb-6">
          The <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/caption</code> command lets you take any image and add a custom text banner
          at the top. This is useful for memes, jokes, labels, or quick image annotations.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-700 shadow-lg mb-4">
          <Image
            src="/commands/caption-feature.png"
            alt="Caption Example"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Example output of the <code className="bg-[#2f3136] text-[#dbdbdb] px-1 rounded font-mono text-xs border border-[#23272a]">/caption</code>{" "}
          command with text added at the top of the image.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More information</h2>
        <p className="mb-4">
          Here&apos;s how the <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">/caption</code> feature works:
        </p>
        <p className="mb-4">
          <p className="text-2xl mt-4">Behavior:</p>
          <br />
          - You provide text that will appear above the image. <br />
          - You can either upload an image file <strong>or</strong> provide a direct image URL. <br />
          - If both are given, the uploaded file takes priority. <br />
          - Supported formats: <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">.png</code>, <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">.jpg</code>, <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">.jpeg</code>, <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">.webp</code>, <code className="bg-[#2f3136] text-[#dbdbdb] px-2 py-1 rounded-md font-mono text-sm border border-[#23272a]">.gif</code>. <br />
          - Maximum file size: <strong>10MB</strong>.
          
          <br />
          <p className="text-2xl mt-4">Image Handling:</p>
          <br />
          - A white banner is automatically added above the image. <br />
          - Your text is centered inside this banner. <br />
          - The font size adjusts dynamically so the caption always fits the width. <br />
          - Large images (over 4000x4000px) are rejected to prevent issues. <br />
          - The final result is returned as a PNG file. <br />
          
          <br />
          <p className="text-2xl mt-4">Response:</p>
          <br />
          - The bot replies with your captioned image. <br />
          - Message includes a small note: <em>&quot;Here is your image vro&quot;</em>. <br />
          
          <br />
          <p className="text-2xl mt-4">Error Handling:</p>
          <br />
          If something goes wrong, the bot will explain why: <br />
          - ❌ Image too large (over 10MB). <br />
          - ❌ Dimensions too large (over 4000px). <br />
          - ❌ Invalid or unsupported image type. <br />
          - ❌ Image failed to load (timeout or bad URL). <br />
          - ❌ User didn&apos;t provide an image at all. <br />
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