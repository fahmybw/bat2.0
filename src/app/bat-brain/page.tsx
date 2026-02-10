import { PageShell } from '@/components/PageShell';

export default function BatBrainPage() {
  return (
    <PageShell title="BAT Brain" subtitle="Upload sources and run memory workflows for smarter outputs.">
      <section className="grid grid-2">
        <article className="card stack">
          <h3 className="sectionTitle">Add Data Source</h3>
          <label>Source Name<input className="input" placeholder="Website, Notion, Brand Docs" /></label>
          <label>URL or reference<textarea className="input" rows={3} placeholder="https://example.com/about" /></label>
          <button className="btn">Save Source</button>
        </article>
        <article className="card stack">
          <h3 className="sectionTitle">Memory Workflows</h3>
          <p className="muted">Automations parse, summarize, and update your brand memory daily.</p>
          <label>Workflow frequency<select className="input"><option>Daily</option><option>Weekly</option></select></label>
          <button className="btn secondary">Run Sync Now</button>
        </article>
      </section>
    </PageShell>
  );
}
