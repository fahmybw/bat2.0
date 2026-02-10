import Link from 'next/link';

export default function SignUp() {
  return (
    <main className="container" style={{ maxWidth: 560 }}>
      <h1>Create your BAT account</h1>
      <p className="muted">Launch faster with AI-powered strategy, content, and scheduling.</p>
      <div className="card stack">
        <label>Full Name<input className="input" placeholder="Jane Founder" /></label>
        <label>Business Email<input className="input" type="email" placeholder="jane@agency.com" /></label>
        <label>Password<input className="input" type="password" placeholder="Create a strong password" /></label>
        <button className="btn">Create Account</button>
        <p className="muted" style={{ marginBottom: 0 }}>Already have an account? <Link href="/auth/signin">Sign in</Link>.</p>
      </div>
    </main>
  );
}
