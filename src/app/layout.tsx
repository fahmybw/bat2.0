import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BAT — AI Social Media Agency Platform',
  description: 'BAT automates strategy, content creation, approvals, and scheduling across channels.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
