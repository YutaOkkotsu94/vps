/** @type {import('tailwindcss').Config} */
module.exports = {
  //Dire a Tailwind ou trouver les classes css content : ["chemin"]
  content: [
    //**/* → signifie : « va dans tous les sous-dossiers, et tous les fichiers »
    //.{js,jsx,ts,tsx} → cible tous les fichiers : Javascript, javascript avec JSX, Typescript et typescript avec TSX.
  "./src/app/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}

