import React, { useEffect, useState, useId } from 'react';

interface FloatingSquare {
  id: string;
  topPct: number;    // 6% a 92% para no cortar en límites
  leftPct: number;   // 5% a 92%
  sizePx: number;    // Fijo a 80px para que todos tengan exactamente el mismo tamaño
  color: 'green' | 'blue' | 'red';
  createdAt: number;
}

/**
 * Cuadrados de colores de fondo estilo juego interactivo:
 * - Todos tienen exactamente el mismo tamaño (fijo a 80px).
 * - No se enciman (algoritmo de posicionamiento libre de colisiones/solapamiento).
 * - Sin bordes redondeados (bien cuadrados, esquinas rectas).
 * - Sin efecto de brillo (color plano/mate luminoso sin sombras ni glow desmedido).
 * - Se prenden más a la vez.
 * - Textura retro de monitor CRT con scanlines sutiles.
 */
export const InteractiveFloorBackground: React.FC = () => {
  const instancePrefix = useId();
  const [squares, setSquares] = useState<FloatingSquare[]>([]);

  useEffect(() => {
    const colors: ('green' | 'blue' | 'red')[] = ['green', 'blue', 'red'];
    let counter = 0;

    // Verificar si un cuadrado solapa con los ya existentes
    const doesOverlap = (top: number, left: number, existing: FloatingSquare[]) => {
      // Usamos una tolerancia de distancia en % para evitar el encimado (un cuadrado de 80px es ~12-15% del ancho de pantalla promedio)
      const threshold = 14; 
      for (const sq of existing) {
        const dist = Math.sqrt(Math.pow(sq.topPct - top, 2) + Math.pow(sq.leftPct - left, 2));
        if (dist < threshold) {
          return true;
        }
      }
      return false;
    };

    const tryCreateSquare = (existing: FloatingSquare[]): FloatingSquare | null => {
      let attempts = 0;
      while (attempts < 30) {
        const topPct = Math.floor(Math.random() * 80) + 8; // 8% a 88% para no tocar los cortes superiores/inferiores
        const leftPct = Math.floor(Math.random() * 80) + 8; // 8% a 88%
        if (!doesOverlap(topPct, leftPct, existing)) {
          counter++;
          return {
            id: `${instancePrefix}-sq-${counter}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            topPct,
            leftPct,
            sizePx: 80, // Fijo, todos tienen exactamente el mismo tamaño
            color: colors[Math.floor(Math.random() * colors.length)],
            createdAt: Date.now(),
          };
        }
        attempts++;
      }
      return null;
    };

    // Inicializar cuadrados prendidos a la vez sin encimarse
    const initialList: FloatingSquare[] = [];
    for (let i = 0; i < 15; i++) {
      const sq = tryCreateSquare(initialList);
      if (sq) {
        initialList.push(sq);
      }
    }
    setSquares(initialList);

    // Ciclo continuo que mantiene activos de a varios
    const interval = setInterval(() => {
      setSquares((prev) => {
        // Remover el más viejo para dar lugar a uno nuevo y mantener la rotación
        const updated = prev.length > 14 ? prev.slice(1) : prev;
        const newSq = tryCreateSquare(updated);
        if (newSq) {
          return [...updated, newSq];
        }
        return updated;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [instancePrefix]);

  // Colores planos, sin efecto de brillo, esquinas perfectamente cuadradas (rounded-none)
  const getColorStyles = (color: 'green' | 'blue' | 'red') => {
    switch (color) {
      case 'green':
        return 'bg-[#00e676]/30 border border-[#00e676]/65';
      case 'blue':
        return 'bg-[#00e5ff]/30 border border-[#00e5ff]/65';
      case 'red':
        return 'bg-[#ff1744]/30 border border-[#ff1744]/65';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Cuadrados de fondo con esquinas rectas y sin solapamiento */}
      {squares.map((sq) => (
        <div
          key={sq.id}
          className={`absolute rounded-none transition-all duration-700 ease-in-out ${getColorStyles(
            sq.color
          )}`}
          style={{
            top: `${sq.topPct}%`,
            left: `${sq.leftPct}%`,
            width: `${sq.sizePx}px`,
            height: `${sq.sizePx}px`,
          }}
        />
      ))}

      {/* Textura de Monitor Retro CRT con rayitas horizontales (scanlines) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 26, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 4px',
          opacity: 0.85,
        }}
      />

      {/* Tinte oscuro suave para asegurar legibilidad */}
      <div className="absolute inset-0 bg-[#030108]/40 pointer-events-none" />
    </div>
  );
};
