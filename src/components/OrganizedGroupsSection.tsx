import React from 'react';
import { Users2, RefreshCw, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const OrganizedGroupsSection: React.FC = () => {
  const steps = [
    {
      title: 'Dinámica de Rotación',
      desc: 'Los invitados se dividen en equipos dinámicos que van rotando ordenadamente por cada estación temática.',
    },
    {
      title: 'Cero Filas o Esperas',
      desc: 'Todas las estaciones (VR, Piso LED, Consolas, Retro) están activas de forma simultánea.',
    },
    {
      title: 'Supervisión Continua',
      desc: 'Coordinación permanente para guiar a los chicos con los mandos, cascos VR y dinámicas de competencia.',
    },
    {
      title: 'Equidad en el Juego',
      desc: 'Garantizamos que todos jueguen el mismo tiempo en cada plataforma de vanguardia.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07070e] relative border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Users2 className="w-3.5 h-3.5 text-purple-400" />
            <span>ORGANIZACIÓN INTELIGENTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight mb-4">
            GRUPOS <span className="text-purple-400 text-glow-purple">ORGANIZADOS</span>
          </h2>
          <div className="inline-block px-5 py-2 rounded-lg bg-purple-950/60 border border-purple-500/40 mb-4">
            <p className="text-xl sm:text-2xl font-black font-mono text-yellow-300 uppercase tracking-widest text-glow-yellow">
              TODOS PUEDAN USAR TODO.
            </p>
          </div>
          <p className="text-zinc-300 text-base sm:text-lg">
            Nuestra dinámica de rotación garantiza que cada uno de los invitados viva todas y cada una de las experiencias tecnológicas sin demoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="p-6 rounded-xl bg-zinc-950/80 border border-purple-900/40 hover:border-purple-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-950 border border-purple-500/50 flex items-center justify-center font-mono text-xs font-black text-purple-300">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-base font-bold text-white font-mono uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3" />
                <span>Rotación activa continua</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
