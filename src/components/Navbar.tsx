import React, { useState, useEffect } from 'react';
import { Gamepad2, ChevronDown, Glasses, Footprints, Joystick, Image, MapPin, Pizza, HelpCircle, MessageCircle } from 'lucide-react';
import { MGAMER_INFO, TECH_EXPERIENCES } from '../data/mgamerData';
import gamerLogoPng from '../assets/logos/gamer_logo_transparent.png';

interface NavbarProps {
  onSelectTab?: (tab: string) => void;
  activeTab?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectTab }) => {
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para hacer desaparecer el menú del header en desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vr':
        return <Glasses className="w-4 h-4 text-pink-400" />;
      case 'interactive':
        return <Footprints className="w-4 h-4 text-cyan-400" />;
      case 'retro':
        return <Joystick className="w-4 h-4 text-purple-400" />;
      case 'food':
        return <Pizza className="w-4 h-4 text-yellow-400" />;
      default:
        return <Gamepad2 className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        
        {/* En MOBILE: Logo centrado, transparente apoyado directamente sobre el video. Desaparece al scrolear */}
        <div className={`md:hidden flex items-center justify-center pt-4 pb-2 transition-all duration-500 transform ${
          scrolled ? '-translate-y-40 opacity-0 pointer-events-none scale-75' : 'translate-y-0 opacity-100 scale-100'
        }`}>
          <a
            href="#"
            onClick={(e) => {
              if (onSelectTab) {
                e.preventDefault();
                onSelectTab('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center justify-center group cursor-pointer"
          >
            <img
              src={gamerLogoPng}
              alt="MGAMER"
              className="h-32 w-auto object-contain filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mix-blend-screen"
            />
          </a>
        </div>

        {/* En DESKTOP: Logo y menú. Desaparecen al scrolear (se deslizan o desvanecen) */}
        <div 
          className={`hidden md:flex items-center justify-between h-20 sm:h-24 pt-2 transition-all duration-500 transform ${
            scrolled ? '-translate-y-28 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
        >
          
          {/* Logo Brand siempre arriba en el centro o izquierda */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group relative cursor-pointer">
              <img
                src={gamerLogoPng}
                alt="MGAMER"
                className="h-18 sm:h-22 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mix-blend-screen"
              />
            </a>
          </div>

          {/* Menú Centrado con pastillas translúcidas sobre el video */}
          <nav className="flex items-center justify-center gap-1.5 lg:gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-purple-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            
            {/* 1. JUEGOS CON DESPLEGABLE */}
            <div 
              className="relative"
              onMouseEnter={() => setGamesDropdownOpen(true)}
              onMouseLeave={() => setGamesDropdownOpen(false)}
            >
              <a
                href="#juegos"
                onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-gamer uppercase tracking-wider text-zinc-200 hover:text-purple-300 hover:bg-white/10 transition-all duration-200 group"
              >
                <Gamepad2 className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <span>¿Qué Incluye?</span>
                <ChevronDown className={`w-3.5 h-3.5 text-purple-400 transition-transform duration-200 ${gamesDropdownOpen ? 'rotate-180' : ''}`} />
              </a>

              {/* Dropdown Menu */}
              {gamesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 mt-2 py-2 bg-[#090414]/95 border border-purple-500/40 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.9)] backdrop-blur-2xl z-50">
                  <div className="px-4 py-2 text-[10px] font-mono tracking-widest text-purple-400/80 uppercase border-b border-purple-900/40">
                    Equipamiento & Servicios
                  </div>
                  <div className="p-1.5 space-y-1">
                    {TECH_EXPERIENCES.map((exp) => (
                      <a
                        key={exp.id}
                        href="#juegos"
                        onClick={() => setGamesDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-purple-900/40 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-md bg-purple-950/60 border border-purple-800/50 group-hover:border-purple-500/60">
                            {getCategoryIcon(exp.category)}
                          </div>
                          <div>
                            <div className="text-sm font-gamer font-bold text-zinc-100 group-hover:text-purple-300 transition-colors">
                              {exp.name}
                            </div>
                            <div className="text-[11px] text-zinc-400">
                              {exp.tagline}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-purple-400/60 group-hover:text-pink-400 font-semibold px-2 py-0.5 rounded bg-purple-950/40">
                          {exp.badge}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. EL ESPACIO GAMER */}
            <a
              href="#el-lugar"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-gamer uppercase tracking-wider text-zinc-200 hover:text-purple-300 hover:bg-white/10 transition-all duration-200 group"
            >
              <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>El Espacio</span>
            </a>

            {/* 3. GALERÍA */}
            <a
              href="#galeria"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-gamer uppercase tracking-wider text-zinc-200 hover:text-purple-300 hover:bg-white/10 transition-all duration-200 group"
            >
              <Image className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Galería</span>
            </a>

            {/* 4. RESERVA TU LUGAR */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-gamer uppercase tracking-wider text-zinc-200 hover:text-purple-300 hover:bg-white/10 transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span>Reserva</span>
            </a>

            {/* 5. PREGUNTAS FRECUENTES */}
            <a
              href="#faq"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-gamer uppercase tracking-wider text-zinc-200 hover:text-purple-300 hover:bg-white/10 transition-all duration-200 group"
            >
              <HelpCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Preguntas</span>
            </a>
          </nav>

          {/* CTA Header Action - a la derecha sobre el video */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="relative inline-flex items-center justify-center gap-2 font-gamer font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl glow-purple transition-all duration-300 border border-purple-400/50 hover:scale-105 active:scale-95 shadow-[0_4px_25px_rgba(0,0,0,0.8)] px-6 py-2.5 text-xs"
            >
              <span>RESERVAR</span>
            </a>
          </div>

        </div>

      </div>
    </header>
  );
};
