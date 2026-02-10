import Link from 'next/link';

export default function SignUp() {
  return (
    <main className="container" style={{ maxWidth: 590 }}>
      <h1>Create your BAT workspace</h1>
      <p className="muted">Set up in minutes and start generating content immediately.</p>
      <div className="card stack">
        <label>Full name<input className="input" placeholder="Jane Founder" /></label>
        <label>Business email<input className="input" type="email" placeholder="jane@agency.com" /></label>
        <label>Team size<select className="input"><option>1-5</option><option>6-20</option><option>21+</option></select></label>
        <label>Password<input className="input" type="password" placeholder="Create a strong password" /></label>
        <button className="btn">Create account</button>
        <p className="muted" style={{ marginBottom: 0 }}>Already have an account? <Link href="/auth/signin">Sign in</Link>.</p>
      </div>
    </main>
  );
}
