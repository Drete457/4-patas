import { useState } from 'react';
import { products, categories, type CategoryId } from '../data/products';
import LazyImage from './LazyImage';

export default function ProductsGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const isAllCategory = activeCategory === 'all';
  const displayLimit = 10;
  const hasMore = isAllCategory && filteredProducts.length > displayLimit;
  const displayedProducts = (isAllCategory && !showAll) 
    ? filteredProducts.slice(0, displayLimit)
    : filteredProducts;

  const handleCategoryChange = (category: CategoryId | 'all') => {
    setActiveCategory(category);
    setShowAll(false); // Reset ao mudar de categoria
  };

  return (
    <section id="produtos" className="section bg-white dark:bg-neutral-950">
      <div className="container-section">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4 animate-on-scroll">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-3">Produtos Artesanais</h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">Qualidade afetiva e responsabilidade em cada detalhe. Uma amostra do que produzimos com carinho.</p>
          </div>
          <a href="#contacto" className="btn-primary">Encomendar</a>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleCategoryChange('all')}
            className={
              'px-4 py-2 rounded-full text-sm font-medium transition border ' +
              (activeCategory === 'all'
                ? 'bg-brand-primary text-white border-brand-primary'
                : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-brand-primary')
            }
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={
                'px-4 py-2 rounded-full text-sm font-medium transition border ' +
                (activeCategory === cat.id
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-brand-primary')
              }
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((p, idx) => (
            <div 
              key={p.id} 
              className="group relative bg-sand dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-soft border border-neutral-200 dark:border-neutral-700 animate-on-scroll"
              style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <LazyImage 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  skeletonClassName="rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 text-neutral-900 dark:text-white text-sm">{p.name}</h3>
                {p.subcategory && (
                  <span className="inline-block text-xs bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full">{p.subcategory}</span>
                )}
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition pointer-events-none" />
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              Ver Todos os Produtos ({filteredProducts.length})
            </button>
          </div>
        )}

        {hasMore && showAll && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(false)}
              className="btn-primary !bg-neutral-800 dark:!bg-neutral-200 dark:!text-neutral-900 hover:!bg-neutral-700 dark:hover:!bg-white"
            >
              Ver Menos
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <p className="text-center text-neutral-500 dark:text-neutral-400 py-12">Sem produtos nesta categoria.</p>
        )}
      </div>
    </section>
  );
}
