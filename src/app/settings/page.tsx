import { PageShell } from '@/components/PageShell';

export default function SettingsPage() {
  return (
    <PageShell title="Settings" subtitle="Security, workspace controls, and growth alerts in one place.">
      <section className="grid grid-2" style={{ marginBottom: 16 }}>
        <article className="card stack">
          <h3 className="sectionTitle">Workspace</h3>
          <label>Name<input className="input" defaultValue="BAT Demo Agency" /></label>
          <label>Notifications<input className="input" defaultValue="owner@bat.agency" /></label>
          <label>Primary objective<select className="input"><option>Profit growth</option><option>Retention</option><option>Operational speed</option></select></label>
          <button className="btn">Save</button>
        </article>
        <article className="card stack">
          <h3 className="sectionTitle">2FA</h3>
          <label>Security email<input className="input" placeholder="security@yourdomain.com" /></label>
          <label>Token expiry<select className="input"><option>10 minutes</option><option>20 minutes</option></select></label>
          <button className="btn">Enable 2FA</button>
          <button className="btn secondary">Send test token</button>
        </article>
      </section>
      <section className="card stack">
        <h3 className="sectionTitle">Usage alerts</h3>
        <label>Trigger threshold<select className="input"><option>75%</option><option>85%</option><option>95%</option></select></label>
        <button className="btn secondary">Enable alerts</button>
      </section>
    </PageShell>
  );
}
