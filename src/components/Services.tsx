import { services } from '../data/services';

export default function Services() {
  return (
  <section id="servicos" className="section dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 title-gradient">Serviços & Valores</h2>
          <p className="text-neutral-600 dark:text-neutral-300">Uma proposta completa para o bem-estar integral: acolhimento, cuidado emocional e experiências positivas.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(s => (
            <div key={s.title} className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-soft border border-neutral-100 dark:border-neutral-700 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-200 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
