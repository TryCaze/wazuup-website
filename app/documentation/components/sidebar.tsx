"use client";

import { ArrowLeft } from "lucide-react";
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
  { href: "/documentation/ping", label: "Ping" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-gray-800 bg-background p-6">
      <Link href="/" className="mb-6 flex items-center gap-2 text-xl font-semibold text-blue-400">
        <ArrowLeft />
        Home
      </Link>
      <h2 className="mb-6 text-2xl font-semibold text-foreground">Docs</h2>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 transition-colors ${
                isActive
                  ? "bg-gray-800 text-accent"
                  : "text-gray-300 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
