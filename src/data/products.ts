import img1 from '../../imagens/Imagem WhatsApp 2025-09-27 às 21.47.30_62b82140.jpg';
import img2 from '../../imagens/Imagem WhatsApp 2025-09-27 às 21.47.20_c1937418.jpg';
import img3 from '../../imagens/Imagem WhatsApp 2025-09-27 às 21.48.07_2c232a8a.jpg';
import img4 from '../../imagens/Imagem WhatsApp 2025-09-27 às 21.52.32_82a1a524.jpg';

export interface ProductItem {
  image: string;
  name: string;
  desc: string;
}

export const products: ProductItem[] = [
  { image: img1, name: 'Snack Natural', desc: 'Feito com ingredientes selecionados.' },
  { image: img2, name: 'Coleira Artesanal', desc: 'Conforto e estilo para o dia-a-dia.' },
  { image: img3, name: 'Brinquedo Interativo', desc: 'Estimulação mental e diversão.' },
  { image: img4, name: 'Manta Conforto', desc: 'Maciez e aconchego para relaxar.' },
];
