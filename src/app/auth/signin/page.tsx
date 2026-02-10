import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="container" style={{ maxWidth: 560 }}>
      <h1>Sign in to BAT</h1>
      <p className="muted">Access your growth workspace, live calendar, and client profitability insights.</p>
      <div className="card stack">
        <label>Email<input className="input" type="email" placeholder="you@brand.com" /></label>
        <label>Password<input className="input" type="password" placeholder="••••••••" /></label>
        <label>Workspace<select className="input"><option>BAT Demo Agency</option><option>Creator Lab</option></select></label>
        <button className="btn">Sign In</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <Link href="/auth/forgot-password" className="muted">Forgot password?</Link>
          <Link href="/auth/signup" className="muted">Create account</Link>
        </div>
      </div>
    </main>
  );
}
