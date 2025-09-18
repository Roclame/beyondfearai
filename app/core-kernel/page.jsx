export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Core Kernel</h1>
        <div className="mt-3 space-y-3">
          <p className='text-slate-700'>Offline by design: no internet connection, no network stack.</p>\n<p className='text-slate-700'>One-time blackbox seal (HSM/TPM) with unreadable key & protocol.</p>\n<p className='text-slate-700'>Policy Engine: allow/deny rules, capability-based APIs.</p>\n<p className='text-slate-700'>Local memory: encrypted, append-only, explainable logs.</p>\n
        </div>
      </section>
    </div>
  );
}
