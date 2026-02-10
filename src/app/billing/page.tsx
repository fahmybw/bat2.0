import { PageShell } from '@/components/PageShell';

const plans = [
  { name: 'Starter', price: '$29/mo', details: '1 workspace, 500 AI credits, basic scheduler', target: 'Creators validating offer-market fit' },
  { name: 'Growth', price: '$99/mo', details: '5 workspaces, 5,000 AI credits, advanced approvals', target: 'SMB teams scaling multi-channel output' },
  { name: 'Agency', price: '$299/mo', details: 'Unlimited clients, 25,000 AI credits, priority support + API', target: 'Agencies maximizing margin per account' },
];

export default function BillingPage() {
  return (
    <PageShell title="Billing and Subscriptions" subtitle="Design plan packaging to maximize conversion, expansion, and retention.">
      <section className="card" style={{ marginBottom: 16 }}>
        <h3 className="sectionTitle">Revenue Optimization Controls</h3>
        <div className="grid grid-3">
          <div className="subtle"><strong>Annual discount</strong><p className="muted">Increase cash flow with prepaid contracts.</p></div>
          <div className="subtle"><strong>Usage overage</strong><p className="muted">Capture growth demand beyond included credits.</p></div>
          <div className="subtle"><strong>Add-ons</strong><p className="muted">Sell premium strategy, white-label, and SLA upgrades.</p></div>
        </div>
      </section>

      <section className="grid grid-2">
        {plans.map((plan) => (
          <article key={plan.name} className="card stack">
            <h3 className="sectionTitle">{plan.name}</h3>
            <p style={{ fontSize: 28, margin: 0 }}>{plan.price}</p>
            <p className="muted">{plan.details}</p>
            <p className="muted" style={{ marginTop: 0 }}>Best for: {plan.target}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button className="btn">Select {plan.name}</button>
              <button className="btn secondary">Compare features</button>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
