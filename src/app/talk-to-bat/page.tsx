import { PageShell } from '@/components/PageShell';

export default function TalkToBatPage() {
  return (
    <PageShell title="Talk to BAT" subtitle="Chat with BAT in a focused workspace inspired by modern AI chat interfaces.">
      <section className="chatShell">
        <div className="chatThread">
          <div className="chatMsg bot">
            I am BAT. I can help with strategy, campaign plans, scripts, and calendar optimization. What do you want to build today?
          </div>
          <div className="chatMsg user">
            Build a 7-day Instagram and TikTok launch plan for a skincare product with a free trial CTA.
          </div>
          <div className="chatMsg bot">
            Great. I drafted a 7-day launch with educational hooks, social proof, and urgency CTAs. I also flagged two upsell moments for high-intent viewers.
          </div>
          <div className="chatMsg bot">
            Next actions: Generate scripts, create calendar slots, and set auto-follow-up messages for leads.
          </div>
        </div>

        <div className="card stack">
          <div className="chatInputRow">
            <textarea className="input" rows={3} placeholder="Message BAT..." />
            <button className="btn">Send</button>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn ghost">Generate from memory</button>
            <button className="btn secondary">Save response</button>
            <button className="btn secondary">Create calendar draft</button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
