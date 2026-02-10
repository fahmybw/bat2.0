import { PageShell } from '@/components/PageShell';
import { calendar } from '@/lib/mockData';

export default function ContentCalendarPage() {
  return (
    <PageShell title="Content Calendar" subtitle="Operationalize approvals and scheduling with SLA visibility and margin protection.">
      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Scheduler Controls</h3>
          <label>Publishing Window<select className="input"><option>Peak engagement</option><option>Business hours</option><option>Always-on</option></select></label>
          <label>Approval SLA<select className="input"><option>4 hours</option><option>12 hours</option><option>24 hours</option></select></label>
          <label>Fallback Rule<select className="input"><option>Auto-post highest score asset</option><option>Delay until approval</option></select></label>
          <button className="btn">Apply Rules</button>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Calendar ROI Insights</h3>
          <div className="listRow"><span>Predicted weekly reach</span><span className="badge success">+22%</span></div>
          <div className="listRow"><span>On-time approvals</span><span className="badge">89%</span></div>
          <div className="listRow"><span>At-risk posts</span><span className="badge warning">3 assets</span></div>
          <button className="btn secondary">Send risk digest to team</button>
        </article>
      </section>

      <section className="card">
        {calendar.map((item) => (
          <article key={item.day + item.platform} className="subtle" style={{ marginBottom: 10 }}>
            <p style={{ marginTop: 0 }}><strong>{item.day}</strong> · {item.platform} · {item.topic}</p>
            <p className="muted">Status: {item.state} · Stage: {item.stage}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button className="btn">Approve</button>
              <button className="btn ghost">Regenerate</button>
              <button className="btn secondary">Reject</button>
              <button className="btn secondary">Schedule Cross-post</button>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
