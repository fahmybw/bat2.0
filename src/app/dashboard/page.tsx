import { PageShell } from '@/components/PageShell';
import { calendar, contentIdeas, kpiCards, profitLevers } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <PageShell title="Dashboard" subtitle="A cleaner command center for execution speed and account profitability.">
      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        {kpiCards.map((kpi) => (
          <article key={kpi.label} className="card metric">
            <div>
              <p className="muted" style={{ margin: 0 }}>{kpi.label}</p>
              <strong>{kpi.value}</strong>
            </div>
            <span className="badge">{kpi.change}</span>
          </article>
        ))}
      </section>

      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        <article className="card">
          <h3 className="sectionTitle">High impact content queue</h3>
          {contentIdeas.map((item) => (
            <div key={item.title} className="kv"><span>{item.channel} · {item.title}</span><span className="muted">{item.roi}</span></div>
          ))}
        </article>
        <article className="card">
          <h3 className="sectionTitle">Upcoming schedule</h3>
          {calendar.map((item) => (
            <div key={item.day + item.platform} className="kv"><span>{item.day} · {item.platform}</span><span className="muted">{item.state}</span></div>
          ))}
        </article>
      </section>

      <section className="card">
        <h3 className="sectionTitle">Profit levers</h3>
        {profitLevers.map((lever) => (
          <div key={lever.name} className="kv"><span>{lever.name}</span><span className="muted">{lever.impact}</span></div>
        ))}
      </section>
    </PageShell>
  );
}
