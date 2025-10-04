import logo from '../../imagens/logo.jpg';

export default function Footer() {
  return (
  <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <div className="container-section py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded" />
          <div>
            <p className="font-semibold">Canto das Patas & Pelos</p>
            <p className="text-xs text-neutral-500">Hotel & produtos artesanais</p>
          </div>
        </div>
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
    </footer>
  );
}
