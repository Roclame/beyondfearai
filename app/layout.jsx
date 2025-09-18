import "../styles/globals.css";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Beyond Fear AI",
  description: "Parasol architecture for safe, structured AI.",
};

const Nav = () => (
  <nav className="flex flex-wrap gap-3 items-center">
    {["", "vision", "core-kernel", "ai-managers", "specializations", "governance", "applications"].map((p) => (
      <Link key={p || "home"} href={`/${p}`} className="px-3 py-1.5 rounded-full border hover:bg-slate-100 text-sm">
        {p === "" ? "Home" : p.replace("-", " ").replace("-", " ")}
      </Link>
    ))}
  </nav>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-semibold tracking-tight">
              Beyond Fear AI <span className="text-xs ml-2 border rounded-full px-2 py-0.5">Parasol v1</span>
            </div>
            <Nav />
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t py-6">
          <div className="max-w-5xl mx-auto px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Beyond Fear AI</span>
            <span>Built with structure, not fear.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
