import React, { useState } from 'react';
import { Camera, Instagram, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';
import { InteractiveFloorBackground } from './InteractiveFloorBackground';

// Fotos reales del salón MGAMER
import ellugar01 from '../assets/images/ellugar_01.webp';
import ellugar02 from '../assets/images/ellugar_02.webp';
import fachada from '../assets/images/ellugar_fachada.webp';
import festejo01 from '../assets/images/ellugar_festejo_01.webp';
import festejo02 from '../assets/images/ellugar_festejo_02.webp';
import festejo03 from '../assets/images/ellugar_festejo_03.webp';
import festejo04 from '../assets/images/ellugar_festejo_04.webp';
import festejo05 from '../assets/images/ellugar_festejo_05.webp';
import festejo06 from '../assets/images/ellugar_festejo_06.webp';
import festejo07 from '../assets/images/ellugar_festejo_07.webp';
import festejo08 from '../assets/images/ellugar_festejo_08.jpg';
import festejo09 from '../assets/images/ellugar_festejo_09.jpg';

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const photos = [
    festejo01,
    festejo02,
    festejo03,
    ellugar01,
    ellugar02,
    festejo04,
    festejo05,
    festejo06,
    festejo07,
    festejo08,
    festejo09,
    fachada,
  ];

  // Duplicamos el array para que el scroll continuo sea infinito sin saltos
  const doublePhotos = [...photos, ...photos];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="galeria" className="py-24 bg-[#030108] relative border-t border-purple-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Encabezado sin exceso de texto */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-gamer text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-2">
            GALERÍA <span className="neon-text-violet">MGAMER</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Fotos reales del salón, las consolas y los festejos en La Plata.
          </p>
        </div>

      </div>

      {/* Carrusel Continuo: entran 4 por fila en desktop (w-1/4), pasan todas juntas lentamente */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Desvanecimiento en los bordes para suavidad visual */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#030108] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#030108] to-transparent z-10 pointer-events-none" />

        <div className="carousel-track flex gap-4 sm:gap-6">
          {doublePhotos.map((photoSrc, idx) => {
            const originalIndex = idx % photos.length;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(originalIndex)}
                className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[calc(25vw-1.5rem)] shrink-0 aspect-4/3 rounded-2xl overflow-hidden border border-purple-900/50 hover:border-purple-400/80 bg-zinc-950/90 transition-all duration-300 cursor-pointer group neon-border-violet shadow-lg"
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={photoSrc}
                    alt={`MGAMER Festejo ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Barra sutil de Instagram abajo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#090414] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto neon-border-violet text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
            <span className="text-xs sm:text-sm text-zinc-300 font-medium">
              Seguinos en Instagram para más videos y novedades: <strong className="text-purple-300 font-mono">{MGAMER_INFO.instagramUser}</strong>
            </span>
          </div>
          <a
            href={MGAMER_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg font-gamer text-xs uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-all shrink-0"
          >
            Ver Instagram
          </a>
        </div>
      </div>

      {/* Visor Modal de Foto (Lightbox con InteractiveFloorBackground de cuadrados detrás y navegación) */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setActiveIndex(null)}
        >
          {/* Fondo interactivo de cuadraditos que se prenden y apagan */}
          <InteractiveFloorBackground />

          <div 
            className="relative max-w-4xl w-full bg-[#090414]/95 border-2 border-purple-500/60 rounded-3xl overflow-hidden neon-border-violet-strong shadow-[0_0_65px_rgba(168,85,247,0.6)] z-10 animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera / Botón cerrar */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:text-pink-400 border border-purple-500/40 hover:border-pink-500/60 transition-all cursor-pointer shadow-lg"
              aria-label="Cerrar vista"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagen Principal y Controles de navegación */}
            <div className="relative max-h-[75vh] min-h-[300px] overflow-hidden flex items-center justify-center bg-black/40">
              
              {/* Botón Anterior */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 p-3 rounded-full bg-black/80 hover:bg-purple-950/80 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer shadow-lg transform hover:scale-105 active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Botón Siguiente */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-black/80 hover:bg-purple-950/80 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer shadow-lg transform hover:scale-105 active:scale-95"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Imagen */}
              <img
                src={photos[activeIndex]}
                alt={`MGAMER detalle ${activeIndex + 1}`}
                className="max-h-[75vh] w-full object-contain pointer-events-none select-none transition-all duration-300"
              />
            </div>

            {/* Pie con indicador de fotos y efectos de borde de luz */}
            <div className="px-6 py-4 bg-black/80 border-t border-purple-900/60 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider">
                FOTO {activeIndex + 1} DE {photos.length}
              </span>
              <div className="flex gap-1.5">
                {photos.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeIndex ? 'w-5 bg-purple-400' : 'w-1.5 bg-purple-950 hover:bg-purple-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
