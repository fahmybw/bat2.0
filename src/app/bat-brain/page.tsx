import { PageShell } from '@/components/PageShell';

export default function BatBrainPage() {
  return (
    <PageShell title="BAT Brain" subtitle="Your intelligence layer for brand memory, references, and workflow automation.">
      <section className="grid grid-2">
        <article className="card stack">
          <h3 className="sectionTitle">Add source</h3>
          <label>Source type<select className="input"><option>Website</option><option>Notion</option><option>Drive</option><option>CSV</option></select></label>
          <label>Name<input className="input" placeholder="Brand positioning docs" /></label>
          <label>Reference<textarea className="input" rows={3} placeholder="https://example.com" /></label>
          <button className="btn">Sync source</button>
        </article>
        <article className="card stack">
          <h3 className="sectionTitle">Automation</h3>
          <label>Frequency<select className="input"><option>Every 12 hours</option><option>Daily</option><option>Weekly</option></select></label>
          <label>Strictness<select className="input"><option>High precision</option><option>Balanced</option><option>Fast draft</option></select></label>
          <div className="kv"><span>Estimated revision reduction</span><span className="muted">31%</span></div>
          <div className="kv"><span>Estimated response quality lift</span><span className="muted">22%</span></div>
          <button className="btn secondary">Run now</button>
        </article>
      </section>
    </PageShell>
  );
}
