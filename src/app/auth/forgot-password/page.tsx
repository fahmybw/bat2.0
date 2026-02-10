export default function ForgotPassword() {
  return (
    <main className="container" style={{ maxWidth: 540 }}>
      <h1>Reset password</h1>
      <p className="muted">Enter your account email and receive a secure reset link with short expiry.</p>
      <div className="card stack">
        <label>Email<input className="input" type="email" placeholder="you@brand.com" /></label>
        <label>Workspace<input className="input" placeholder="BAT Demo Agency" /></label>
        <button className="btn">Send reset link</button>
      </div>
    </main>
  );
}
