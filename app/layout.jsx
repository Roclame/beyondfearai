import "../styles/globals.css";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Beyond Fear AI",
  description: "Parasol architecture for safe, structured AI.",
};

const Nav = () => (
  <nav className="flex flex-wrap gap-2 items-center">
    {["", "vision", "core-kernel", "ai-managers", "specializations", "governance", "applications"].map((p) => (
      <Link
        key={p || "home"}
        href={`/${p}`}
        className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition"
      >
        {p === "" ? "Home" : p.replace("-", " ").replace("-", " ")}
      </Link>
    ))}
  </nav>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 antialiased">
        <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-semibold tracking-tight">
              Beyond Fear AI{" "}
              <span className="text-xs ml-2 border border-slate-700 rounded-full px-2 py-0.5 text-slate-300">
                Parasol v1
              </span>
            </div>
            <Nav />
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="rounded-2xl bg-slate-900/60 ring-1 ring-slate-800 p-6">
            {children}
          </div>
        </main>

        <footer className="border-t border-slate-800 py-6">
          <div className="max-w-5xl mx-auto px-4 text-sm text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Beyond Fear AI</span>
            <span>Built with structure, not fear.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
