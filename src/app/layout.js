// app/layout.js
import './globals.css';

import Navbar from '../../components/Navbar'; // Corriger ce chemin si nécessaire
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Valenton Palestine Solidarité',
  description: 'Association de soutien au peuple palestinien',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
