# Canto das Patas & Pelos - Website

Landing page moderna para o negócio local de hotel & produtos artesanais para animais.

## Stack
- Vite + React + TypeScript
- TailwindCSS
- Heroicons / Ícones custom

## Estrutura de Seções
1. Navbar fixa
2. Hero (capa)
3. Serviços
4. Galeria de Produtos
5. Planos & Valores (componentes dinâmicos)
6. Testemunhos (placeholder)
7. Call To Action Contacto
8. Footer

## Requisitos Locais
Node.js >= 18.

## Instalação
```cmd
npm install
npm run dev
```
Abrir: http://localhost:5173

## Adicionar Links Reais
Editar ficheiro `src/components/ContactCTA.tsx` e substituir `href="#"` pelos URLs reais (WhatsApp com `https://wa.me/` + número, Instagram, Google Maps, etc.).

## Substituir Conteúdo
- Textos principais: `Hero.tsx`, `Services.tsx`.
- Produtos: editar lista em `src/data/products.ts`.
- Planos & Extras: editar `src/data/pricing.ts`.
- Testemunhos reais: `src/data/testimonials.ts`.

## Imagens
As imagens são importadas diretamente da pasta `imagens/`. Em produção, otimizar (formatos WebP/AVIF e tamanhos adequados).

## Acessibilidade & SEO
- Meta description + Open Graph + Twitter tags em `index.html`.
- Skip link para conteúdo principal.
- Navegação por âncoras com `id` semântico.
- Estrutura pronta para future sitemap e schema.org.

## Dark Mode
Implementado modo escuro com Tailwind (`darkMode: 'class'`).
- Toggle no `Navbar` (ícone Sol/Lua).
- Persistência em `localStorage` (chave `theme`).
- Script inline no `index.html` evita flash incorreto.

## Estrutura de Dados
- Serviços: `src/data/services.ts`
- Produtos: `src/data/products.ts`
- Planos & Extras: `src/data/pricing.ts`
- Testemunhos: `src/data/testimonials.ts`

## Build Produção
```cmd
npm run build
npm run preview
```
Saída gerada em `dist/`.

## Próximos Passos Sugeridos
- Formulário de contacto com validação.
- Upload / gestão de imagens otimizada + WebP.
- Secção de FAQ.
- Página dedicada “Sobre / Filosofia”.
- Analytics leve (Plausible / Umami).
- Deploy (Netlify / Vercel / GitHub Pages).

---
Criado como base para rápida evolução e personalização.
