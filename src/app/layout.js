export const metadata = {
  title: 'Valenton Palestine Solidarité',
  description: 'Association de soutien au peuple palestinien',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';

import { DMSans } from 'next/font/google';

const dmSans = DMSans({
  subsets: ['latin'],
  weight: ['400'], // Poids normal
  variable: '--font-dm-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
