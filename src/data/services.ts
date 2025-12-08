import { PawPrintIcon, ShieldCheckIcon, HeartIcon, BuildingStorefrontIcon } from '../components/icons';

export interface ServiceItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  desc: string;
}

export const services: ServiceItem[] = [
  {
    icon: PawPrintIcon,
    title: 'Hotel & Creche',
    desc: 'Ambiente sem boxes, 3 passeios diários com até 2h no parque canino. Brinquedos, snacks naturais e psicologia animal incluídos.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Segurança & Requisitos',
    desc: 'Vacinas em dia, desparasitação obrigatória. Sinal de 15€ para confirmar reserva. Cães com problemas comportamentais: treino ATAAC obrigatório.'
  },
  {
    icon: HeartIcon,
    title: 'Acompanhamento Diário',
    desc: 'Fotos e vídeos via WhatsApp para o dono estar sempre informado. Máximo 2 animais por dono (cão+gato se comparáveis).'
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'Produtos Artesanais',
    desc: 'Snacks 100% naturais, brinquedos e artigos exclusivos feitos com amor para complementar a experiência do teu companheiro.'
  }
];
