import { useState, useMemo } from 'react';

// Importar todas as imagens de testemunhos
const testimonyImages = [
  { id: 1, src: new URL('../../imagens/testimonies/testemunho (1).jpeg', import.meta.url).href },
  { id: 2, src: new URL('../../imagens/testimonies/testemunho (2).jpeg', import.meta.url).href },
  { id: 3, src: new URL('../../imagens/testimonies/testemunho (3).jpeg', import.meta.url).href },
  { id: 4, src: new URL('../../imagens/testimonies/testemunho (4).jpeg', import.meta.url).href },
  { id: 5, src: new URL('../../imagens/testimonies/testemunho (5).jpeg', import.meta.url).href },
  { id: 6, src: new URL('../../imagens/testimonies/testemunho (6).jpeg', import.meta.url).href },
  { id: 7, src: new URL('../../imagens/testimonies/testemunho (7).jpeg', import.meta.url).href },
  { id: 8, src: new URL('../../imagens/testimonies/testemunho (8).jpeg', import.meta.url).href },
  { id: 9, src: new URL('../../imagens/testimonies/testemunho (9).jpeg', import.meta.url).href },
  { id: 10, src: new URL('../../imagens/testimonies/testemunho (10).jpeg', import.meta.url).href },
  { id: 11, src: new URL('../../imagens/testimonies/testemunho (11).jpeg', import.meta.url).href },
  { id: 12, src: new URL('../../imagens/testimonies/testemunho (12).jpeg', import.meta.url).href },
  { id: 13, src: new URL('../../imagens/testimonies/testemunho (13).jpeg', import.meta.url).href },
  { id: 14, src: new URL('../../imagens/testimonies/testemunho (14).jpeg', import.meta.url).href },
  { id: 15, src: new URL('../../imagens/testimonies/testemunho (15).jpeg', import.meta.url).href },
  { id: 16, src: new URL('../../imagens/testimonies/testemunho (16).jpeg', import.meta.url).href },
  { id: 17, src: new URL('../../imagens/testimonies/testemunho (17).jpeg', import.meta.url).href },
  { id: 18, src: new URL('../../imagens/testimonies/testemunho (18).jpeg', import.meta.url).href },
  { id: 19, src: new URL('../../imagens/testimonies/testemunho (19).jpeg', import.meta.url).href },
  { id: 20, src: new URL('../../imagens/testimonies/testemunho (20).jpeg', import.meta.url).href },
  { id: 21, src: new URL('../../imagens/testimonies/testemunho (21).jpeg', import.meta.url).href },
  { id: 22, src: new URL('../../imagens/testimonies/testemunho (22).jpeg', import.meta.url).href },
  { id: 23, src: new URL('../../imagens/testimonies/testemunho (23).jpeg', import.meta.url).href },
  { id: 24, src: new URL('../../imagens/testimonies/testemunho (24).jpeg', import.meta.url).href },
  { id: 25, src: new URL('../../imagens/testimonies/testemunho (25).jpeg', import.meta.url).href },
  { id: 26, src: new URL('../../imagens/testimonies/testemunho (26).jpeg', import.meta.url).href },
  { id: 27, src: new URL('../../imagens/testimonies/testemunho (27).jpeg', import.meta.url).href },
  { id: 28, src: new URL('../../imagens/testimonies/testemunho (28).jpeg', import.meta.url).href },
  { id: 29, src: new URL('../../imagens/testimonies/testemunho (29).jpeg', import.meta.url).href },
  { id: 30, src: new URL('../../imagens/testimonies/testemunho (30).jpeg', import.meta.url).href },
  { id: 31, src: new URL('../../imagens/testimonies/testemunho (31).jpeg', import.meta.url).href },
  { id: 32, src: new URL('../../imagens/testimonies/testemunho (32).jpeg', import.meta.url).href },
  { id: 33, src: new URL('../../imagens/testimonies/testemunho (33).jpeg', import.meta.url).href },
  { id: 34, src: new URL('../../imagens/testimonies/testemunho (34).jpeg', import.meta.url).href },
  { id: 35, src: new URL('../../imagens/testimonies/testemunho (35).jpeg', import.meta.url).href },
  { id: 36, src: new URL('../../imagens/testimonies/testemunho (36).jpeg', import.meta.url).href },
];

function getRandomTestimonies(count: number) {
  const shuffled = [...testimonyImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const randomInitial = useMemo(() => getRandomTestimonies(3), []);
  const randomExtra = useMemo(() => getRandomTestimonies(7), []);

  const displayedImages = showAll ? [...randomInitial, ...randomExtra] : randomInitial;

  return (
  <section id="testemunhos" className="section dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-4">Testemunhos</h2>
          <p className="text-neutral-600 dark:text-neutral-200">Veja o que os nossos clientes dizem através das suas experiências.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-neutral-200 dark:border-neutral-700 bg-sand dark:bg-neutral-900"
            >
              <img 
                src={img.src} 
                alt={`Testemunho ${img.id}`}
                loading={idx < 3 ? undefined : 'lazy'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
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
      </div>
    </section>
  );
}
