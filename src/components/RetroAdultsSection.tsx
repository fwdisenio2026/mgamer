import React from 'react';
import { Joystick, History, Sparkles, Heart, Trophy } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';

export const RetroAdultsSection: React.FC = () => {
  return (
    <section id="retro" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden border-t border-purple-900/30">
      {/* Ambient Yellow Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-950/50 border border-yellow-500/40 text-yellow-300 text-xs font-mono uppercase tracking-widest mb-4">
              <Joystick className="w-3.5 h-3.5 text-yellow-400" />
              <span>ZONA NOSTALGIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
              RETRO PARA <span className="text-yellow-400 text-glow-yellow">ADULTOS</span>
            </h2>

            <p className="text-xl font-bold font-mono text-pink-400 mb-6 uppercase tracking-wide">
              REVIVAN LOS CLÁSICOS QUE MARCARON UNA ÉPOCA
            </p>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
              En MGAMER los cumpleaños no son un evento pasivo para los padres. Mientras los chicos disfrutan de las estaciones contemporáneas, los adultos cuentan con un área retro con títulos icónicos para desafiarse, recordar anécdotas y volver a sentir la magia de los salones de arcade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-purple-950">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <History className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono uppercase">Clásicos Arcade</h4>
                  <p className="text-xs text-zinc-400 mt-1">Luchas clásicas, plataformas, naves espaciales y juegos cooperativos.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono uppercase">Para Chicos y Grandes</h4>
                  <p className="text-xs text-zinc-400 mt-1">Duelos intergeneracionales entre padres, madres e hijos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-yellow-950/20 via-zinc-950 to-purple-950/30 border-2 border-yellow-500/40 glow-yellow relative">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-yellow-300 font-bold px-3 py-1 rounded bg-yellow-950 border border-yellow-500/40">
                1980 - 2000 ARCADE ROOM
              </span>
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>

            <div className="space-y-4 font-mono">
              <div className="p-4 rounded-lg bg-black/70 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">PLAYER 1 VS PLAYER 2</div>
                <div className="text-lg font-black text-white">RETIRO DE TOKENS & DUELOS EN VIVO</div>
              </div>
              <div className="p-4 rounded-lg bg-black/70 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">ATMÓSFERA</div>
                <div className="text-lg font-black text-purple-300">NEÓN, RETRO GAMING & BUENA MÚSICA</div>
              </div>
              <div className="p-4 rounded-lg bg-black/70 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">INTEGRACIÓN FAMILIAR</div>
                <div className="text-lg font-black text-yellow-300">{MGAMER_INFO.targetClaim}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
