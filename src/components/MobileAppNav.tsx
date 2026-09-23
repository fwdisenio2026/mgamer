import React from 'react';
import { Gamepad2, MapPin, Image, Calendar, MessageSquare, HelpCircle } from 'lucide-react';

interface MobileAppNavProps {
  activeTab: string | null;
  onSelectTab: (tab: string) => void;
}

export const MobileAppNav: React.FC<MobileAppNavProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#070212]/95 backdrop-blur-2xl border-t border-purple-500/30 px-2 py-2 shadow-[0_-10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(147,51,234,0.3)]">
      <div className="flex items-center justify-between max-w-md mx-auto relative">
        
        {/* BOTÓN 1: ¿Qué Incluye? */}
        <button
          type="button"
          onClick={() => onSelectTab('juegos')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'juegos'
              ? 'text-purple-300 scale-105'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Gamepad2 className={`w-5 h-5 ${activeTab === 'juegos' ? 'text-purple-400 stroke-[2.5]' : ''}`} />
          <span className="text-[10px] font-gamer uppercase tracking-tighter mt-1">
            Juegos
          </span>
        </button>

        {/* BOTÓN 2: El Espacio Gamer */}
        <button
          type="button"
          onClick={() => onSelectTab('el-lugar')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'el-lugar'
              ? 'text-cyan-300 scale-105'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <MapPin className={`w-5 h-5 ${activeTab === 'el-lugar' ? 'text-cyan-400 stroke-[2.5]' : ''}`} />
          <span className="text-[10px] font-gamer uppercase tracking-tighter mt-1">
            Espacio
          </span>
        </button>

        {/* BOTÓN CENTRAL DESTACADO: RESERVA (Con tonos azules/violáceos, e ícono con filete blanco) */}
        <div className="-mt-6 flex flex-col items-center">
          <button
            type="button"
            onClick={() => onSelectTab('contacto')}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.85),0_4px_15px_rgba(0,0,0,0.8)] border-2 transition-all transform active:scale-95 ${
              activeTab === 'contacto'
                ? 'bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-600 border-white text-white scale-105'
                : 'bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 border-purple-300 text-white hover:scale-105'
            }`}
            aria-label="Reservar turno"
          >
            {/* Ícono blanco puro delineado */}
            <Calendar className="w-7 h-7 stroke-[2.5] text-white" />
          </button>
          <span className={`text-[10px] font-gamer font-black uppercase tracking-wider mt-1 ${
            activeTab === 'contacto' ? 'text-cyan-400' : 'text-purple-300'
          }`}>
            RESERVA
          </span>
        </div>

        {/* BOTÓN 3: Galería de Fotos */}
        <button
          type="button"
          onClick={() => onSelectTab('galeria')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'galeria'
              ? 'text-pink-300 scale-105'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Image className={`w-5 h-5 ${activeTab === 'galeria' ? 'text-pink-400 stroke-[2.5]' : ''}`} />
          <span className="text-[10px] font-gamer uppercase tracking-tighter mt-1">
            Galería
          </span>
        </button>

        {/* BOTÓN 4: Opiniones / Preguntas */}
        <button
          type="button"
          onClick={() => onSelectTab(activeTab === 'reviews' ? 'faq' : 'reviews')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'reviews' || activeTab === 'faq'
              ? 'text-emerald-300 scale-105'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {activeTab === 'faq' ? (
            <HelpCircle className="w-5 h-5 text-indigo-400 stroke-[2.5]" />
          ) : (
            <MessageSquare className={`w-5 h-5 ${activeTab === 'reviews' ? 'text-emerald-400 stroke-[2.5]' : ''}`} />
          )}
          <span className="text-[10px] font-gamer uppercase tracking-tighter mt-1">
            {activeTab === 'faq' ? 'FAQ' : 'Opiniones'}
          </span>
        </button>

      </div>
    </div>
  );
};
