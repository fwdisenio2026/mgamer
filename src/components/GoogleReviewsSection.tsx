import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/mgamerData';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-purple-900/40">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado con estética gamer y Google */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4 neon-border-violet">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 EN GOOGLE</span>
          </div>
          
          <h2 className="font-gamer text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
            QUIENES YA <span className="neon-text-violet">FESTEJARON</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Opiniones y experiencias reales de familias que eligieron MGAMER en La Plata.
          </p>
        </div>

        {/* Tarjetas de Reseñas de Google */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090414]/90 border border-purple-500/30 neon-border-violet flex flex-col justify-between relative group hover:border-purple-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <div>
                {/* Header de la reseña con estrellas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {review.time}
                  </span>
                </div>

                {/* Comentario */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Autor y verificación */}
              <div className="pt-4 border-t border-purple-900/50 flex items-center justify-between">
                <div>
                  <div className="font-gamer text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-[11px] text-purple-300/80 font-mono">
                    {review.role}
                  </div>
                </div>

                {/* Badge sutil de Google */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-black/60 px-2 py-1 rounded border border-purple-900/50">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
