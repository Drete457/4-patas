// Produtos organizados por categoria
// Nome gerado automaticamente a partir do ficheiro (sem extensão, underscores → espaços)

export type CategoryId = 'cats' | 'dogs' | 'exotics' | 'people';

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: 'cats', label: 'Gatos', emoji: '🐱' },
  { id: 'dogs', label: 'Cães', emoji: '🐶' },
  { id: 'exotics', label: 'Exóticos', emoji: '🦎' },
  { id: 'people', label: 'Pessoas', emoji: '👤' },
];

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  category: CategoryId;
  subcategory?: string;
}

// === CATS ===
import catArranhador from '../../imagens/cats/Arranhador para gatos.jpeg';
import catBolaAmigurumi from '../../imagens/cats/Bola amigurumi.jpeg';
import catBolaPenas from '../../imagens/cats/Bola c.Penas Gato.jpeg';
import catBolaXS from '../../imagens/cats/Bola-XS.jpeg';
import catTrapilho from '../../imagens/cats/Brinquedo trapilho.jpeg';
import catCobraAmigurumi from '../../imagens/cats/Cobra Amigurumi Gato-S_2.jpeg';

// === DOGS ===
import dogBolaAmigurumi from '../../imagens/dogs/Bola amigurumi.jpeg';
import dogBolaXS from '../../imagens/dogs/Bola-XS.jpeg';
import dogTrapilho from '../../imagens/dogs/Brinquedo trapilho.jpeg';
import dogCordaBolaS from '../../imagens/dogs/Corda c.bola-S.jpeg';
import dogCordaBolaXS from '../../imagens/dogs/Corda c.bola-XS.jpeg';
import dogCordaBolasM from '../../imagens/dogs/Corda c.bolas-M.jpeg';

// === EXOTICS ===
import exoBolaCiselArgola from '../../imagens/exotics/Bola Cisel Argola.jpeg';
import exoBolasCisel from '../../imagens/exotics/Bolas Cisel.jpeg';
import exoBrinquedoRoedoresL from '../../imagens/exotics/brinquedo roedores-L.jpeg';
import exoBrinquedoRoedores from '../../imagens/exotics/brinquedo roedores.jpeg';
import exoCaixasRoedores from '../../imagens/exotics/Caixas para roedores.jpeg';
import exoCaixasRoedores2 from '../../imagens/exotics/Caixas para roedores_2.jpeg';
import exoOvoPequenosRoedores from '../../imagens/exotics/Ovo pequenos roedores.jpeg';
import exoRedeRoedoresGrandes from '../../imagens/exotics/rede para roedores grandes.jpeg';

// === PEOPLE ===
import peopleSweat from '../../imagens/people/Sweat\'s.jpeg';
// Amigurumi
import pAmigurumiAbobora from '../../imagens/people/Amigurumi/Amigurumi abóbora spooky-S.jpeg';
import pAmigurumiAbobora2 from '../../imagens/people/Amigurumi/Amigurumi abóbora-S.jpeg';
import pAmigurumiAbobora3 from '../../imagens/people/Amigurumi/Amigurumi abóbora_2-S.jpeg';
import pAmigurumiBola from '../../imagens/people/Amigurumi/Bola amigurumi.jpeg';
import pAmigurumiCaveira from '../../imagens/people/Amigurumi/Caveira Amigurumi.jpeg';
import pAmigurumiCaveira2 from '../../imagens/people/Amigurumi/Caveira Amigurumi_2.jpeg';
import pAmigurumiCaveira3 from '../../imagens/people/Amigurumi/Caveira Amigurumi_3.jpeg';
import pAmigurumiCobra from '../../imagens/people/Amigurumi/Cobra Amigurumi.jpeg';
import pAmigurumiHappyL from '../../imagens/people/Amigurumi/Happy Amigurumi-L.jpeg';
import pAmigurumiHappyS from '../../imagens/people/Amigurumi/Happy Amigurumi-S.jpeg';
import pAmigurumiHappy2S from '../../imagens/people/Amigurumi/Happy Amigurumi_2-S.jpeg';
import pAmigurumiMascote from '../../imagens/people/Amigurumi/Mascote Amigurumi.jpeg';
import pAmigurumiPolvoAzul from '../../imagens/people/Amigurumi/Polvo Amigurumi azul.jpeg';
import pAmigurumiPolvoRosa from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa.jpeg';
import pAmigurumiPolvoRosa2 from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa2.jpeg';
import pAmigurumiPolvoRosaChoque from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa_choque.jpeg';
// Misc
import pMiscCoracao from '../../imagens/people/Misc/Coração Feltro.jpeg';
import pMiscPata from '../../imagens/people/Misc/Pata Crochet.jpeg';
import pMiscPompom from '../../imagens/people/Misc/pompom.jpeg';
// Porta-chaves
import pPortaChavesPolvoAzul from '../../imagens/people/Porta-chaves/Polvo Amigurumi azul.jpeg';
import pPortaChavesPolvoRosa from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa.jpeg';
import pPortaChavesPolvoRosa2 from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa2.jpeg';
import pPortaChavesPolvoRosaChoque from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa_choque.jpeg';
import pPortaChavesAzul from '../../imagens/people/Porta-chaves/Porta chaves azul.jpeg';
import pPortaChavesTricolour from '../../imagens/people/Porta-chaves/Porta chaves tricolour.jpeg';
import pPortaChavesVermelho from '../../imagens/people/Porta-chaves/Porta chaves vermelho.jpeg';

export const products: ProductItem[] = [
  // GATOS
  { id: 'cat-arranhador', name: 'Arranhador para gatos', image: catArranhador, category: 'cats' },
  { id: 'cat-bola-amigurumi', name: 'Bola amigurumi', image: catBolaAmigurumi, category: 'cats' },
  { id: 'cat-bola-penas', name: 'Bola c/ Penas Gato', image: catBolaPenas, category: 'cats' },
  { id: 'cat-bola-xs', name: 'Bola XS', image: catBolaXS, category: 'cats' },
  { id: 'cat-trapilho', name: 'Brinquedo trapilho', image: catTrapilho, category: 'cats' },
  { id: 'cat-cobra-amigurumi', name: 'Cobra Amigurumi Gato S', image: catCobraAmigurumi, category: 'cats' },

  // CÃES
  { id: 'dog-bola-amigurumi', name: 'Bola amigurumi', image: dogBolaAmigurumi, category: 'dogs' },
  { id: 'dog-bola-xs', name: 'Bola XS', image: dogBolaXS, category: 'dogs' },
  { id: 'dog-trapilho', name: 'Brinquedo trapilho', image: dogTrapilho, category: 'dogs' },
  { id: 'dog-corda-bola-s', name: 'Corda c/ bola S', image: dogCordaBolaS, category: 'dogs' },
  { id: 'dog-corda-bola-xs', name: 'Corda c/ bola XS', image: dogCordaBolaXS, category: 'dogs' },
  { id: 'dog-corda-bolas-m', name: 'Corda c/ bolas M', image: dogCordaBolasM, category: 'dogs' },

  // EXÓTICOS
  { id: 'exo-bola-cisel-argola', name: 'Bola Cisel Argola', image: exoBolaCiselArgola, category: 'exotics' },
  { id: 'exo-bolas-cisel', name: 'Bolas Cisel', image: exoBolasCisel, category: 'exotics' },
  { id: 'exo-brinquedo-roedores-l', name: 'Brinquedo roedores L', image: exoBrinquedoRoedoresL, category: 'exotics' },
  { id: 'exo-brinquedo-roedores', name: 'Brinquedo roedores', image: exoBrinquedoRoedores, category: 'exotics' },
  { id: 'exo-caixas-roedores', name: 'Caixas para roedores', image: exoCaixasRoedores, category: 'exotics' },
  { id: 'exo-caixas-roedores-2', name: 'Caixas para roedores (2)', image: exoCaixasRoedores2, category: 'exotics' },
  { id: 'exo-ovo-pequenos-roedores', name: 'Ovo pequenos roedores', image: exoOvoPequenosRoedores, category: 'exotics' },
  { id: 'exo-rede-roedores-grandes', name: 'Rede para roedores grandes', image: exoRedeRoedoresGrandes, category: 'exotics' },

  // PESSOAS
  { id: 'people-sweat', name: "Sweat's", image: peopleSweat, category: 'people' },
  // Amigurumi
  { id: 'people-amigurumi-abobora-spooky', name: 'Amigurumi abóbora spooky S', image: pAmigurumiAbobora, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-abobora', name: 'Amigurumi abóbora S', image: pAmigurumiAbobora2, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-abobora-2', name: 'Amigurumi abóbora S (2)', image: pAmigurumiAbobora3, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-bola', name: 'Bola amigurumi', image: pAmigurumiBola, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-caveira', name: 'Caveira Amigurumi', image: pAmigurumiCaveira, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-caveira-2', name: 'Caveira Amigurumi (2)', image: pAmigurumiCaveira2, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-caveira-3', name: 'Caveira Amigurumi (3)', image: pAmigurumiCaveira3, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-cobra', name: 'Cobra Amigurumi', image: pAmigurumiCobra, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-happy-l', name: 'Happy Amigurumi L', image: pAmigurumiHappyL, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-happy-s', name: 'Happy Amigurumi S', image: pAmigurumiHappyS, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-happy-2-s', name: 'Happy Amigurumi S (2)', image: pAmigurumiHappy2S, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-mascote', name: 'Mascote Amigurumi', image: pAmigurumiMascote, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-polvo-azul', name: 'Polvo Amigurumi azul', image: pAmigurumiPolvoAzul, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-polvo-rosa', name: 'Polvo Amigurumi rosa', image: pAmigurumiPolvoRosa, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-polvo-rosa-2', name: 'Polvo Amigurumi rosa (2)', image: pAmigurumiPolvoRosa2, category: 'people', subcategory: 'Amigurumi' },
  { id: 'people-amigurumi-polvo-rosa-choque', name: 'Polvo Amigurumi rosa choque', image: pAmigurumiPolvoRosaChoque, category: 'people', subcategory: 'Amigurumi' },
  // Misc
  { id: 'people-misc-coracao', name: 'Coração Feltro', image: pMiscCoracao, category: 'people', subcategory: 'Misc' },
  { id: 'people-misc-pata', name: 'Pata Crochet', image: pMiscPata, category: 'people', subcategory: 'Misc' },
  { id: 'people-misc-pompom', name: 'Pompom', image: pMiscPompom, category: 'people', subcategory: 'Misc' },
  // Porta-chaves
  { id: 'people-portachaves-polvo-azul', name: 'Polvo Amigurumi azul', image: pPortaChavesPolvoAzul, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-polvo-rosa', name: 'Polvo Amigurumi rosa', image: pPortaChavesPolvoRosa, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-polvo-rosa-2', name: 'Polvo Amigurumi rosa (2)', image: pPortaChavesPolvoRosa2, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-polvo-rosa-choque', name: 'Polvo Amigurumi rosa choque', image: pPortaChavesPolvoRosaChoque, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-azul', name: 'Porta chaves azul', image: pPortaChavesAzul, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-tricolour', name: 'Porta chaves tricolour', image: pPortaChavesTricolour, category: 'people', subcategory: 'Porta-chaves' },
  { id: 'people-portachaves-vermelho', name: 'Porta chaves vermelho', image: pPortaChavesVermelho, category: 'people', subcategory: 'Porta-chaves' },
];
