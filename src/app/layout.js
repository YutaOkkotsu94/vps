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
