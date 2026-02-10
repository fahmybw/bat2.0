import { PageShell } from '@/components/PageShell';
import { contentIdeas } from '@/lib/mockData';

export default function CreateContentPage() {
  return (
    <PageShell title="Create Content" subtitle="A visual studio for generating, scoring, and shipping channel-native content.">
      <section className="splitVisual" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Studio</h3>
          <label>Platform<select className="input"><option>TikTok</option><option>Instagram</option><option>YouTube</option></select></label>
          <label>Objective<input className="input" placeholder="Increase demo bookings" /></label>
          <label>Format<select className="input"><option>Video script</option><option>Carousel</option><option>Caption</option></select></label>
          <label>CTA<input className="input" placeholder="Start free trial" /></label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Generate</button>
            <button className="btn ghost">Generate variations</button>
          </div>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Opportunity by channel</h3>
          <div className="barRow"><span>TikTok</span><div className="barTrack"><div className="barFill" style={{ width: '88%' }} /></div><span>88</span></div>
          <div className="barRow"><span>Instagram</span><div className="barTrack"><div className="barFill" style={{ width: '76%' }} /></div><span>76</span></div>
          <div className="barRow"><span>YouTube</span><div className="barTrack"><div className="barFill" style={{ width: '67%' }} /></div><span>67</span></div>
          <p className="muted" style={{ marginBottom: 0 }}>Higher score means stronger short-term opportunity.</p>
        </article>
      </section>

      <section className="card tableLike">
        <h3 className="sectionTitle">Generated library</h3>
        {contentIdeas.map((item) => (
          <div key={item.title} className="tableRow">
            <span>{item.title}</span>
            <span className="muted">{item.channel}</span>
            <span className="muted">{item.roi} ROI</span>
            <button className="btn secondary">Open</button>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
