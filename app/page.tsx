import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Beyond Fear AI</h1>
        <p className="text-slate-700 mt-2">
          Fear fades when structure appears. This parasol architecture centers an offline <span className="font-mono">Core Kernel</span>,
          air-gapped <span className="font-mono">AI Managers</span>, and online sandboxed <span className="font-mono">Specializations</span>.
        </p>
        <div className="flex gap-3 mt-3 text-sm">
          <span className="px-2 py-1 rounded-full bg-slate-100 border">Fail-safe</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 border">Explainability</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 border">Human-in-the-loop</span>
        </div>
      </section>

      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold">Quick Diagram</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="rounded-2xl border border-dashed p-6 text-slate-500">
            <Image alt="Parasol Architecture" src="/BFAI_Parasol_Architecture.png" width={800} height={540} />
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 space-y-2">
            <p className="text-sm text-slate-600">Legend</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li><span className="font-mono">Core Kernel</span>: offline, sealed, policy-driven</li>
              <li><span className="font-mono">AI Managers</span>: brokers without internet</li>
              <li><span className="font-mono">Specializations</span>: online modules (sandboxed)</li>
              <li>Interfaces & users: controlled, rate-limited, auditable</li>
            </ul>
            <Link href="/Beyond_Fear_AI_Core_Architecture_with_Diagram.pdf" className="inline-block mt-3 underline">
              Download the Core Architecture PDF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
