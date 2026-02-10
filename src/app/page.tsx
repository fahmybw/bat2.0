import Link from 'next/link';

const pillars = [
  ['Memory', 'Centralized brand intelligence that compounds over time.'],
  ['Creation', 'Fast content generation with clear quality control.'],
  ['Scheduling', 'Cross-channel planning with operational clarity.'],
  ['Scale', 'Built-in monetization and plan expansion pathways.'],
];

export default function Home() {
  return (
    <main className="container">
      <div className="nav">
        <span style={{ fontWeight: 800, letterSpacing: 0.4 }}>BAT</span>
        <div className="navLinks">
          <Link href="/auth/signin" className="pill">Sign In</Link>
          <Link href="/auth/signup" className="pill">Start Free</Link>
        </div>
      </div>

      <section className="hero">
        <h1>The AI operating system for social media agencies.</h1>
        <p className="muted" style={{ maxWidth: 760, fontSize: 18 }}>
          BAT replaces slow agency delivery with one unified workflow for strategy, content, approvals, and publishing.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
          <Link href="/auth/signup" className="btn">Create Workspace</Link>
          <Link href="/dashboard" className="btn secondary">View Product</Link>
        </div>
      </section>

      <section className="grid grid-3" style={{ marginBottom: 14 }}>
        <article className="card metric"><div><p className="muted" style={{ margin: 0 }}>Average onboarding</p><strong>18m</strong></div><span className="badge">Fast setup</span></article>
        <article className="card metric"><div><p className="muted" style={{ margin: 0 }}>Weekly output</p><strong>4.8x</strong></div><span className="badge">More posts</span></article>
        <article className="card metric"><div><p className="muted" style={{ margin: 0 }}>Approval cycle</p><strong>-61%</strong></div><span className="badge">Less delay</span></article>
      </section>

      <section className="grid grid-2">
        {pillars.map(([title, body]) => (
          <article key={title} className="card">
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
