export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Governance & Fail-safes</h1>
        <div className="mt-3 space-y-3">
          <p className='text-slate-700'>Kill-switches at manager and hardware levels.</p>\n<p className='text-slate-700'>Write-once audit trails; explainability by default.</p>\n<p className='text-slate-700'>Red-team exercises (injection, poisoning, supply chain).</p>\n<p className='text-slate-700'>Separation of duties: dev ≠ ops ≠ security ≠ policy.</p>\n
        </div>
      </section>
    </div>
  );
}
