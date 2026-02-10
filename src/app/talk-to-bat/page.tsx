import { PageShell } from '@/components/PageShell';

export default function TalkToBatPage() {
  return (
    <PageShell title="Talk to BAT" subtitle="Use strategic chat to speed decisions and increase campaign confidence.">
      <section className="grid grid-2">
        <article className="card stack">
          <div className="subtle">
            <p><strong>You:</strong> Build a two-week launch strategy for a skincare product line.</p>
            <p className="muted"><strong>BAT:</strong> Based on memory and competitor signals, prioritize short form creator hooks, social proof clips, and a paid retargeting sequence.</p>
          </div>
          <label>Prompt<textarea className="input" rows={4} placeholder="Ask BAT for strategy, pricing experiments, or growth experiments" /></label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn">Send</button>
            <button className="btn ghost">Save as SOP</button>
            <button className="btn secondary">Create Task</button>
          </div>
        </article>

        <article className="card stack">
          <h3 className="sectionTitle">Monetization-Aware Suggestions</h3>
          <div className="listRow"><span>Upsell trigger</span><span className="muted">Recommend Growth plan at 80% credit use</span></div>
          <div className="listRow"><span>Retention trigger</span><span className="muted">Auto-send weekly wins summary to client</span></div>
          <div className="listRow"><span>Profit trigger</span><span className="muted">Suggest high-margin content bundles</span></div>
          <button className="btn secondary">Enable all automations</button>
        </article>
      </section>
    </PageShell>
  );
}
