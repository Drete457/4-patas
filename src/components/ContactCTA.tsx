export default function ContactCTA() {
  return (
    <section id="contacto" className="section bg-gradient-to-br from-brand-primary/15 via-sand to-white">
      <div className="container-section text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 title-gradient">Pronto para reservar ou saber mais?</h2>
        <p className="text-neutral-600 mb-8">Fala connosco e garante uma experiência segura, afetiva e enriquecedora para o teu companheiro. Respondemos com rapidez.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="btn-primary" href="https://wa.me/351919245067?text=Ol%C3%A1%20quero%20saber%20mais%20sobre%20os%20teus%20servi%C3%A7os." target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a className="btn-primary bg-brand-accent hover:bg-green-600" href="https://www.instagram.com/canto_das_patas_e_pelos" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="inline-flex items-center font-medium text-brand-primary hover:text-brand-primaryDark" href="https://www.google.com/maps/search/?api=1&query=Rua+Padre+Angelo+Firmino+da+Silva+24+2Dt+Almada" target="_blank" rel="noopener noreferrer">Localização →</a>
        </div>
      </div>
    </section>
  );
}
