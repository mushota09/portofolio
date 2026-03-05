import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mushota Raphael - Backend Developer',
  description: 'Expert in building scalable APIs, microservices, and event-driven architectures',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="selection:bg-accent selection:text-bg-darker">
        {children}
      </body>
    </html>
  );
}
