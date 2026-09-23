import React from 'react';
import { Users, Baby, UserCheck, ShieldCheck, CheckCircle2, Clock, MapPin, Sparkles, Gamepad2 } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';
import fachadaImg from '../assets/images/ellugar_fachada.webp';
import festejoImg from '../assets/images/ellugar_festejo_05.webp';

export const CapacitySection: React.FC = () => {
  return (
    <section id="el-lugar" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030108] relative border-t border-purple-900/40">
      {/* Background neon ambient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4 neon-border-violet">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>EL ESPACIO MGAMER</span>
          </div>
          <h2 className="font-gamer text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            EL LUGAR & <span className="neon-text-violet">CAPACIDAD</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Salón exclusivo en Diagonal 74 e/ 22 y 64, La Plata. Diseñado para festejar con total comodidad.
          </p>
        </div>

        {/* Big Cards: Chicos & Adultos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card Chicos */}
          <div className="p-8 rounded-3xl bg-[#090414] border-2 border-purple-500/50 neon-border-violet-strong relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold px-3 py-1 rounded bg-purple-950/80 border border-purple-700">
                ÁREA GAMER ACTIVA
              </span>
              <Baby className="w-8 h-8 text-pink-400" />
            </div>

            <div>
              <div className="font-gamer text-4xl sm:text-6xl font-black text-white mb-2">
                HASTA <span className="neon-text-violet">20</span>
              </div>
              <h3 className="font-gamer text-xl font-bold text-zinc-100 mb-3 uppercase">
                Chicos y Jóvenes
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Acceso completo al Casco VR 360°, PlayStation 5, PS4, Nintendo Switch y Piso Neón con rotación continua guiada.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-900/50 text-xs font-mono text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Todos juegan a todo durante las 3 horas</span>
            </div>
          </div>

          {/* Card Adultos */}
          <div className="p-8 rounded-3xl bg-[#090414] border-2 border-indigo-500/40 neon-border-violet relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-300 font-bold px-3 py-1 rounded bg-indigo-950/80 border border-indigo-700">
                ACOMPAÑANTES & RETRO
              </span>
              <UserCheck className="w-8 h-8 text-indigo-400" />
            </div>

            <div>
              <div className="font-gamer text-4xl sm:text-6xl font-black text-white mb-2">
                HASTA <span className="text-cyan-400 neon-text-cyan">20</span>
              </div>
              <h3 className="font-gamer text-xl font-bold text-zinc-100 mb-3 uppercase">
                Adultos Acompañantes
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Sector cómodo para charlar, compartir comida/bebida y disfrutar de las consolas retro con los clásicos que marcaron época.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-900/50 text-xs font-mono text-yellow-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>Espacio retro para papás, tíos y adultos</span>
            </div>
          </div>

        </div>

        {/* Location & Exclusive Highlights */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#070311] border border-purple-500/30 p-6 sm:p-8 neon-border-violet">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/40 text-purple-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-gamer font-bold text-white text-base mb-1">
                  100% Exclusivo
                </h4>
                <p className="text-xs text-zinc-400">
                  Todo el salón queda reservado únicamente para tu grupo durante el festejo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/40 text-yellow-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-gamer font-bold text-white text-base mb-1">
                  3 Horas Completas
                </h4>
                <p className="text-xs text-zinc-400">
                  Tiempo real de entretenimiento tecnológico sin cortes ni apuros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/40 text-cyan-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-gamer font-bold text-white text-base mb-1">
                  Ubicación La Plata
                </h4>
                <p className="text-xs text-zinc-400">
                  DIAG 74 2730 e/ 22 y 64. Fácil acceso y estacionamiento en la zona.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
