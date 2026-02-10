import { PageShell } from '@/components/PageShell';
import { contentIdeas } from '@/lib/mockData';

export default function CreateContentPage() {
  return (
    <PageShell title="Create Content" subtitle="Generate assets with built-in scoring, compliance checks, and repurposing workflows.">
      <section className="grid grid-2">
        <article className="card stack">
          <label>Platform<select className="input"><option>TikTok</option><option>Instagram</option><option>YouTube</option><option>LinkedIn</option></select></label>
          <label>Goal<input className="input" placeholder="Increase demo bookings by 20%" /></label>
          <label>Post Type<select className="input"><option>Short video script</option><option>Carousel copy</option><option>Caption and hashtags</option><option>Community reply bank</option></select></label>
          <label>Offer CTA<input className="input" placeholder="Start free trial" /></label>
          <div className="subtle">
            <p style={{ marginTop: 0 }}>Quality score target: 85+</p>
            <p className="muted" style={{ marginBottom: 0 }}>Higher scores correlate with fewer revisions and lower content ops cost.</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Generate</button>
            <button className="btn ghost">Regenerate Hook</button>
            <button className="btn secondary">Create Variations</button>
          </div>
        </article>
        <article className="card">
          <h3 className="sectionTitle">Generated History</h3>
          {contentIdeas.map((item) => (
            <div key={item.title} className="listRow">
              <span>{item.channel} · {item.title}</span>
              <span className="muted">{item.status} · {item.roi} ROI</span>
            </div>
          ))}
        </article>
      </section>
    </PageShell>
  );
}
