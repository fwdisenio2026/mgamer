import React from 'react';
import { Gamepad, Sparkles, Compass, Users } from 'lucide-react';

export const FreePlaySection: React.FC = () => {
  const genres = [
    { title: 'Carreras & Simulación', desc: 'Circuitos y velocidad a fondo para competir codo a codo.' },
    { title: 'Fútbol & Deportes', desc: 'Partidos electrizantes y torneos relámpago con amigos.' },
    { title: 'Party Games & Fiesta', desc: 'Mini-juegos simultáneos donde las risas no paran.' },
    { title: 'Aventura & Acción', desc: 'Mundos inmersivos en cooperativo y batallas épicas.' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07070e] relative border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            <span>LIBERTAD DE ELECCIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            JUEGO <span className="text-purple-400 text-glow-purple">LIBRE</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Variedad de juegos en las diferentes consolas para que cada jugador elija a qué jugar, con quién compartir y qué aventura descubrir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((g, i) => (
            <div
              key={g.title}
              className="p-6 rounded-xl bg-zinc-950/70 border border-purple-900/30 hover:border-purple-500/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center mb-4 group-hover:border-purple-400">
                  <Gamepad className="w-5 h-5 text-purple-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono uppercase mb-2">
                  {g.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-900 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Multijugador local</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
