import { PageShell } from '@/components/PageShell';
import { calendar, contentIdeas, kpiCards, profitLevers } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <PageShell
      title="Revenue Control Center"
      subtitle="Track the workflows that increase client retention, reduce fulfillment cost, and grow account value."
    >
      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        {kpiCards.map((kpi) => (
          <article key={kpi.label} className="card kpi">
            <div>
              <p className="muted" style={{ margin: 0 }}>{kpi.label}</p>
              <p className="value">{kpi.value}</p>
            </div>
            <span className="badge success">{kpi.change}</span>
          </article>
        ))}
      </section>

      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        <article className="card">
          <h3 className="sectionTitle">High-ROI Pipeline</h3>
          {contentIdeas.map((item) => (
            <div key={item.title} className="listRow">
              <span>{item.channel} · {item.title}</span>
              <span className={`badge ${item.roi === 'High' ? 'success' : 'warning'}`}>{item.roi} ROI</span>
            </div>
          ))}
        </article>
        <article className="card">
          <h3 className="sectionTitle">Publishing Readiness</h3>
          {calendar.map((item) => (
            <div key={item.day + item.platform} className="listRow">
              <span>{item.day} · {item.platform} · {item.topic}</span>
              <span className="badge">{item.stage}</span>
            </div>
          ))}
        </article>
      </section>

      <section className="card">
        <h3 className="sectionTitle">Profit Levers This Week</h3>
        {profitLevers.map((lever) => (
          <div key={lever.name} className="listRow">
            <span>{lever.name}</span>
            <span className="muted">{lever.impact} · {lever.owner}</span>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
