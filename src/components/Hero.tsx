import hero1 from '../../imagens/Imagem WhatsApp 2025-09-27 às 20.52.29_f7234060.jpg';

export default function Hero() {
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
        <div className="relative group">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-soft ring-4 ring-white/60">
            <img src={hero1} alt="Cão relaxado em ambiente acolhedor do hotel" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-4 border border-neutral-100 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-200">Ambiente seguro & acolhedor</div>
        </div>
      </div>
    </section>
  );
}
