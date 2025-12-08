import { useState, useEffect } from 'react';
import { products } from '../data/products';

// Seleciona 4 produtos aleatórios
function getRandomProducts(count: number) {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomProducts] = useState(() => getRandomProducts(4));

  // Auto-avança o slider a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % randomProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [randomProducts.length]);

  return (
    <section id="inicio" className="section pt-32 bg-gradient-to-br from-brand-primary/10 via-sand to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <div className="container-section grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="title-gradient">Cuidado dedicado</span><br/>alegria e bem-estar para o seu companheiro.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">Hotel particular, atenção personalizada e produtos artesanais pensados com amor para proporcionar segurança, conforto e enriquecimento diário.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicos" className="btn-primary">Ver Serviços</a>
            <a href="#contacto" className="inline-flex items-center font-medium text-brand-primary hover:text-brand-primaryDark">Falar no WhatsApp →</a>
          </div>
        </div>
        
        {/* Slider de produtos */}
        <div className="relative group">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-soft ring-4 ring-white/60 dark:ring-neutral-800">
            {randomProducts.map((product, idx) => (
              <div
                key={product.id}
                className={
                  'absolute inset-0 transition-opacity duration-700 ' +
                  (idx === currentSlide ? 'opacity-100' : 'opacity-0')
                }
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={idx === 0 ? undefined : 'lazy'}
                />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {randomProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={
                  'w-2 h-2 rounded-full transition ' +
                  (idx === currentSlide
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/80')
                }
              />
            ))}
          </div>

          {/* Badge do produto atual */}
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-4 border border-neutral-100 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-200 max-w-[200px]">
            {randomProducts[currentSlide]?.name || 'Produto artesanal'}
          </div>
        </div>
      </div>
    </section>
  );
}
