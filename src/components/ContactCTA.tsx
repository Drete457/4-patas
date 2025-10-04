export default function ContactCTA() {
  return (
    <section id="contacto" className="section bg-gradient-to-br from-brand-primary/15 via-sand to-white">
      <div className="container-section text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 title-gradient">Pronto para reservar ou saber mais?</h2>
        <p className="text-neutral-600 mb-8">Fala connosco e garante uma experiência segura, afetiva e enriquecedora para o teu companheiro. Respondemos com rapidez.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="btn-primary" href="#" rel="noreferrer">WhatsApp</a>
          <a className="btn-primary bg-brand-accent hover:bg-green-600" href="#" rel="noreferrer">Instagram</a>
          <a className="inline-flex items-center font-medium text-brand-primary hover:text-brand-primaryDark" href="#" rel="noreferrer">Localização →</a>
        </div>
      </div>
    </section>
  );
}
