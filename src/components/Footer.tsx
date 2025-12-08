import logo from '../../imagens/logo.jpg';

export default function Footer() {
  return (
  <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <div className="container-section py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto rounded" />
            <div>
              <p className="font-semibold">Canto das Patas & Pelos</p>
              <p className="text-xs text-neutral-500">Hotel & produtos artesanais</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contactos</h3>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="tel:+351919245067" className="block hover:text-brand-primary">📞 919 245 067</a>
              <a href="mailto:cantodaspatasepelos@gmail.com" className="block hover:text-brand-primary break-all">✉️ cantodaspatasepelos@gmail.com</a>
              <a href="https://www.instagram.com/canto_das_patas_e_pelos" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-primary">📷 @canto_das_patas_e_pelos</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Morada</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Padre+Angelo+Firmino+da+Silva+24+2Dt+Almada" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-primary">
              📍 Rua Padre Angelo Firmino da Silva Nº 24 2Dt<br/>
              Almada
            </a>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <nav className="flex flex-wrap gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <a href="#inicio" className="hover:text-brand-primary">Início</a>
            <a href="#servicos" className="hover:text-brand-primary">Serviços</a>
            <a href="#produtos" className="hover:text-brand-primary">Produtos</a>
            <a href="#precos" className="hover:text-brand-primary">Preços</a>
            <a href="#testemunhos" className="hover:text-brand-primary">Testemunhos</a>
            <a href="#contacto" className="hover:text-brand-primary">Contacto</a>
          </nav>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} Canto das Patas & Pelos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
