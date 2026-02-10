import { PageShell } from '@/components/PageShell';
import { calendar } from '@/lib/mockData';

export default function ContentCalendarPage() {
  return (
    <PageShell title="Content Calendar" subtitle="Approve, reject, regenerate, and schedule cross-channel campaigns.">
      <section className="card">
        {calendar.map((item) => (
          <article key={item.day + item.platform} className="card" style={{ marginBottom: 10 }}>
            <p style={{ marginTop: 0 }}><strong>{item.day}</strong> · {item.platform} · {item.topic}</p>
            <p className="muted">Current status: {item.state}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn">Approve</button>
              <button className="btn secondary">Regenerate</button>
              <button className="btn secondary">Reject</button>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
