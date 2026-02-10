import { PageShell } from '@/components/PageShell';

export default function TalkToBatPage() {
  return (
    <PageShell title="Talk to BAT" subtitle="A focused conversational workspace modeled after top AI chat products.">
      <section className="chatWrap">
        <div className="chatThread">
          <div className="chatBubble bot">BAT here. I can generate strategy, scripts, or a complete weekly content plan.</div>
          <div className="chatBubble user">Create a seven day launch plan for TikTok and Instagram with a free trial offer.</div>
          <div className="chatBubble bot">Done. I mapped educational hooks, trust proof posts, and conversion CTAs with posting windows.</div>
          <div className="chatBubble bot">Do you want me to push this into Content Calendar and generate all scripts now?</div>
        </div>

        <div className="chatComposer stack">
          <textarea className="input" rows={3} placeholder="Message BAT" />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Send</button>
            <button className="btn ghost">Use BAT Brain context</button>
            <button className="btn secondary">Create tasks</button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
