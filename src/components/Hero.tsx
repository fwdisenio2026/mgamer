import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../assets/videos/Video_hero.mp4';

// Frases que van pasando con efecto máquina de escribir y cursor titilando
const TYPED_PHRASES = [
  '3 HORAS DE DIVERSIÓN TOTAL',
  'CASCO VR 360° & REALIDAD VIRTUAL',
  'PISO LED INTERACTIVO CON JUEGOS',
  'CONSOLAS PLAYSTATION 5 & SWITCH',
  'ARCADE RETRO PARA CHICOS Y GRANDES',
  'SALÓN 100% EXCLUSIVO EN LA PLATA',
];

export const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Efecto máquina de escribir (Typewriter)
  useEffect(() => {
    const fullText = TYPED_PHRASES[currentPhraseIndex];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayedText === fullText) {
      // Pausa en el texto completo antes de borrar
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === '') {
      // Pasa a la siguiente frase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % TYPED_PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#030108] overflow-hidden">
      {/* Video de Fondo Completo y Mucho Más Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100 filter brightness-95 contrast-110"
        />
        
        {/* Scrim ligero para que el video esté súper visible y al mismo tiempo los textos tengan legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030108] via-[#030108]/30 to-[#030108]/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container - Textos más chicos y limpios */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Título Gamer en tamaño gigante e impactante en celular con interlineado ajustado y ultra-compacto */}
        <h1 className="font-gamer text-4xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-[0.95] md:leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] flex flex-col items-center gap-0 sm:block">
          <span className="text-white block sm:inline drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
            VIDEOJUEGOS
          </span>
          <span className="block sm:inline-block text-purple-400 text-xl sm:text-2xl my-0 sm:mx-2 font-mono font-light leading-none">+</span>
          <span className="neon-text-violet block sm:inline">
            TECNOLOGÍA
          </span>
          <div className="mt-2.5 block text-xl sm:text-2xl md:text-3xl neon-text-magenta drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
            = CUMPLES INOLVIDABLES
          </div>
        </h1>

        {/* Máquina de escribir con cursor titilando */}
        <div className="inline-flex items-center justify-center min-h-[46px] px-5 py-2 rounded-xl bg-[#070211]/85 border border-purple-500/50 backdrop-blur-md mb-6 neon-border-violet shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <p className="font-gamer text-sm sm:text-lg md:text-xl font-bold tracking-wider text-yellow-300 text-glow-yellow flex items-center">
            <span>{displayedText}</span>
            {/* Cursor titilando */}
            <span className="inline-block w-2.5 sm:w-3 h-5 sm:h-6 ml-1 bg-yellow-400 animate-pulse align-middle" />
          </p>
        </div>

      </div>

      {/* Indicador de flecha hacia abajo */}
      <a
        href="#juegos"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-purple-400 hover:text-white transition-colors animate-bounce p-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        aria-label="Ir a juegos"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
