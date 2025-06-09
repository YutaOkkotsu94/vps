'use client'; 

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

// Tableau contenant les chemins des images du carousel
const images = [
  '/girl-hope.svg', // Remplace par tes vraies images dans /public/
  '/littleboy-flag.svg',
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0); // État pour savoir quelle image est affichée

  // useEffect pour faire défiler automatiquement les images toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // Boucle entre 0 et 1
    }, 5000);
    return () => clearInterval(timer); // Nettoyage du timer à la fin
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Affichage des images (une à la fois avec opacité) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill // remplit tout le conteneur parent
            className="object-cover"
            priority={index === 0} // Priorise la première image pour éviter le clignotement
          />
        </div>
      ))}

  <div className="absolute inset-0 bg-black/25 flex items-center justify-end px-8 md:px-20 text-white">
  {/* Bloc à droite, avec les éléments centrés dans ce bloc */}
  <div className="max-w-2xl h-[70%] flex flex-col justify-center items-center text-center gap-6">
    
    {/* Titre principal */}
    <h1 className="text-6xl md:text-6xl font-oswald font-thin leading-tight tracking-wide">
  VALENTON PALESTINE SOLIDARITÉ
</h1>

    {/* Sous-titre */}
    <h2 className="text-2xl md:text-3xl font-oswald font-light leading-snug">
      Association de soutien au peuple Palestinien
    </h2>

    {/* Paragraphe descriptif */}
    <p className="text-sm md:text-base font-dm font-light max-w-lg">
      Une association de terrain, portée par des citoyens engagés
      pour la solidarité avec la Palestine.
    </p>

    {/* Boutons espacés */}
    <div className="mt-10 flex space-x-4">
        <Link href="/dons">
      <button className="bg-[#007A3D] text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-500 ease-in-out">
        Faire un don !
      </button>
      </Link>
       <Link href="/benevoles">
      <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-[#007A3D] hover:text-white transition duration-500 ease-in-out">
        Nous rejoindre
      </button>
      </Link>
    </div>
  </div>
</div>





      {/* Réseaux sociaux en bas à gauche */}
      <div className="absolute bottom-6 left-6 flex space-x-4 text-white text-6xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
