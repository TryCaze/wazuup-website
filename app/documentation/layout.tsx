"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className={`flex-1 overflow-y-auto p-6 transition-all duration-300`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold text-blue-400"
          >
            Home
          </Link>

          <button
            className="sm:hidden rounded-lg bg-gray-800 p-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu />
          </button>
        </div>

        {children}
      </main>
    </div>
  );
}