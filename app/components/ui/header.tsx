"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { BsDiscord, BsGithub } from "react-icons/bs";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-transparent backdrop-blur-md
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-white">
            <Image src={"/logo.png"} alt="Logo" height={32} width={32} />
          </Link>

          <nav className="hidden md:flex gap-6 text-white">
            <Link href="#features">Features</Link>
            <Link href="/documentation">Docs</Link>
            <Link href="#">Invite</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-white">
          <Link href="https://discord.gg/aEjafzsPe9"><BsDiscord className="w-5 h-5 cursor-pointer" /></Link>
          <Link href="https://github.com/TryCaze/wazuup"><BsGithub className="w-5 h-5 cursor-pointer" /></Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col items-start gap-4 px-6 py-4 bg-transparent text-white md:hidden">
          <Link href="#features">Features</Link>
          <Link href="/documentation">Docs</Link>
          <Link href="#">Invite</Link>
        </nav>
      )}
    </header>
  );
}