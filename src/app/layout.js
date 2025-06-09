import './globals.css';
import Navbar from '/components/Navbar';
import { DM_Sans, Oswald } from 'next/font/google';


const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const oswald = Oswald({
  subsets: ['latin'],        // langues supportées
  weight: ['400', '500', '600', '700'],  // poids qu’on souhaite charger
  variable: '--font-oswald', // variable CSS custom (optionnel)
  display: 'swap',           // pour éviter le FOIT (flash de texte invisible)
});



export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${dmSans.variable}`}>
      <body className={dmSans.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

