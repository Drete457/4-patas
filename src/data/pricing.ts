export interface Feature {
  label: string;
  included?: boolean; // true = incluído, false = não, undefined = neutro
}

export interface PricingOption {
  animal: string;
  duration: string;
  price: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  pricingOptions?: PricingOption[]; // Para hotel com múltiplas opções
  highlight?: boolean;
  description: string;
  features: Feature[];
  ctaLabel: string;
}

export const plans: Plan[] = [
  {
    id: 'hotel',
    name: 'Hotel',
    price: 'A partir de €15/dia',
    highlight: true,
    description: 'Estadia completa com acompanhamento personalizado. Entrada a partir das 9h30.',
    pricingOptions: [
      { animal: 'Cão', duration: 'Diária', price: '€20' },
      { animal: 'Cão', duration: 'Semanal', price: '€130' },
      { animal: 'Cão', duration: 'Mensal', price: '€500' },
      { animal: 'Gato', duration: 'Diária', price: '€15' },
      { animal: 'Gato', duration: 'Semanal', price: '€95' },
      { animal: 'Gato', duration: 'Mensal', price: '€360' }
    ],
    features: [
      { label: '1 dono com máx. 2 animais (cão+gato se compatíveis)', included: true },
      { label: 'Sem boxes, animais dormem onde quiserem', included: true },
      { label: '3 passeios diários (até 2h no parque canino)', included: true },
      { label: 'Brinquedos, ossos de vaca e hastes de rena', included: true },
      { label: 'Fotos e vídeos diários via WhatsApp', included: true },
      { label: 'Psicologia animal se necessário', included: true },
      { label: 'Snacks 100% naturais incluídos', included: true }
    ],
    ctaLabel: 'Reservar Hotel'
  },
  {
    id: 'creche',
    name: 'Creche',
    price: '€10/dia',
    description: 'Horário: 9h30 - 21h30. Atraso: +5€ a cada 5 min após 21h35.',
    features: [
      { label: 'Horário fixo: 9h30 - 21h30', included: true },
      { label: 'Mesmas atividades do hotel', included: true },
      { label: 'Passeios e socialização', included: true },
      { label: 'Brinquedos e enriquecimento ambiental', included: true },
      { label: 'Fotos e vídeos via WhatsApp', included: true },
      { label: 'Acompanhamento comportamental', included: true }
    ],
    ctaLabel: 'Reservar Creche'
  },
  {
    id: 'exoticos',
    name: 'Exóticos',
    price: 'Sob Consulta',
    description: 'Hotel e creche para todos os exóticos (exceto tarântulas). Preço a consultar via WhatsApp.',
    features: [
      { label: 'Todos os exóticos exceto tarântulas', included: true },
      { label: 'Trazer gaiola/terrário próprio', included: true },
      { label: 'Comida e utensílios do animal', included: true },
      { label: 'Cuidados especializados', included: true },
      { label: 'Fotos e vídeos via WhatsApp', included: true }
    ],
    ctaLabel: 'Consultar Preço'
  }
];

export interface Extra {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export const extras: Extra[] = [
  { 
    id: 'sinal', 
    name: 'Sinal de Reserva', 
    price: '€15', 
    description: 'Obrigatório para confirmar reserva (descontado no valor final). Sem reembolso em desmarcação injustificada.' 
  },
  { 
    id: 'atraso', 
    name: 'Taxa de Atraso (Creche)', 
    price: '+€5/5min', 
    description: 'Aplica-se após as 21h35.' 
  },
  { 
    id: 'veterinario', 
    name: 'Despesas Veterinárias', 
    price: 'Custo real', 
    description: 'Se o animal adoecer sem culpa nossa, o dono autoriza e paga despesas (vet/medicação).' 
  },
  { 
    id: 'pulgas', 
    name: 'Desparasitantes (Pulgas)', 
    price: 'Custo real', 
    description: 'Se o animal entrar com pulgas, dono paga desparasitantes ou vem buscá-lo.' 
  }
];
