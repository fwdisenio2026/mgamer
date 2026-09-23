import React from 'react';
import { Trophy, Flame, Zap, Award, Target, Flag } from 'lucide-react';
import { MGAMER_INFO, WHATSAPP_CTA_MESSAGES } from '../data/mgamerData';

export const ChallengesSection: React.FC = () => {
  const getWhatsAppUrl = (msg: string) => {
    return `https://wa.me/${MGAMER_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  const challengeCards = [
    {
      title: 'DESAFÍOS Y COMPETENCIAS',
      highlight: 'TORNEOS RELÁMPAGO',
      desc: 'Competencias diseñadas a medida de la edad del grupo. Carreras, duelos de baile en piso LED, combates y partidas cooperativas.',
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      accentColor: 'border-yellow-500/40 text-yellow-300',
    },
    {
      title: 'EMOCIÓN AL MÁXIMO',
      highlight: 'ADRENALINA PURA',
      desc: 'El clima de la fiesta se vive como una final de e-sports: pantallas gigantes, música, aliento de los amigos y celebración de cada punto.',
      icon: <Flame className="w-8 h-8 text-pink-400" />,
      accentColor: 'border-pink-500/40 text-pink-300',
    },
    {
      title: 'NEW RÉCORD!',
      highlight: 'SUPERÁ TUS LÍMITES',
      desc: 'Marcá el puntaje más alto del día en realidad virtual o en los desafíos de reflejos. Cada logro se festeja en grande.',
      icon: <Award className="w-8 h-8 text-purple-400" />,
      accentColor: 'border-purple-500/40 text-purple-300',
    },
  ];

  return (
    <section id="desafios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-pink-400" />
            <span>MODO COMPETICIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            DESAFÍOS Y <span className="text-pink-400 text-glow-pink">COMPETENCIAS</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Actividades pensadas para competir en equipo, superar récords y vivir cada minuto con la adrenalina al máximo.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-2xl bg-zinc-950/80 border border-purple-900/40 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className={`inline-block text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-zinc-900 border mb-3 ${card.accentColor}`}>
                  {card.highlight}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-mono uppercase mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Competencia integradora y amigable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Leaderboard Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/40 via-zinc-950 to-pink-950/40 border border-purple-500/40 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-black block mb-2">
              ★ ESPÍRITU MGAMER ★
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white font-mono uppercase tracking-wide mb-3">
              EMOCIÓN AL MÁXIMO • NEW RÉCORD!
            </h4>
            <p className="text-zinc-300 text-sm mb-6">
              Todos los juegos están organizados para que cada participante tenga su momento de gloria y protagonismo.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_CTA_MESSAGES.festejar)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs font-mono uppercase tracking-wider glow-pink transition-transform hover:scale-105 active:scale-95"
            >
              <Flag className="w-4 h-4 text-yellow-300" />
              <span>QUIERO FESTEJAR EN MGAMER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
