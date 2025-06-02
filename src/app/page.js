'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <main className="relative h-[calc(100vh-6rem)]"> {/* 6rem = 96px (h-24) pour compenser la navbar */}
      <h1 className="text-red-500">Test rouge</h1>
      {/* Carousel */}
      <Swiper className="h-full w-full">
        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center bg-[url('[url/public/girl-hope.svg')]">
            {/* Contenu positionné en overlay */}
            <div className="flex h-full items-center justify-end pr-16 text-white bg-black/50">
              <div className="max-w-md text-right">
                <h1 className="text-4xl font-semibold mb-4">Titre accrocheur ici</h1>
                <p className="mb-6 text-sm">
                  Une courte description engageante pour présenter l’association.
                </p>
                <div className="flex justify-end space-x-4">
                  <button className="bg-[#2B2B2B] text-white px-4 py-2 rounded-[12px] text-sm">
                    En savoir plus
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-[12px] text-sm">
                    Nous soutenir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center bg-[url('public/littleboy-flag.svg')]"></div>
        </SwiperSlide>
      </Swiper>

      {/* Réseaux sociaux en bas à gauche */}
      <div className="absolute bottom-4 left-4 text-white space-y-2">
        <p className="text-sm">Suivez-nous</p>
        <div className="flex space-x-3">
          <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
          <a href="#"><img src="/twitter.svg" alt="Twitter" className="w-5 h-5" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
        </div>
      </div>
    </main>
  );
}
