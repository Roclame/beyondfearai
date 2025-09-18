export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Applications</h1>
        <div className="mt-3 space-y-3">
          <p className='text-slate-700'>Critical infrastructure resilience (ports, logistics, energy).</p>\n<p className='text-slate-700'>Safe medical/legal support under guardrails.</p>\n<p className='text-slate-700'>Transparent risk communication without fear-mongering.</p>\n<p className='text-slate-700'>Predictive scenarios with human-in-the-loop validation.</p>\n<ul className='list-disc pl-6 space-y-1 text-slate-700'>\n  <li>Add case pages later (e.g., Rotterdam, medication flows, public comms).</li>\n</ul>\n
        </div>
      </section>
    </div>
  );
}
