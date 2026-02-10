import { PageShell } from '@/components/PageShell';

export default function SettingsPage() {
  return (
    <PageShell title="Settings" subtitle="Manage account preferences, security, and authentication.">
      <section className="grid grid-2">
        <article className="card stack">
          <h3 className="sectionTitle">Profile</h3>
          <label>Workspace Name<input className="input" defaultValue="BAT Demo Agency" /></label>
          <label>Notification Email<input className="input" defaultValue="owner@bat.agency" /></label>
          <button className="btn">Save Changes</button>
        </article>
        <article className="card stack">
          <h3 className="sectionTitle">2FA via Email Token</h3>
          <p className="muted">Enable email-based one-time verification at sign-in.</p>
          <label>Security Email<input className="input" placeholder="security@yourdomain.com" /></label>
          <button className="btn">Enable 2FA</button>
          <button className="btn secondary">Send test token</button>
        </article>
      </section>
    </PageShell>
  );
}
