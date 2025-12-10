import { useState, useMemo, useRef } from 'react';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';

// Importar todas as imagens de testemunhos
const testimonyImages = [
  { id: 1, src: new URL('../../imagens/testimonies/testemunho (1).webp', import.meta.url).href },
  { id: 2, src: new URL('../../imagens/testimonies/testemunho (2).webp', import.meta.url).href },
  { id: 3, src: new URL('../../imagens/testimonies/testemunho (3).webp', import.meta.url).href },
  { id: 4, src: new URL('../../imagens/testimonies/testemunho (4).webp', import.meta.url).href },
  { id: 5, src: new URL('../../imagens/testimonies/testemunho (5).webp', import.meta.url).href },
  { id: 6, src: new URL('../../imagens/testimonies/testemunho (6).webp', import.meta.url).href },
  { id: 7, src: new URL('../../imagens/testimonies/testemunho (7).webp', import.meta.url).href },
  { id: 8, src: new URL('../../imagens/testimonies/testemunho (8).webp', import.meta.url).href },
  { id: 9, src: new URL('../../imagens/testimonies/testemunho (9).webp', import.meta.url).href },
  { id: 10, src: new URL('../../imagens/testimonies/testemunho (10).webp', import.meta.url).href },
  { id: 11, src: new URL('../../imagens/testimonies/testemunho (11).webp', import.meta.url).href },
  { id: 12, src: new URL('../../imagens/testimonies/testemunho (12).webp', import.meta.url).href },
  { id: 13, src: new URL('../../imagens/testimonies/testemunho (13).webp', import.meta.url).href },
  { id: 14, src: new URL('../../imagens/testimonies/testemunho (14).webp', import.meta.url).href },
  { id: 15, src: new URL('../../imagens/testimonies/testemunho (15).webp', import.meta.url).href },
  { id: 16, src: new URL('../../imagens/testimonies/testemunho (16).webp', import.meta.url).href },
  { id: 17, src: new URL('../../imagens/testimonies/testemunho (17).webp', import.meta.url).href },
  { id: 18, src: new URL('../../imagens/testimonies/testemunho (18).webp', import.meta.url).href },
  { id: 19, src: new URL('../../imagens/testimonies/testemunho (19).webp', import.meta.url).href },
  { id: 20, src: new URL('../../imagens/testimonies/testemunho (20).webp', import.meta.url).href },
  { id: 21, src: new URL('../../imagens/testimonies/testemunho (21).webp', import.meta.url).href },
  { id: 22, src: new URL('../../imagens/testimonies/testemunho (22).webp', import.meta.url).href },
  { id: 23, src: new URL('../../imagens/testimonies/testemunho (23).webp', import.meta.url).href },
  { id: 24, src: new URL('../../imagens/testimonies/testemunho (24).webp', import.meta.url).href },
  { id: 25, src: new URL('../../imagens/testimonies/testemunho (25).webp', import.meta.url).href },
  { id: 26, src: new URL('../../imagens/testimonies/testemunho (26).webp', import.meta.url).href },
  { id: 27, src: new URL('../../imagens/testimonies/testemunho (27).webp', import.meta.url).href },
  { id: 28, src: new URL('../../imagens/testimonies/testemunho (28).webp', import.meta.url).href },
  { id: 29, src: new URL('../../imagens/testimonies/testemunho (29).webp', import.meta.url).href },
  { id: 30, src: new URL('../../imagens/testimonies/testemunho (30).webp', import.meta.url).href },
  { id: 31, src: new URL('../../imagens/testimonies/testemunho (31).webp', import.meta.url).href },
  { id: 32, src: new URL('../../imagens/testimonies/testemunho (32).webp', import.meta.url).href },
  { id: 33, src: new URL('../../imagens/testimonies/testemunho (33).webp', import.meta.url).href },
  { id: 34, src: new URL('../../imagens/testimonies/testemunho (34).webp', import.meta.url).href },
  { id: 35, src: new URL('../../imagens/testimonies/testemunho (35).webp', import.meta.url).href },
  { id: 36, src: new URL('../../imagens/testimonies/testemunho (36).webp', import.meta.url).href },
];

// Função para selecionar testemunhos aleatórios sem duplicados
function getRandomTestimonies(count: number, exclude: number[] = []) {
  const available = testimonyImages.filter(img => !exclude.includes(img.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const randomInitial = useMemo(() => getRandomTestimonies(3), []);
  const randomExtra = useMemo(() => {
    const initialIds = randomInitial.map(img => img.id);
    return getRandomTestimonies(7, initialIds);
  }, [randomInitial]);

  const displayedImages = showAll ? [...randomInitial, ...randomExtra] : randomInitial;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + displayedImages.length) % displayedImages.length : null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % displayedImages.length : null);

  const handleShowLess = () => {
    setShowAll(false);
    // Scroll suave para o início da secção
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
  <section ref={sectionRef} id="testemunhos" className="section dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-4">Testemunhos</h2>
          <p className="text-neutral-600 dark:text-neutral-200">Veja o que os nossos clientes dizem através das suas experiências.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-neutral-200 dark:border-neutral-700 bg-sand dark:bg-neutral-900 cursor-pointer animate-on-scroll"
              onClick={() => openLightbox(idx)}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <LazyImage 
                src={img.src} 
                alt={`Testemunho ${img.id}`}
                priority={idx < 3}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                skeletonClassName="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Clique para ampliar
                </span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              Ver Mais Testemunhos
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button 
              onClick={handleShowLess}
              className="btn-primary !bg-neutral-800 dark:!bg-neutral-200 dark:!text-neutral-900 hover:!bg-neutral-700 dark:hover:!bg-white"
            >
              Ver Menos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={displayedImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
