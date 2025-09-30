"use client";

import { motion } from "framer-motion";
import { Binoculars, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-black" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <div className="space-y-6 relative">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-blue-900 text-sm font-semibold text-white">
            App
          </span>

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Made with autism✨
          </h1>

          <p className="text-gray-300 max-w-md">
            An all in one Discord bot for YOUR SERVER! Quote dumb stuff your
            friends sent or deepfry their profile pictures!
            <br />
            Full of silly interaction commands where you can kill, revive or
            headpat your friends :3
          </p>

          <div className="flex gap-4 items-center">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold relative overflow-hidden"
            >
              <motion.span
                className="flex-shrink-0"
                whileHover={{ x: 40, y: -20, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Send width={24} height={24} />
              </motion.span>
              Invite Wazuup!
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold"
            >
              <Binoculars />
              Explore the Features!
            </Link>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt="Landing illustration"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
