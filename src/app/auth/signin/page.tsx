import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="container" style={{ maxWidth: 520 }}>
      <h1>Sign in to BAT</h1>
      <p className="muted">Welcome back. Continue to your AI social media workspace.</p>
      <div className="card stack">
        <label>Email<input className="input" type="email" placeholder="you@brand.com" /></label>
        <label>Password<input className="input" type="password" placeholder="••••••••" /></label>
        <button className="btn">Sign In</button>
        <Link href="/auth/forgot-password" className="muted">Forgot password?</Link>
      </div>
    </main>
  );
}
