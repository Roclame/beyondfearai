export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
        Beyond Fear AI
      </h1>

      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
        Beyond Fear AI explores a new structure for artificial intelligence —
        one that removes fear and embraces transparency.  
        A core kernel, guided by AI managers, with specialized units connected
        to the outside world.  
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        <div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-5 hover:ring-indigo-600 transition">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            🌐 The Vision
          </h2>
          <p className="text-slate-400 text-sm">
            A safe AI architecture that balances innovation with human oversight.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-5 hover:ring-indigo-600 transition">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            🧩 The Structure
          </h2>
          <p className="text-slate-400 text-sm">
            A parasol model: core kernel, AI managers, specializations, and applications.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-5 hover:ring-indigo-600 transition">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            🛡 Governance
          </h2>
          <p className="text-slate-400 text-sm">
            Fail-safes, blackbox protocols, and ethical alignment.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-5 hover:ring-indigo-600 transition">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            🚀 Applications
          </h2>
          <p className="text-slate-400 text-sm">
            From research to real-world systems — built with trust, not fear.
          </p>
        </div>
      </div>
    </section>
  );
}
