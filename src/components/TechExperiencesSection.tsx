import React, { useState } from 'react';
import { TECH_EXPERIENCES, TechExperience } from '../data/mgamerData';
import { Glasses, Gamepad2, Footprints, Joystick, Pizza, CheckCircle2, ChevronRight, Zap, ChevronDown } from 'lucide-react';
import ellugar01 from '../assets/images/ellugar_01.webp';
import ellugar02 from '../assets/images/ellugar_02.webp';
import festejo01 from '../assets/images/ellugar_festejo_01.webp';
import festejo02 from '../assets/images/ellugar_festejo_02.webp';
import festejo03 from '../assets/images/ellugar_festejo_03.webp';
import festejo05 from '../assets/images/ellugar_festejo_05.webp';

export const TechExperiencesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TECH_EXPERIENCES[0].id);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(TECH_EXPERIENCES[0].id);

  const activeExperience = TECH_EXPERIENCES.find((e) => e.id === selectedId) || TECH_EXPERIENCES[0];

  const getExperienceImage = (id: string) => {
    switch (id) {
      case 'vr':
        return festejo01;
      case 'piso-led':
        return festejo02;
      case 'playstation':
        return ellugar01;
      case 'nintendo-switch':
        return festejo03;
      case 'retro':
        return ellugar02;
      case 'comida':
        return festejo05;
      default:
        return ellugar01;
    }
  };

  const getCategoryIcon = (category: TechExperience['category'], className = 'w-5 h-5') => {
    switch (category) {
      case 'vr':
        return <Glasses className={`${className} text-pink-400`} />;
      case 'interactive':
        return <Footprints className={`${className} text-cyan-400`} />;
      case 'retro':
        return <Joystick className={`${className} text-purple-400`} />;
      case 'food':
        return <Pizza className={`${className} text-yellow-400`} />;
      default:
        return <Gamepad2 className={`${className} text-purple-400`} />;
    }
  };

  const toggleMobileExpand = (id: string) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
    <section id="juegos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030108] relative border-t border-purple-900/40">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-gamer text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            ¿QUÉ INCLUYE <span className="neon-text-violet">MGAMER?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Seleccioná cada estación o servicio para conocer los videojuegos, el piso Neón y la comida que incluye cada cumpleaños.
          </p>
        </div>

        {/* ============================================================ */}
        {/* VISUALIZACIÓN MÓVIL OPTIMIZADA (md:hidden)                   */}
        {/* Formato acordeón expandible: Al apretar un botón se abre     */}
        {/* la información más acotada inmediatamente debajo.           */}
        {/* ============================================================ */}
        <div className="md:hidden flex flex-col gap-3">
          {TECH_EXPERIENCES.map((exp) => {
            const isExpanded = mobileExpandedId === exp.id;
            return (
              <div 
                key={exp.id} 
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded ? 'bg-purple-950/40 border-purple-400/80' : 'bg-[#090414]/90 border-purple-900/40'
                }`}
              >
                {/* Botón Encabezado */}
                <button
                  onClick={() => toggleMobileExpand(exp.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isExpanded ? 'bg-purple-600/30 border-purple-400' : 'bg-purple-950/40 border-purple-800/40'
                    }`}>
                      {getCategoryIcon(exp.category, 'w-4.5 h-4.5')}
                    </div>
                    <div>
                      <span className="font-gamer text-sm sm:text-base font-bold text-white">
                        {exp.name}
                      </span>
                      <p className="text-[11px] text-zinc-400 line-clamp-1">
                        {exp.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Contenido Expandible Acotado */}
                {isExpanded && (
                  <div className="p-4 pt-1 border-t border-purple-900/30 animate-in fade-in duration-200">
                    {/* Foto reducida */}
                    <div className="relative rounded-xl overflow-hidden mb-3 border border-purple-500/20 aspect-video">
                      <img
                        src={getExperienceImage(exp.id)}
                        alt={exp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-zinc-300 text-xs leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    {/* Características */}
                    <div className="flex flex-col gap-1.5 pt-2.5 border-t border-purple-900/30">
                      {exp.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* VISUALIZACIÓN ESCRITORIO (hidden md:grid)                     */}
        {/* Tarjeta de la derecha adaptada al alto exacto de los botones */}
        {/* de la izquierda. Empieza en VR y termina en Comida.         */}
        {/* ============================================================ */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Botones de selección */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2">
            {TECH_EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`text-left py-2 px-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/70 border-purple-400/90 neon-border-violet-strong translate-x-2'
                      : 'bg-[#090414]/90 border-purple-900/40 hover:border-purple-600/60 hover:bg-purple-950/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-purple-600/30 border border-purple-400 glow-purple'
                          : 'bg-purple-950/40 border border-purple-800/40 group-hover:border-purple-600'
                      }`}
                    >
                      {getCategoryIcon(exp.category, 'w-4.5 h-4.5')}
                    </div>
                    <div>
                      <span className="font-gamer text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.name}
                      </span>
                      <p className="text-[10px] text-zinc-400 line-clamp-1">
                        {exp.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                        isSelected
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-400/35'
                          : 'bg-zinc-900 text-zinc-500'
                      }`}
                    >
                      {exp.badge}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-purple-400 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Tarjeta al alto exacto del bloque izquierdo */}
          <div className="lg:col-span-7 flex">
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#090414] border-2 border-purple-500/40 neon-border-violet-strong flex flex-col justify-between relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              
              {/* Encabezado */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 text-[10px] font-mono tracking-wider">
                  {getCategoryIcon(activeExperience.category, 'w-3.5 h-3.5')}
                  <span className="font-bold">{activeExperience.badge}</span>
                </div>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                  DISPONIBLE EN TODOS LOS CUMPLES
                </span>
              </div>

              {/* Título */}
              <div>
                <h3 className="font-gamer text-xl sm:text-2xl font-black text-white mb-0.5">
                  {activeExperience.name}
                </h3>
                <p className="text-purple-300 font-mono text-[11px] sm:text-xs font-semibold mb-3">
                  {activeExperience.tagline}
                </p>
              </div>

              {/* Foto Real */}
              <div className="relative rounded-xl overflow-hidden mb-3 border border-purple-500/30 aspect-[2.1/1] flex-1">
                <img
                  src={getExperienceImage(activeExperience.id)}
                  alt={activeExperience.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090414] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-purple-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-purple-500/30">
                  {activeExperience.id === 'comida' ? 'Servicio completo de comida y salón' : 'Foto real del salón MGAMER'}
                </div>
              </div>

              {/* Descripción */}
              <p className="text-zinc-300 text-xs leading-relaxed mb-3">
                {activeExperience.description}
              </p>

              {/* Características */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-purple-900/50">
                {activeExperience.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-purple-950/30 border border-purple-800/40 flex items-start gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[10px] font-medium text-zinc-300 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
