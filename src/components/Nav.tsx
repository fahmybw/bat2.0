import Link from 'next/link';

const links = [
  ['Dashboard', '/dashboard'],
  ['BAT Brain', '/bat-brain'],
  ['Talk to BAT', '/talk-to-bat'],
  ['Create Content', '/create-content'],
  ['Content Calendar', '/content-calendar'],
  ['Billing', '/billing'],
  ['Settings', '/settings'],
];

export function Nav() {
  return (
    <div className="nav">
      <Link href="/" style={{ fontWeight: 800, fontSize: 20 }}>
        BAT
      </Link>
      <div className="navLinks">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="pill">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
