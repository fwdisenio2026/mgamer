import React from 'react';
import { Clock, Zap, Target, Sparkles, MessageCircle } from 'lucide-react';
import { MGAMER_INFO, WHATSAPP_CTA_MESSAGES } from '../data/mgamerData';

export const ThreeHoursSection: React.FC = () => {
  const getWhatsAppUrl = (msg: string) => {
    return `https://wa.me/${MGAMER_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  const timelineBlocks = [
    {
      time: 'FASE 01',
      title: 'Bienvenida & Conexión',
      desc: 'Recepción del agasajado y sus invitados en un espacio 100% ambientado. Explicación de dinámicas e inicio de juego libre.',
      badge: 'INICIO',
      accent: 'border-purple-500/40 text-purple-400',
    },
    {
      time: 'FASE 02',
      title: 'Rotación y Estaciones Tech',
      desc: 'Paso organizado por el Casco de Realidad Virtual, Piso LED interactivo y consolas PlayStation / Nintendo Switch.',
      badge: 'TECNOLOGÍA',
      accent: 'border-pink-500/40 text-pink-400',
    },
    {
      time: 'FASE 03',
      title: 'Desafíos, Torneos & Récords',
      desc: 'Competencias en vivo, desafíos individuales y grupales en busca de nuevos récords con festejo en equipo.',
      badge: 'NEW RÉCORD',
      accent: 'border-yellow-500/40 text-yellow-400',
    },
    {
      time: 'FASE 04',
      title: 'Cierre Épico & Torta',
      desc: 'Momento de celebración, fotos temáticas, entrega de reconocimientos y cierre inolvidable con familia y amigos.',
      badge: 'FINALE',
      accent: 'border-purple-500/40 text-purple-400',
    },
  ];

  return (
    <section id="3-horas" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-950/40 border border-yellow-500/40 text-yellow-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Clock className="w-3.5 h-3.5 text-yellow-400" />
            <span>FORMATO DE FESTEJO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            3 HORAS DE <span className="text-yellow-400 text-glow-yellow">DIVERSIÓN TOTAL</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            180 minutos de adrenalina pura organizados para que nadie se aburra, nadie espere de más y todos vivan una fiesta extraordinaria.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timelineBlocks.map((block, idx) => (
            <div
              key={block.title}
              className="p-6 rounded-xl bg-zinc-950/80 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                {block.badge}
              </div>
              <div>
                <span className={`inline-block font-mono text-xs font-black tracking-widest mb-2 ${block.accent}`}>
                  [{block.time}]
                </span>
                <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-purple-300 transition-colors">
                  {block.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Paso {idx + 1} de 4</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-zinc-950 to-purple-950/60 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-400/50 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-mono">¿Querés consultar disponibilidad de fecha?</h4>
              <p className="text-zinc-400 text-sm">Coordinamos los turnos de 3 horas para que disfrutes de tu evento en exclusiva.</p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl(WHATSAPP_CTA_MESSAGES.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>CONSULTÁ POR TU CUMPLE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
