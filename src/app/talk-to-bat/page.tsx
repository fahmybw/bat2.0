import { PageShell } from '@/components/PageShell';

export default function TalkToBatPage() {
  return (
    <PageShell title="Talk to BAT" subtitle="Chat with your memory-aware AI strategist.">
      <section className="card stack">
        <div className="card" style={{ borderStyle: 'dashed' }}>
          <p><strong>You:</strong> Build a launch strategy for a new skincare brand.</p>
          <p className="muted"><strong>BAT:</strong> Based on your uploaded brand voice + competitor scan, I suggest a 30-day TikTok-first strategy...</p>
        </div>
        <textarea className="input" rows={3} placeholder="Ask BAT anything about your brand, content strategy, or campaign ideas..." />
        <button className="btn">Send</button>
      </section>
    </PageShell>
  );
}
