import { PawPrintIcon, ShieldCheckIcon, HeartIcon, BuildingStorefrontIcon } from '../components/icons';

export interface ServiceItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  desc: string;
}

export const services: ServiceItem[] = [
  {
    icon: PawPrintIcon,
    title: 'Hotel & Daycare',
    desc: 'Ambiente controlado, acompanhamento próximo e rotinas de enriquecimento para reduzir stress.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Segurança & Bem-estar',
    desc: 'Supervisão responsável, higiene cuidada e atenção personalizada para cada perfil.'
  },
  {
    icon: HeartIcon,
    title: 'Cuidado Afetivo',
    desc: 'Carinho genuíno e estímulos positivos para reforçar confiança e tranquilidade.'
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'Produtos Artesanais',
    desc: 'Snacks e itens exclusivos feitos com amor para complementar a experiência.'
  }
];
