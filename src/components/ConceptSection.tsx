import React from 'react';
import { Sparkles, Users2, ShieldAlert, Cpu, Award } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';

export const ConceptSection: React.FC = () => {
  return (
    <section id="concepto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07070e] relative border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-yellow-400" />
            <span>EL CONCEPTO MGAMER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            UNA EXPERIENCIA <span className="text-purple-400 text-glow-purple">FUERA DE LO COMÚN</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            MGAMER es un espacio de entretenimiento para cumpleaños donde los videojuegos y la tecnología son protagonistas absolutos.
          </p>
        </div>

        {/* Comparison / Differentiation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          {/* Card: Salón Tradicional */}
          <div className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-zinc-400">
                <ShieldAlert className="w-6 h-6 text-zinc-400" />
                <span className="font-mono text-sm uppercase tracking-wider font-semibold">Salón de fiestas convencional</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-4 font-mono">El formato de siempre</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">✕</span>
                  <span>Estética genérica infantil con globos y confeti tradicional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">✕</span>
                  <span>Juegos convencionales donde los adultos quedan como simples espectadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">✕</span>
                  <span>Actividades repetitivas sin estímulo tecnológico actual</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-900 text-xs text-zinc-400 font-mono">
              Enfoque tradicional pasivo
            </div>
          </div>

          {/* Card: La Propuesta MGAMER */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 via-[#0d091a] to-zinc-950 border-2 border-purple-500/50 glow-purple relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[11px] font-black font-mono px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              DIFERENCIAL MGAMER
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="font-mono text-sm uppercase tracking-wider font-bold text-yellow-400">LA EXPERIENCIA MGAMER</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 font-mono">
                Tecnología, competencia y pura adrenalina
              </h3>
              <ul className="space-y-3 text-zinc-200 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Ambiente gaming inmersivo con iluminación neón, pantallas y sonido envolvente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Equipamiento de última generación: Casco VR, PlayStation 5, Switch y Piso LED interactivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span className="text-white font-medium">Consolas retro para que los adultos también jueguen y revivan los clásicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Grupos organizados para que todos puedan usar cada tecnología sin esperar</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-purple-900/50 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                Videojuegos + Tecnología
              </span>
              <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
                Cumples Inolvidables
              </span>
            </div>
          </div>
        </div>

        {/* Core Claim Banner: 3 HORAS DE DIVERSIÓN PARA CHICOS Y GRANDES */}
        <div className="rounded-xl p-6 sm:p-8 bg-purple-950/40 border border-purple-500/40 text-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Users2 className="w-8 h-8 text-yellow-400 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-300 font-semibold mb-1">
                FILOSOFÍA DEL ESPACIO
              </p>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-mono tracking-wide">
                {MGAMER_INFO.targetClaim}
              </h4>
            </div>
            <Award className="w-8 h-8 text-pink-400 shrink-0 hidden sm:block" />
          </div>
          <p className="mt-3 text-zinc-300 text-sm max-w-2xl mx-auto">
            La experiencia está pensada para chicos, adolescentes, jóvenes y adultos. En MGAMER los grandes no miran desde un rincón: juegan, compiten y festejan a la par.
          </p>
        </div>
      </div>
    </section>
  );
};
