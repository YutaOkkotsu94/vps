import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 bg-white h-24 shadow">
      
      {/* Logo à gauche */}
      <div className="flex items-center h-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Liens au centre */}
      <ul className="flex space-x-10 text-black text-base font-normal font-dm">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/projects">Nos Projets</Link></li>
        <li><Link href="/events">Evènements</Link></li>
        <li><Link href="/history">Notre Histoire</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Bouton à droite */}
      <Link href="/benevoles">
      <button className="bg-[#2B2B2B] text-white text-[14px] font-dm w-[130px] h-[42px] rounded-[16px] hover:bg-[#1f1f1f] transition">
        Nous rejoindre
      </button>
      </Link>
    </nav>
  );
}
