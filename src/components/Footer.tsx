import React from 'react';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';
import gamerLogoPng from '../assets/logos/gamer_logo_transparent.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020005] border-t border-purple-900/40 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-900/30 items-center">
          
          {/* Logo limpio, mimetizado y grande */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src={gamerLogoPng}
                alt="MGAMER"
                className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] mix-blend-screen"
              />
            </div>

            <p className="font-gamer text-xs uppercase tracking-wide font-bold text-purple-300">
              {MGAMER_INFO.tagline}
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm">
              Espacio exclusivo para cumpleaños temáticos de videojuegos, consolas de última generación, piso LED interactivo, servicio de pizzas y bebidas en La Plata.
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-gamer text-xs font-black text-purple-300 uppercase tracking-widest">
              Secciones
            </h4>
            <ul className="space-y-2 text-sm font-gamer text-zinc-400">
              <li><a href="#juegos" className="hover:text-purple-400 transition-colors">¿Qué Incluye MGAMER?</a></li>
              <li><a href="#galeria" className="hover:text-purple-400 transition-colors">Galería de Fotos</a></li>
              <li><a href="#el-lugar" className="hover:text-purple-400 transition-colors">El Lugar & Capacidad</a></li>
              <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Reserva Tu Lugar</a></li>
            </ul>
          </div>

          {/* Contacto directo */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-gamer text-xs font-black text-yellow-300 uppercase tracking-widest">
              Ubicación & Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-xs">{MGAMER_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${MGAMER_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-300 hover:underline"
                >
                  +{MGAMER_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={MGAMER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-300 hover:underline"
                >
                  {MGAMER_INFO.instagramUser}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} MGAMER. Diagonal 74 e/ 22 y 64, La Plata.
          </div>
          <div className="text-purple-400/80 flex items-center gap-1 font-gamer text-[11px]">
            VIDEOJUEGOS + TECNOLOGÍA = CUMPLES INOLVIDABLES
          </div>
        </div>
      </div>
    </footer>
  );
};
