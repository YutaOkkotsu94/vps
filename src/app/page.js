// import de react
import React from 'react';
// Import de la Navbar du dossier components
import Navbar from 'C:/Users/Lakhd/OneDrive/Desktop/vps/components/navbar.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Bienvenue sur mon site !</h1>
      </main>
    </div>
  );
}

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
