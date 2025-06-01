//import de react même si next.js le fait automatiquement c'est une bonne pratique
import React from 'react';

//Création de la function Navbar
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white h-24">
      {/* Logo à gauche */}
      <div>
  <img src="/logo.svg" alt="Logo" className="h-24 object-contain" />
</div>

      {/* Liens au centre */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-blue-600">Accueil</a></li>
        <li><a href="#" className="hover:text-blue-600">Nos projets</a></li>
        <li><a href="#" className="hover:text-blue-600">Evenements</a></li>
        <li><a href="#" className="hover:text-blue-600">Notre histoire</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
      </ul>

      {/* Bouton à droite */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Nous rejoindre
      </button>
    </nav>
  );
}
