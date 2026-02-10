export default function ForgotPassword() {
  return (
    <main className="container" style={{ maxWidth: 520 }}>
      <h1>Reset password</h1>
      <p className="muted">Enter your email and we'll send you a reset link.</p>
      <div className="card stack">
        <label>Email<input className="input" type="email" placeholder="you@brand.com" /></label>
        <button className="btn">Send reset link</button>
      </div>
    </main>
  );
}
