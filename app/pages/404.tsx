import Image from "next/image";
import Link from "next/link";

export default function notfound() {
    return (
        <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl p-6">
        
        <div className="flex justify-center items-center">
          <Image
            src="/sad-wumpus.gif"
            alt=":("
            className="w-full max-w-sm"
            width={128}
            height={128}
          />
        </div> 
        
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <p className="mt-4 text-lg text-white">
            Oops! The page you are looking for dose not exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-purple-600 text-white px-5 py-3 rounded-xl shadow hover:bg-purple-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
    )
}