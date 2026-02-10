import { PageShell } from '@/components/PageShell';
import { calendar, contentIdeas } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <PageShell title="Dashboard" subtitle="Manage your strategy, content pipeline, and upcoming posts in one place.">
      <section className="grid grid-2">
        <article className="card">
          <h3 className="sectionTitle">Content Pipeline</h3>
          {contentIdeas.map((item) => (
            <p key={item.title} className="muted">{item.channel}: {item.title} — {item.status}</p>
          ))}
        </article>
        <article className="card">
          <h3 className="sectionTitle">This Week Calendar</h3>
          {calendar.map((item) => (
            <p key={item.day + item.platform} className="muted">{item.day} · {item.platform} · {item.topic} · {item.state}</p>
          ))}
        </article>
      </section>
    </PageShell>
  );
}
