import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Cuánto dura el cumpleaños y cuántos chicos pueden participar?',
    answer:
      'La fiesta dura 3 horas completas de diversión total. La capacidad está diseñada para hasta 20 chicos en el área de juegos activa y hasta 20 adultos acompañantes (capacidad total 40 personas), con exclusividad del salón al 100%.',
  },
  {
    question: '¿Los chicos juegan a todos los juegos o tienen que elegir?',
    answer:
      'Todos los chicos juegan a todas las atracciones. Nuestro equipo organiza rotaciones dinámicas continuas para que disfruten del Casco de Realidad Virtual VR 360°, el Piso LED Interactivo, las PlayStation 5 y Nintendo Switch sin esperas aburridas.',
  },
  {
    question: '¿Ustedes se encargan de la comida o podemos llevar nosotros?',
    answer:
      '¡Nosotros nos encargamos del menú completo! Servimos pizzas calientes recién horneadas, snacks, gaseosas y bebidas tanto para los chicos como opciones para los adultos. Todo está listo para que la familia no tenga que preocuparse por la cocina.',
  },
  {
    question: '¿Los adultos tienen un sector para quedarse durante el festejo?',
    answer:
      'Sí, contamos con un área confortable y climatizada para los papás y adultos, con mesas, vista a los juegos y una zona arcade retro con clásicos de los 80s y 90s para que los grandes también se diviertan.',
  },
  {
    question: '¿Cómo se reserva una fecha y qué turnos tienen?',
    answer:
      'Podés elegir el día deseado en nuestro almanaque interactivo y enviar los datos directamente por WhatsApp. Trabajamos con turnos de 3 horas (tarde de 16:00 a 19:00 hs o noche de 19:30 a 22:30 hs). Recomendamos consultar con anticipación para asegurar la fecha.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-purple-900/40">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4 neon-border-violet">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>DESPEJÁ TUS DUDAS</span>
          </div>
          <h2 className="font-gamer text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
            PREGUNTAS <span className="neon-text-violet">FRECUENTES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Todo lo que necesitás saber sobre la experiencia de festejo en MGAMER La Plata.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#090414] border-purple-400/80 neon-border-violet shadow-lg'
                    : 'bg-[#090414]/70 border-purple-900/40 hover:border-purple-600/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-gamer text-base sm:text-lg font-bold text-white group-hover:text-purple-300">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-purple-600/30 border-purple-400 text-purple-300 rotate-180'
                        : 'bg-purple-950/40 border-purple-800/40 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-purple-900/40 animate-in fade-in duration-200">
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
