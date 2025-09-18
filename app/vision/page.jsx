export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Vision</h1>
        <div className="mt-3 space-y-3">
          <p className='text-slate-700'>AI should not be feared. Fear comes from lack of structure, lack of rules, and lack of clarity.</p>\n<p className='text-slate-700'>We treat AI as a toolbox—each tool has a purpose, limits, and audit trails. Humans hold the master switch.</p>\n<ul className='list-disc pl-6 space-y-1 text-slate-700'>\n  <li>Clear boundaries beat vague promises.</li>\n  <li>Air-gapped core; managers distribute, not invent.</li>\n  <li>Online work belongs to specializations, under policy and audit.</li>\n  <li>Fail-safes, explainability, separation of duties.</li>\n</ul>\n
        </div>
      </section>
    </div>
  );
}
