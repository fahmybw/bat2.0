import Link from 'next/link';

const pillars = [
  ['BAT Brain', 'Build compounding memory from docs, channels, and customer insights.'],
  ['Talk to BAT', 'Create high-confidence strategy outputs with context-aware reasoning.'],
  ['Create Content', 'Generate, score, and repurpose assets with performance intent.'],
  ['Content Calendar', 'Approve, auto-schedule, and publish across every major channel.'],
];

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
        <h1>BAT turns social media execution into a scalable profit engine.</h1>
        <p className="muted" style={{ maxWidth: 820, fontSize: 18 }}>
          Replace fragmented agency work with one AI operating system for strategy, content production,
          approvals, scheduling, performance feedback, and expansion revenue.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
          <Link className="btn" href="/auth/signup">Start Free Trial</Link>
          <Link className="btn secondary" href="/dashboard">Open BAT Workspace</Link>
        </div>
      </section>

      <section className="grid grid-3" style={{ marginBottom: 16 }}>
        <article className="card">
          <p className="muted" style={{ margin: 0 }}>Average setup time</p>
          <p className="value">24 min</p>
          <span className="badge success">-73% versus agency onboarding</span>
        </article>
        <article className="card">
          <p className="muted" style={{ margin: 0 }}>Content velocity</p>
          <p className="value">4.6x</p>
          <span className="badge success">Weekly output acceleration</span>
        </article>
        <article className="card">
          <p className="muted" style={{ margin: 0 }}>Expansion readiness</p>
          <p className="value">3 Plans</p>
          <span className="badge warning">Built-in upsell paths</span>
        </article>
      </section>

      <section className="grid grid-2">
        {pillars.map(([title, copy]) => (
          <article key={title} className="card">
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p className="muted" style={{ marginBottom: 0 }}>{copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
