export default function ForgotPassword() {
  return (
    <main className="container" style={{ maxWidth: 540 }}>
      <h1>Reset password</h1>
      <p className="muted">Receive a secure reset link by email.</p>
      <div className="card stack">
        <label>Email<input className="input" type="email" placeholder="you@brand.com" /></label>
        <button className="btn">Send reset link</button>
      </div>
    </main>
  );
}
