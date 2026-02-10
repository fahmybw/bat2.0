import { PageShell } from '@/components/PageShell';
import { calendar } from '@/lib/mockData';

export default function ContentCalendarPage() {
  return (
    <PageShell title="Content Calendar" subtitle="Visual campaign planning with timeline clarity and channel pacing insights.">
      <section className="visualPanel" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Weekly Timeline</h3>
          <div className="timeline">
            {calendar.map((item) => (
              <div key={item.day + item.platform} className="timelineItem">
                <strong>{item.day}</strong> · {item.platform}
                <p className="muted" style={{ margin: '6px 0 0' }}>{item.topic} · {item.state}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Publishing Balance</h3>
          <div className="channelBars">
            <div className="barRow"><span>Video</span><div className="barTrack"><div className="barFill" style={{ width: '82%' }} /></div><span>82</span></div>
            <div className="barRow"><span>Carousel</span><div className="barTrack"><div className="barFill" style={{ width: '58%' }} /></div><span>58</span></div>
            <div className="barRow"><span>Shorts</span><div className="barTrack"><div className="barFill" style={{ width: '76%' }} /></div><span>76</span></div>
          </div>
          <button className="btn secondary">Rebalance week</button>
        </article>
      </section>

      <section className="card">
        <h3 className="sectionTitle">Approval Queue</h3>
        {calendar.map((item) => (
          <article key={`${item.day}-${item.platform}`} className="subtle" style={{ marginBottom: 10 }}>
            <p style={{ marginTop: 0 }}><strong>{item.day}</strong> · {item.platform} · {item.topic}</p>
            <p className="muted">Status: {item.state} · Stage: {item.stage}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button className="btn">Approve</button>
              <button className="btn ghost">Regenerate</button>
              <button className="btn secondary">Reject</button>
              <button className="btn secondary">Schedule cross-post</button>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
