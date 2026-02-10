import { PageShell } from '@/components/PageShell';
import { calendar } from '@/lib/mockData';

export default function ContentCalendarPage() {
  return (
    <PageShell title="Content Calendar" subtitle="A visually clearer timeline for approvals, pacing, and cross-channel execution.">
      <section className="splitVisual" style={{ marginBottom: 16 }}>
        <article className="card">
          <h3 className="sectionTitle">Weekly timeline</h3>
          <div className="timeline">
            {calendar.map((item) => (
              <div key={item.day + item.platform} className="timelineItem">
                <strong>{item.day}</strong> · {item.platform}
                <p className="muted" style={{ margin: '6px 0 0' }}>{item.topic} · {item.stage}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Mix health</h3>
          <div className="barRow"><span>Video</span><div className="barTrack"><div className="barFill" style={{ width: '84%' }} /></div><span>84</span></div>
          <div className="barRow"><span>Shorts</span><div className="barTrack"><div className="barFill" style={{ width: '73%' }} /></div><span>73</span></div>
          <div className="barRow"><span>Carousel</span><div className="barTrack"><div className="barFill" style={{ width: '59%' }} /></div><span>59</span></div>
          <button className="btn secondary">Auto rebalance</button>
        </article>
      </section>

      <section className="card tableLike">
        <h3 className="sectionTitle">Approval queue</h3>
        {calendar.map((item) => (
          <div key={`${item.day}-${item.platform}`} className="tableRow">
            <span>{item.topic}</span>
            <span className="muted">{item.platform}</span>
            <span className="muted">{item.state}</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button className="btn">Approve</button>
              <button className="btn secondary">Regenerate</button>
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
