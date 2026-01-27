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
    description: 'Estadia completa com acompanhamento personalizado. Entrada a partir das 9h30.\nAtraso: +5€ a cada 30 minutos de atraso após 21h35.',
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
      { label: 'Sem boxes, dormem dentro da casa no espaço que mais gostarem', included: true },
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
    description: 'Horário: 9h30 - 21h30.\nAtraso: +5€ a cada 30 minutos de atraso após 21h35.',
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

export interface Condition {
  id: string;
  title: string;
  description: string;
}

export interface ImportantNotice {
  id: string;
  title: string;
  description: string;
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
    name: 'Taxa de Atraso', 
    price: '+€5/30minutos', 
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

export const specialConditions: Condition[] = [
  {
    id: 'cancelamentos',
    title: 'Cancelamentos em épocas especiais',
    description: 'Em épocas especiais, o aviso deve ser feito com 6 meses de antecedência; caso contrário aplica-se uma taxa de 25€.'
  },
  {
    id: 'higiene',
    title: 'Higiene de taças e sacos',
    description: 'Taças e sacos devem ser entregues limpos; itens sujos ou com comida solta têm taxa de higienização de 5€.'
  },
  {
    id: 'natal-passagem',
    title: 'Natal e Passagem de Ano',
    description: 'Durante o Natal e Passagem de Ano, o valor da estadia é de 25€ por dia.'
  }
];

export const importantNotices: ImportantNotice[] = [
  {
    id: 'seguranca-reatividade',
    title: 'Segurança e reatividade',
    description: 'Animais que provocam outros animais ou apresentam reatividade exigem plano de treino e orientações a cumprir pelos tutores. O não cumprimento pode colocar em risco a segurança e levar à recusa ou suspensão do serviço.'
  },
  {
    id: 'alimentacao',
    title: 'Alimentação e rotina',
    description: 'A ração deve ser armazenada e servida conforme indicação para evitar oxidação e recusa alimentar. Recomendamos porções controladas e horários consistentes.'
  },
  {
    id: 'bem-estar',
    title: 'Bem-estar acima de tudo',
    description: 'As nossas recomendações de passeio, socialização e estímulos são ajustadas à personalidade do animal. Pedimos que os tutores mantenham o plano para resultados consistentes.'
  }
];
