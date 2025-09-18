export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Specializations</h1>
        <div className="mt-3 space-y-3">
          <p className='text-slate-700'>Modular agents allowed online for retrieval/processing.</p>\n<p className='text-slate-700'>Always sandboxed, least-privilege, fully audited.</p>\n<ul className='list-disc pl-6 space-y-1 text-slate-700'>\n  <li>Search & Retrieval: browsing, document fetching, citation checks.</li>\n  <li>Data ETL & Cleaning: parsing, scrubbing, anonymization.</li>\n  <li>Domain Experts: medical, legal, technical, logistics, communications.</li>\n  <li>Safety & Red-Team: prompt-injection detection, model stress-tests.</li>\n</ul>\n
        </div>
      </section>
    </div>
  );
}
