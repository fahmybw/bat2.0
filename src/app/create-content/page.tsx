import { PageShell } from '@/components/PageShell';
import { contentIdeas } from '@/lib/mockData';

export default function CreateContentPage() {
  return (
    <PageShell title="Create Content" subtitle="Generate platform-specific content and keep everything in your library.">
      <section className="grid grid-2">
        <article className="card stack">
          <label>Platform<select className="input"><option>TikTok</option><option>Instagram</option><option>YouTube</option></select></label>
          <label>Goal<input className="input" placeholder="Drive engagement for product launch" /></label>
          <label>Post type<select className="input"><option>Short video script</option><option>Carousel copy</option><option>Caption + hashtags</option></select></label>
          <button className="btn">Generate Content</button>
        </article>
        <article className="card">
          <h3 className="sectionTitle">Generated History</h3>
          {contentIdeas.map((item) => (
            <p key={item.title} className="muted">{item.channel} · {item.title} ({item.status})</p>
          ))}
        </article>
      </section>
    </PageShell>
  );
}
