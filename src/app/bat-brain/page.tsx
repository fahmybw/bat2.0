import { PageShell } from '@/components/PageShell';

export default function BatBrainPage() {
  return (
    <PageShell
      title="BAT Brain"
      subtitle="Increase output quality and reduce revision cycles with stronger memory coverage."
    >
      <section className="grid grid-2">
        <article className="card stack">
          <h3 className="sectionTitle">Data Ingestion</h3>
          <label>Source Type<select className="input"><option>Website</option><option>Notion</option><option>Drive Folder</option><option>CSV</option></select></label>
          <label>Source Name<input className="input" placeholder="Brand wiki and positioning" /></label>
          <label>URL or reference<textarea className="input" rows={3} placeholder="https://brand.com/about" /></label>
          <label>Revenue Tag<select className="input"><option>Conversion</option><option>Retention</option><option>Expansion</option></select></label>
          <button className="btn">Save Source</button>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Workflow Optimizer</h3>
          <p className="muted">Prioritize sync frequency where stale memory causes delayed approvals or low CTR content.</p>
          <label>Sync Frequency<select className="input"><option>Daily</option><option>Every 12 hours</option><option>Weekly</option></select></label>
          <label>Quality Gate<select className="input"><option>Strict</option><option>Balanced</option><option>Fast Drafting</option></select></label>
          <div className="subtle">
            <p style={{ margin: 0 }}>Estimated impact</p>
            <p className="muted" style={{ marginBottom: 0 }}>12% fewer revisions · 19% faster approvals</p>
          </div>
          <button className="btn secondary">Run Sync Now</button>
        </article>
      </section>
    </PageShell>
  );
}
