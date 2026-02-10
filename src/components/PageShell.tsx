import { Nav } from './Nav';

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="container">
      <Nav />
      <header style={{ marginBottom: 18 }}>
        <h1 className="sectionTitle" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)' }}>{title}</h1>
        <p className="muted" style={{ margin: 0 }}>{subtitle}</p>
      </header>
      {children}
    </main>
  );
}
