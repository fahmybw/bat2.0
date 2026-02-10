import { PageShell } from '@/components/PageShell';

const plans = [
  { name: 'Starter', price: '$29/mo', details: '1 workspace, 500 AI credits, basic scheduler' },
  { name: 'Growth', price: '$99/mo', details: '5 workspaces, 5,000 AI credits, advanced calendar + approvals' },
  { name: 'Agency', price: '$299/mo', details: 'Unlimited clients, 25,000 AI credits, priority support + API' },
];

export default function BillingPage() {
  return (
    <PageShell title="Billing & Subscriptions" subtitle="Choose a plan for creators, brands, or agencies.">
      <section className="grid grid-2">
        {plans.map((plan) => (
          <article key={plan.name} className="card stack">
            <h3 className="sectionTitle">{plan.name}</h3>
            <p style={{ fontSize: 28, margin: 0 }}>{plan.price}</p>
            <p className="muted">{plan.details}</p>
            <button className="btn">Select {plan.name}</button>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
