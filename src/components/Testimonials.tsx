import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
  <section id="testemunhos" className="section dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-4">Testemunhos</h2>
          <p className="text-neutral-600 dark:text-neutral-300">Em breve adicionaremos relatos reais. Por agora, uma amostra de layout.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-soft border border-neutral-100 dark:border-neutral-700 flex flex-col">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 flex-1 leading-relaxed">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold text-brand-primary">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
