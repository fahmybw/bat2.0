import { PageShell } from '@/components/PageShell';
import { contentIdeas } from '@/lib/mockData';

export default function CreateContentPage() {
  return (
    <PageShell title="Create Content" subtitle="Design better assets faster with visual planning and channel performance context.">
      <section className="visualPanel" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Content Studio</h3>
          <label>Platform<select className="input"><option>TikTok</option><option>Instagram</option><option>YouTube</option><option>LinkedIn</option></select></label>
          <label>Campaign Goal<input className="input" placeholder="Increase demo bookings by 20%" /></label>
          <label>Format<select className="input"><option>Short video script</option><option>Carousel</option><option>Caption with hashtags</option><option>Reply templates</option></select></label>
          <label>Primary CTA<input className="input" placeholder="Start free trial" /></label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Generate</button>
            <button className="btn ghost">Generate 3 Variations</button>
            <button className="btn secondary">Save to Library</button>
          </div>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Channel Potential</h3>
          <div className="channelBars">
            <div className="barRow"><span>TikTok</span><div className="barTrack"><div className="barFill" style={{ width: '86%' }} /></div><span>86</span></div>
            <div className="barRow"><span>Instagram</span><div className="barTrack"><div className="barFill" style={{ width: '74%' }} /></div><span>74</span></div>
            <div className="barRow"><span>YouTube</span><div className="barTrack"><div className="barFill" style={{ width: '68%' }} /></div><span>68</span></div>
          </div>
          <p className="muted" style={{ marginBottom: 0 }}>Scores estimate short-term opportunity based on BAT memory + recent performance.</p>
        </article>
      </section>

      <section className="card">
        <h3 className="sectionTitle">Generated Assets</h3>
        {contentIdeas.map((item) => (
          <div key={item.title} className="listRow">
            <span>{item.channel} · {item.title}</span>
            <span className="muted">{item.status} · {item.roi} ROI</span>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
