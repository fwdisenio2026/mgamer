import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, Clock, MapPin, Users, Send } from 'lucide-react';
import { MGAMER_INFO } from '../data/mgamerData';

export const ContactSection: React.FC = () => {
  // Almanaque interactivo: estado del mes y día seleccionado
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  const [selectedTurn, setSelectedTurn] = useState<string>('Tarde (16:00 a 19:00 hs)');

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    edadAgasajado: '',
    cantidadChicos: '15 chicos',
    comentarios: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Funciones de navegación del mes
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // Generación de días del mes actual
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const handleSelectDay = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  };

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return 'Elegí un día en el almanaque';
    const day = date.getDate();
    const mName = monthNames[date.getMonth()];
    const y = date.getFullYear();
    const dName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][date.getDay()];
    return `${dName} ${day} de ${mName}, ${y}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formatDateDisplay(selectedDate);
    
    // Abre el canal de confirmación de reserva directamente a WhatsApp con todos los datos ordenados
    const text = `¡Hola MGAMER! Quiero hacer una reserva para un cumpleaños:
- Fecha elegida: ${formattedDate}
- Turno: ${selectedTurn}
- Nombre y Apellido: ${formData.nombre || 'A coordinar'}
- Teléfono: ${formData.telefono || 'Sin especificar'}
- Edad del cumpleañero/a: ${formData.edadAgasajado || 'A confirmar'}
- Chicos estimados: ${formData.cantidadChicos}
- Notas: ${formData.comentarios || 'Sin comentarios adicionales'}`;

    const url = `https://wa.me/${MGAMER_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030108] relative border-t border-purple-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado: "RESERVA TU LUGAR" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-gamer text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
            RESERVA <span className="neon-text-violet">TU LUGAR</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Elegí el día en el calendario y completá los datos para asegurar tu fecha de festejo.
          </p>
        </div>

        {/* Contenedor Principal: Almanaque interactivo a la izquierda + Formulario de Reserva a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Almanaque interactivo */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#090414] border-2 border-purple-500/50 neon-border-violet-strong shadow-2xl">
            <div>
              {/* Header del Almanaque */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold block">
                      SELECCIONAR FECHA
                    </span>
                    <h3 className="font-gamer text-lg sm:text-xl font-bold text-white uppercase">
                      {monthNames[month]} {year}
                    </h3>
                  </div>
                </div>

                {/* Botones Mes Anterior / Siguiente */}
                <div className="flex items-center gap-1.5 bg-[#030108] p-1 rounded-xl border border-purple-900/60">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-950/60 transition-colors cursor-pointer"
                    aria-label="Mes anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-950/60 transition-colors cursor-pointer"
                    aria-label="Mes siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Días de la semana */}
              <div className="grid grid-cols-7 gap-1.5 mb-2 text-center">
                {daysOfWeek.map((day, idx) => (
                  <div key={idx} className="text-[11px] font-mono font-bold text-purple-400/80 uppercase py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grilla de Días del Mes */}
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {calendarDays.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-10 sm:h-11 rounded-lg" />;
                  }

                  const active = isSelected(day);
                  const today = isToday(day);

                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      onClick={() => handleSelectDay(day)}
                      className={`h-10 sm:h-11 rounded-xl font-mono text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer ${
                        active
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)] border border-purple-300 scale-105 z-10'
                          : today
                          ? 'bg-purple-950/70 text-yellow-300 border border-yellow-500/50 hover:bg-purple-900/60'
                          : 'bg-zinc-950/60 text-zinc-300 hover:bg-purple-950/50 hover:text-white border border-purple-950/40'
                      }`}
                    >
                      <span>{day}</span>
                      {today && !active && (
                        <span className="w-1 h-1 rounded-full bg-yellow-400 absolute bottom-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selección de Turno de Festejo */}
              <div className="mt-6 pt-5 border-t border-purple-900/50">
                <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                  Turno de 3 horas preferido
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Tarde (16:00 a 19:00 hs)',
                    'Noche (19:30 a 22:30 hs)',
                  ].map((turn) => (
                    <button
                      key={turn}
                      type="button"
                      onClick={() => setSelectedTurn(turn)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-gamer font-bold uppercase tracking-wider text-center border transition-all cursor-pointer ${
                        selectedTurn === turn
                          ? 'bg-purple-950 border-purple-400 text-purple-200 neon-border-violet'
                          : 'bg-[#030108] border-purple-900/40 text-zinc-400 hover:text-white hover:border-purple-700'
                      }`}
                    >
                      {turn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumen del Día Seleccionado */}
            <div className="mt-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-purple-300 font-bold block">
                  FECHA ELEGIDA
                </span>
                <span className="text-sm sm:text-base font-gamer font-bold text-white">
                  {formatDateDisplay(selectedDate)}
                </span>
                <div className="text-xs text-yellow-300 font-mono mt-0.5">
                  {selectedTurn}
                </div>
              </div>
              <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>
          </div>

          {/* Columna Derecha: Formulario con botón "Reservar" */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#090414] border border-purple-500/30 neon-border-violet flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-gamer text-xl sm:text-2xl font-black text-white">
                  DATOS DE <span className="neon-text-violet">RESERVA</span>
                </h3>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800">
                  PASO FINAL
                </span>
              </div>

              <p className="text-xs text-zinc-400 mb-6">
                Ingresá tus datos para coordinar y asegurar el festejo con MGAMER:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase mb-1">
                    Tu Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Carolina Gómez"
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/60 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-1">
                      Teléfono de contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="Ej. 221 555-1234"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/60 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-1">
                      Edad a cumplir
                    </label>
                    <input
                      type="text"
                      value={formData.edadAgasajado}
                      onChange={(e) => setFormData({ ...formData, edadAgasajado: e.target.value })}
                      placeholder="Ej. 10 años"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/60 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase mb-1">
                    Cantidad estimada de chicos
                  </label>
                  <select
                    value={formData.cantidadChicos}
                    onChange={(e) => setFormData({ ...formData, cantidadChicos: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/60 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm font-sans"
                  >
                    <option value="Hasta 10 chicos" className="bg-[#090414]">Hasta 10 chicos</option>
                    <option value="10 a 15 chicos" className="bg-[#090414]">10 a 15 chicos</option>
                    <option value="15 a 20 chicos (Capacidad máx)" className="bg-[#090414]">15 a 20 chicos (Capacidad máx)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase mb-1">
                    Comentarios o preferencias
                  </label>
                  <textarea
                    rows={2}
                    value={formData.comentarios}
                    onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                    placeholder="Preferencias de juegos, comida, etc."
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/60 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm font-sans resize-none"
                  />
                </div>

                {/* Botón: "Reservar" */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-gamer text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 glow-purple transition-all border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-yellow-300" />
                  <span>RESERVAR</span>
                </button>
              </form>
            </div>

            {/* Aviso breve de exclusividad y ubicación */}
            <div className="mt-6 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {MGAMER_INFO.location}
              </span>
              <span className="text-purple-300 font-semibold">
                3 Horas Exclusivas
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
