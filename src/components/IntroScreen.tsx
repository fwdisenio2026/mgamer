import React, { useState } from 'react';
import gamerLogoPng from '../assets/logos/gamer_logo_transparent.png';
import { Gamepad2, Play } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 850); // Duración de la animación de repliegue/despliegue
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030108] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
        isExiting 
          ? '-translate-y-full opacity-0 pointer-events-none' 
          : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Efectos retro CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 26, 0) 50%, rgba(0, 0, 0, 0.5) 50%)',
          backgroundSize: '100% 4px',
          opacity: 0.85,
        }}
      />

      {/* Grid de luces de neón sutiles atrás */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full filter blur-[100px]" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-lg">
        
        {/* Logo de MGAMER con brillo neón pulsante */}
        <div className="mb-10 transform transition-all duration-1000 animate-bounce">
          <img
            src={gamerLogoPng}
            alt="MGAMER Logo Intro"
            className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.85)] mix-blend-screen"
          />
        </div>

        {/* Título de introducción gamer */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-purple-400 uppercase font-black mb-12 animate-pulse">
          PRESIONA PARA ENTRAR AL SALÓN
        </p>

        {/* Botón arcade neon interactivo "ES TIEMPO DE JUGAR" */}
        <button
          onClick={handleStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 border-2 border-purple-300 font-gamer font-black text-sm sm:text-base tracking-[0.15em] text-white hover:scale-108 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:shadow-[0_0_60px_rgba(244,63,94,0.85)] cursor-pointer"
        >
          {/* Pequeño destello interno */}
          <div className="absolute top-1 left-1 right-1 h-2 bg-white/20 rounded-t-xl" />
          <Gamepad2 className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform" />
          <span>ES TIEMPO DE JUGAR</span>
          <Play className="w-4 h-4 text-white fill-current group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Franja de decoración estilo gabinete de arcade en los costados */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-purple-500 to-transparent opacity-50" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-purple-500 to-transparent opacity-50" />
    </div>
  );
};
