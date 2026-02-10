import { PageShell } from '@/components/PageShell';

const plans = [
  { name: 'Starter', price: '$29/mo', detail: '500 credits, 1 workspace, base scheduler' },
  { name: 'Growth', price: '$99/mo', detail: '5,000 credits, advanced approvals, 5 workspaces' },
  { name: 'Agency', price: '$299/mo', detail: '25,000 credits, unlimited clients, API access' },
];

export default function BillingPage() {
  return (
    <PageShell title="Billing" subtitle="Simple pricing architecture built for conversion and expansion.">
      <section className="card" style={{ marginBottom: 16 }}>
        <h3 className="sectionTitle">Revenue controls</h3>
        <div className="grid grid-3">
          <div className="timelineItem"><strong>Annual billing</strong><p className="muted">Improve cash flow with yearly plans.</p></div>
          <div className="timelineItem"><strong>Usage overage</strong><p className="muted">Capture demand after included credits.</p></div>
          <div className="timelineItem"><strong>Premium add-ons</strong><p className="muted">Sell strategy packs and SLA upgrades.</p></div>
        </div>
      </section>
      <section className="grid grid-3">
        {plans.map((plan) => (
          <article key={plan.name} className="card stack">
            <h3 className="sectionTitle">{plan.name}</h3>
            <strong style={{ fontSize: 30 }}>{plan.price}</strong>
            <p className="muted" style={{ marginTop: 0 }}>{plan.detail}</p>
            <button className="btn">Choose {plan.name}</button>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
