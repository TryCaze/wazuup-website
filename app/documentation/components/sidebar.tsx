"use client";

import { ArrowLeft, X, } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/documentation", label: "Introduction" },
  { href: "/documentation/avatar", label: "Avatar" },
  { href: "/documentation/banner", label: "Banner" },
  { href: "/documentation/bowling-ball", label: "Bowling Ball" },
  { href: "/documentation/caption", label: "Caption" },
  { href: "/documentation/cat", label: "Cat" },
  { href: "/documentation/count", label: "Count" },
  { href: "/documentation/deepfry", label: "Deepfry" },
  { href: "/documentation/interactions", label: "Interactions" },
  { href: "/documentation/ping", label: "Ping" },
];

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-30 flex h-full flex-col bg-background p-6 transition-all duration-300
          w-64 border-r border-gray-800
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        {/* Mobile close button */}
        <div className="mb-6 flex items-center justify-between sm:hidden">
          <h2 className="text-lg font-semibold text-foreground">Menu</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-gray-800 p-2 text-gray-300 hover:bg-gray-700"
          >
            <X />
          </button>
        </div>

        <Link
          href="/"
          className="mb-6 hidden sm:flex items-center gap-2 text-xl font-semibold text-blue-400"
        >
          <ArrowLeft />
          Home
        </Link>
        <h2 className="mb-6 hidden sm:block text-2xl font-semibold text-foreground">
          Docs
        </h2>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`relative flex items-center rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-gray-800 text-accent"
                    : "text-gray-300 hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
