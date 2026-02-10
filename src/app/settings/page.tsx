import { PageShell } from '@/components/PageShell';

export default function SettingsPage() {
  return (
    <PageShell title="Settings" subtitle="Protect accounts, define team access, and control growth notifications.">
      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Workspace Profile</h3>
          <label>Workspace Name<input className="input" defaultValue="BAT Demo Agency" /></label>
          <label>Notification Email<input className="input" defaultValue="owner@bat.agency" /></label>
          <label>Primary Goal<select className="input"><option>Client retention</option><option>Profit growth</option><option>Team efficiency</option></select></label>
          <button className="btn">Save Changes</button>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">2FA via Email Token</h3>
          <p className="muted">Enforce one-time verification at sign-in for every admin and manager seat.</p>
          <label>Security Email<input className="input" placeholder="security@yourdomain.com" /></label>
          <label>Token Expiry<select className="input"><option>10 minutes</option><option>20 minutes</option></select></label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Enable 2FA</button>
            <button className="btn secondary">Send test token</button>
          </div>
        </article>
      </section>

      <section className="card stack">
        <h3 className="sectionTitle">Usage and Upgrade Alerts</h3>
        <p className="muted">Alert teams before they hit usage limits to reduce churn and improve plan expansion timing.</p>
        <label>Credit threshold<select className="input"><option>75%</option><option>85%</option><option>95%</option></select></label>
        <button className="btn secondary">Enable alerts</button>
      </section>
    </PageShell>
  );
}
