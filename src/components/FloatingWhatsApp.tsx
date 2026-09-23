import React, { useState, useEffect } from 'react';
import { Gamepad2, MapPin, Image, Calendar, HelpCircle, MessageCircle } from 'lucide-react';
import { MGAMER_INFO, WHATSAPP_CTA_MESSAGES } from '../data/mgamerData';
import gamerLogoPng from '../assets/logos/gamer_logo_transparent.png';

export const FloatingWhatsApp: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  const url = `https://wa.me/${MGAMER_INFO.phoneRaw}?text=${encodeURIComponent(WHATSAPP_CTA_MESSAGES.festejar)}`;

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

  const menuItems = [
    { href: '#juegos', label: '¿Qué Incluye?', icon: Gamepad2, color: 'text-purple-400 border-purple-500/50 bg-[#090414]/95 hover:text-purple-300' },
    { href: '#el-lugar', label: 'El Espacio', icon: MapPin, color: 'text-cyan-400 border-cyan-500/50 bg-[#090414]/95 hover:text-cyan-300' },
    { href: '#galeria', label: 'Galería de Fotos', icon: Image, color: 'text-pink-400 border-pink-500/50 bg-[#090414]/95 hover:text-pink-300' },
    { href: '#contacto', label: 'Reserva Tu Lugar', icon: Calendar, color: 'text-yellow-400 border-yellow-500/50 bg-[#090414]/95 hover:text-yellow-300' },
    { href: '#faq', label: 'Preguntas', icon: HelpCircle, color: 'text-indigo-400 border-indigo-500/50 bg-[#090414]/95 hover:text-indigo-300' },
  ];

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE FLOATING WHATSAPP BUTTON                            */}
      {/* ============================================================ */}
      <div className="md:hidden">
        <aside aria-label="Contacto rápido" className="fixed bottom-20 right-5 z-40 flex items-center group">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/60"
          >
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-black" />
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </aside>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP SIDEBAR WITH FAST BOTTOM-UP RISING ANIMATION        */}
      {/* ============================================================ */}
      <div className="hidden md:block">
        <aside
          className={`fixed right-8 bottom-8 z-50 flex flex-col items-center gap-4 transition-all duration-300 ${
            scrolled ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          
          {/* LOGO PRINCIPAL DE MGAMER (Aparece último, subiendo con un delay rápido) */}
          <div
            className={`transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
              scrolled 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-16 opacity-0 scale-50'
            }`}
            style={{ transitionDelay: scrolled ? '240ms' : '0ms' }}
          >
            <a href="#" className="block cursor-pointer transform hover:scale-110 transition-transform mb-2">
              <img
                src={gamerLogoPng}
                alt="MGAMER Floating Mini"
                className="w-16 h-16 object-contain filter drop-shadow-[0_2px_15px_rgba(168,85,247,0.8)] mix-blend-screen"
              />
            </a>
          </div>

          {/* Botones de navegación con transición escalonada (suben de a uno desde abajo rápidamente) */}
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;
            
            // Queremos que aparezcan de abajo hacia arriba:
            // FAQ (idx 4) -> Reserva (idx 3) -> Galería (idx 2) -> Espacio (idx 1) -> Juegos (idx 0)
            const reverseIdx = menuItems.length - 1 - idx;
            const delayTime = scrolled ? `${(reverseIdx + 1) * 45}ms` : '0ms';

            return (
              <div 
                key={idx} 
                className={`relative flex items-center justify-end transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
                  scrolled 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-16 opacity-0 scale-50'
                }`}
                style={{ transitionDelay: delayTime }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Nombre de botón que aparece "sobre" el hover */}
                <div
                  className={`absolute right-20 px-3.5 py-1.5 rounded-lg bg-[#070212]/95 border border-purple-500/40 text-xs font-gamer uppercase tracking-wider text-white whitespace-nowrap shadow-xl transition-all duration-300 transform ${
                    isHovered ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {item.label}
                </div>

                <a
                  href={item.href}
                  className={`w-16 h-16 rounded-full border flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 transform hover:scale-115 active:scale-90 ${item.color}`}
                >
                  <Icon className="w-7 h-7 stroke-[2]" />
                </a>
              </div>
            );
          })}

          {/* El botón de WhatsApp aparece PRIMERO (delay de 0ms) */}
          <div 
            className={`relative flex items-center justify-end transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
              scrolled 
                ? 'translate-y-0 opacity-100 scale-100 animate-bounce' 
                : 'translate-y-16 opacity-0 scale-50'
            }`}
            style={{ transitionDelay: '0ms' }}
            onMouseEnter={() => setHoveredIdx(99)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Nombre de botón para WhatsApp */}
            <div
              className={`absolute right-20 px-3.5 py-1.5 rounded-lg bg-emerald-950/95 border border-emerald-500/40 text-xs font-gamer uppercase tracking-wider text-emerald-300 whitespace-nowrap shadow-xl transition-all duration-300 transform ${
                hoveredIdx === 99 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95 pointer-events-none'
              }`}
            >
              Consultar WhatsApp
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.9)] flex items-center justify-center transition-all duration-300 transform hover:scale-115 active:scale-90 border-2 border-emerald-300/60"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};
