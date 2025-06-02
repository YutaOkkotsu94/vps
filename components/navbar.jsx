import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white h-24">
      
      {/* Logo à gauche */}
      <div className="h-full flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={160}
          className="mt-10 object-contain"
        />
      </div>

      {/* Liens au centre */}
      <ul className="flex space-x-6 text-black text-base font-normal font-dm">
        <li><a href="#" className="">Accueil</a></li>
        <li><a href="#" className="">Nos projets</a></li>
        <li><a href="#" className="">Événements</a></li>
        <li><a href="#" className="">Notre histoire</a></li>
        <li><a href="#" className="">Contact</a></li>
      </ul>

      {/* Bouton à droite */}
      <button className="bg-[#2B2B2B] text-white text-[14px] font-dm w-[130px] h-[42px] rounded-[12px] hover:bg-[#1f1f1f] transition">
        Nous rejoindre
      </button>
    </nav>
  );
}