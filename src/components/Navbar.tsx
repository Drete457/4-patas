import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from './icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../imagens/logo.jpeg';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#precos', label: 'Preços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#testemunhos', label: 'Testemunhos' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#inicio');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navItems.map(i => i.href.replace('#',''));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      {
        // rootMargin puxa o trigger um pouco antes de chegar ao topo
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Logo Canto das Patas & Pelos" className="h-10 w-auto rounded ring-1 ring-white/40 dark:ring-neutral-800" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-100">Canto das Patas & Pelos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  'relative text-sm font-medium transition ' +
                  (isActive
                    ? 'text-brand-primary'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-primary')
                }
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-brand-primary" />
                )}
              </a>
            );
          })}
          <a href="#contacto" className="btn-primary text-sm">Reservar</a>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {isDark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-neutral-700" />}
          </button>
        </div>
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Menu">
          {open ? <XMarkIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-200" /> : <Bars3Icon className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 px-4 pb-4 space-y-2">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-brand-primary">
              {item.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">Reservar</a>
          <button
            onClick={() => { toggleTheme(); setOpen(false); }}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 rounded-lg border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {isDark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-neutral-700" />} {isDark ? 'Tema Claro' : 'Tema Escuro'}
          </button>
        </div>
      )}
    </header>
  );
}
