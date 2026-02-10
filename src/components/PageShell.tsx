import { Nav } from './Nav';

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="container">
      <Nav />
      <header style={{ marginBottom: 20 }}>
        <h1 className="sectionTitle">{title}</h1>
        <p className="muted" style={{ margin: 0 }}>{subtitle}</p>
      </header>
      {children}
    </main>
  );
}
