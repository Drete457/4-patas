export interface Feature {
  label: string;
  included?: boolean; // true = incluído, false = não, undefined = neutro
}

export interface Plan {
  id: string;
  name: string;
  price: string; // ex: "€25/dia"
  highlight?: boolean;
  description: string;
  features: Feature[];
  ctaLabel: string;
}

export const plans: Plan[] = [
  {
    id: 'diario',
    name: 'Diário',
    price: '€25/dia',
    description: 'Ideal para estadias pontuais e testes iniciais.',
    features: [
      { label: 'Supervisão dedicada', included: true },
      { label: 'Enriquecimento ambiental', included: true },
      { label: 'Reportes básicos ao tutor', included: true },
      { label: 'Snacks artesanais', included: false }
    ],
    ctaLabel: 'Reservar Dia'
  },
  {
    id: 'semanal',
    name: 'Pacote Semanal',
    price: '€150/sem',
    highlight: true,
    description: 'Equilíbrio entre valor e acompanhamento contínuo.',
    features: [
      { label: 'Tudo do Diário', included: true },
      { label: 'Snacks artesanais incluídos', included: true },
      { label: 'Atualizações multimédia', included: true },
      { label: 'Sessões de socialização', included: true }
    ],
    ctaLabel: 'Reservar Semana'
  },
  {
    id: 'mensal',
    name: 'Premium Mensal',
    price: '€520/mês',
    description: 'Para quem quer consistência, conforto e rotina estável.',
    features: [
      { label: 'Tudo do Semanal', included: true },
      { label: 'Plano personalizado diário', included: true },
      { label: 'Sessões extra de estímulo mental', included: true },
      { label: 'Relatórios detalhados', included: true }
    ],
    ctaLabel: 'Reservar Mensal'
  }
];

export interface Extra {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export const extras: Extra[] = [
  { id: 'snack', name: 'Snacks Artesanais', price: '+€4', description: 'Produzidos com ingredientes selecionados.' },
  { id: 'relatorio', name: 'Relatório Ilustrado', price: '+€6', description: 'Resumo do dia com imagens.' },
  { id: 'treino', name: 'Sessão de Enriquecimento', price: '+€12', description: 'Atividade cognitiva guiada.' }
];
