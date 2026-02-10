import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <div className="nav">
        <span style={{ fontWeight: 800, fontSize: 22 }}>BAT</span>
        <div className="navLinks">
          <Link className="pill" href="/auth/signin">Sign In</Link>
          <Link className="pill" href="/auth/signup">Sign Up</Link>
        </div>
      </div>

      <section className="hero">
        <h1>Your AI Social Media Agency, End-to-End.</h1>
        <p className="muted" style={{ maxWidth: 780, fontSize: 18 }}>
          BAT replaces manual agency workflows with one platform for memory, strategy, content generation,
          approvals, calendars, scheduling, and growth analytics.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
          <Link className="btn" href="/auth/signup">Start Free</Link>
          <Link className="btn secondary" href="/dashboard">View Product Tour</Link>
        </div>
      </section>

      <section className="grid grid-2">
        {[
          ['BAT Brain', 'Ingest brand docs, links, product info, and competitor context into living memory.'],
          ['Talk to BAT', 'Ask questions and generate strategic answers with history-aware memory.'],
          ['Create Content', 'Generate channel-ready posts, scripts, and captions with one prompt.'],
          ['Content Calendar', 'Approve, regenerate, and schedule posts across TikTok, Instagram, and YouTube.'],
        ].map(([title, copy]) => (
          <article key={title} className="card">
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
