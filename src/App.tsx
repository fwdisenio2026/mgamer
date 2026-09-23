import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechExperiencesSection } from './components/TechExperiencesSection';
import { CapacitySection } from './components/CapacitySection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InteractiveFloorBackground } from './components/InteractiveFloorBackground';
import { MobileAppNav } from './components/MobileAppNav';
import { IntroScreen } from './components/IntroScreen';
import { ChevronUp } from 'lucide-react';

export default function App() {
  // Estado para la pantalla de bienvenida / presentación interactiva
  const [hasEntered, setHasEntered] = useState(false);
  
  // Estado para la experiencia de mobile tipo App con la barra inferior
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null);

  const handleSelectMobileTab = (tab: string) => {
    setActiveMobileTab(tab);
    setTimeout(() => {
      const el = document.getElementById('mobile-content-view');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  const handleCloseMobileTab = () => {
    setActiveMobileTab(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Pantalla de presentación negra interactiva */}
      {!hasEntered && (
        <IntroScreen onEnter={() => setHasEntered(true)} />
      )}

      <div className="min-h-screen bg-[#030108] text-white flex flex-col font-sans selection:bg-purple-600 selection:text-white relative pb-20 md:pb-0">
        {/* Top Navbar: Transparente en ambas versiones apoyado directamente sobre el video */}
        <Navbar onSelectTab={handleSelectMobileTab} activeTab={activeMobileTab} />

        {/* Main Content */}
        <main className="flex-1 relative">
          {/* HERO: Video a pantalla completa con efecto typewriter */}
          <Hero />

          {/* ============================================================ */}
          {/* EXPERIENCIA CELULAR TIPO APP (md:hidden)                      */}
          {/* Barra de iconos abajo fija, reserva centrada y destacada     */}
          {/* Solo aparece la información de la opción seleccionada         */}
          {/* ============================================================ */}
          <div className="md:hidden relative">
            <InteractiveFloorBackground />

            <div className="relative z-10">
              {/* Panel de aviso / control si una sección está abierta */}
              {activeMobileTab && (
                <div className="px-4 pt-4 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-300 font-bold bg-purple-950/70 border border-purple-500/40 px-3 py-1.5 rounded-full">
                    SECCIÓN ACTIVA
                  </span>
                  <button
                    type="button"
                    onClick={handleCloseMobileTab}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-900/80 hover:bg-purple-800 text-white font-gamer text-xs uppercase border border-purple-400/50"
                  >
                    <ChevronUp className="w-4 h-4" />
                    <span>Inicio</span>
                  </button>
                </div>
              )}

              {/* Contenedor dinámico que solo muestra la sección si fue presionada */}
              <div id="mobile-content-view">
                {activeMobileTab === 'juegos' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <TechExperiencesSection />
                    </div>
                  </div>
                )}

                {activeMobileTab === 'el-lugar' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <CapacitySection />
                    </div>
                  </div>
                )}

                {activeMobileTab === 'galeria' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <GallerySection />
                    </div>
                  </div>
                )}

                {activeMobileTab === 'contacto' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <ContactSection />
                    </div>
                  </div>
                )}

                {activeMobileTab === 'reviews' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <GoogleReviewsSection />
                    </div>
                  </div>
                )}

                {activeMobileTab === 'faq' && (
                  <div className="animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
                    <InteractiveFloorBackground />
                    <div className="relative z-10">
                      <FAQSection />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* EXPERIENCIA DESKTOP (hidden md:block)                         */}
          {/* En pantallas de escritorio se navega de forma continua        */}
          {/* ============================================================ */}
          <div className="hidden md:block">
            
            {/* Secciones Individuales. Cada una envuelta en un contenedor con su propio InteractiveFloorBackground */}
            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <TechExperiencesSection />
              </div>
            </div>

            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <CapacitySection />
              </div>
            </div>

            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <GallerySection />
              </div>
            </div>

            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <ContactSection />
              </div>
            </div>

            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <GoogleReviewsSection />
              </div>
            </div>

            <div className="relative">
              <InteractiveFloorBackground />
              <div className="relative z-10">
                <FAQSection />
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp / Menu lateral en Scroll para Desktop */}
        <FloatingWhatsApp />

        {/* Barra de Iconos Mobile Abajo tipo App (Fixed Bottom Tab Bar) */}
        <MobileAppNav
          activeTab={activeMobileTab}
          onSelectTab={handleSelectMobileTab}
        />
      </div>
    </>
  );
}
