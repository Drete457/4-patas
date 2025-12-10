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
  description?: string;
  price: number;
  quantity: number;
}

// === CATS ===
import catArranhador from '../../imagens/cats/Arranhador para gatos.webp';
import catBolaAmigurumi from '../../imagens/cats/Bola amigurumi.webp';
import catBolaPenas from '../../imagens/cats/Bola c.Penas Gato.webp';
import catBolaXS from '../../imagens/cats/Bola-XS.webp';
import catTrapilho from '../../imagens/cats/Brinquedo trapilho.webp';
import catCobraAmigurumi from '../../imagens/cats/Cobra Amigurumi Gato-S_2.webp';

// === DOGS ===
import dogBolaAmigurumi from '../../imagens/dogs/Bola amigurumi.webp';
import dogBolaXS from '../../imagens/dogs/Bola-XS.webp';
import dogTrapilho from '../../imagens/dogs/Brinquedo trapilho.webp';
import dogCordaBolaS from '../../imagens/dogs/Corda c.bola-S.webp';
import dogCordaBolaXS from '../../imagens/dogs/Corda c.bola-XS.webp';
import dogCordaBolasM from '../../imagens/dogs/Corda c.bolas-M.webp';

// === EXOTICS ===
import exoBolaCiselArgola from '../../imagens/exotics/Bola Cisel Argola.webp';
import exoBolasCisel from '../../imagens/exotics/Bolas Cisel.webp';
import exoBrinquedoRoedoresL from '../../imagens/exotics/brinquedo roedores-L.webp';
import exoBrinquedoRoedores from '../../imagens/exotics/brinquedo roedores.webp';
import exoCaixasRoedores from '../../imagens/exotics/Caixas para roedores.webp';
import exoCaixasRoedores2 from '../../imagens/exotics/Caixas para roedores_2.webp';
import exoOvoPequenosRoedores from '../../imagens/exotics/Ovo pequenos roedores.webp';
import exoRedeRoedoresGrandes from '../../imagens/exotics/rede para roedores grandes.webp';

// === PEOPLE ===
import peopleSweat from '../../imagens/people/Sweat\'s.webp';
// Amigurumi
import pAmigurumiAbobora from '../../imagens/people/Amigurumi/Amigurumi abóbora spooky-S.webp';
import pAmigurumiAbobora2 from '../../imagens/people/Amigurumi/Amigurumi abóbora-S.webp';
import pAmigurumiAbobora3 from '../../imagens/people/Amigurumi/Amigurumi abóbora_2-S.webp';
import pAmigurumiBola from '../../imagens/people/Amigurumi/Bola amigurumi.webp';
import pAmigurumiCaveira from '../../imagens/people/Amigurumi/Caveira Amigurumi.webp';
import pAmigurumiCaveira2 from '../../imagens/people/Amigurumi/Caveira Amigurumi_2.webp';
import pAmigurumiCaveira3 from '../../imagens/people/Amigurumi/Caveira Amigurumi_3.webp';
import pAmigurumiCobra from '../../imagens/people/Amigurumi/Cobra Amigurumi.webp';
import pAmigurumiHappyL from '../../imagens/people/Amigurumi/Happy Amigurumi-L.webp';
import pAmigurumiHappyS from '../../imagens/people/Amigurumi/Happy Amigurumi-S.webp';
import pAmigurumiHappy2S from '../../imagens/people/Amigurumi/Happy Amigurumi_2-S.webp';
import pAmigurumiMascote from '../../imagens/people/Amigurumi/Mascote Amigurumi.webp';
import pAmigurumiPolvoAzul from '../../imagens/people/Amigurumi/Polvo Amigurumi azul.webp';
import pAmigurumiPolvoRosa from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa.webp';
import pAmigurumiPolvoRosa2 from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa2.webp';
import pAmigurumiPolvoRosaChoque from '../../imagens/people/Amigurumi/Polvo Amigurumi rosa_choque.webp';
// Misc
import pMiscCoracao from '../../imagens/people/Misc/Coração Feltro.webp';
import pMiscPata from '../../imagens/people/Misc/Pata Crochet.webp';
import pMiscPompom from '../../imagens/people/Misc/pompom.webp';
// Porta-chaves
import pPortaChavesPolvoAzul from '../../imagens/people/Porta-chaves/Polvo Amigurumi azul.webp';
import pPortaChavesPolvoRosa from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa.webp';
import pPortaChavesPolvoRosa2 from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa2.webp';
import pPortaChavesPolvoRosaChoque from '../../imagens/people/Porta-chaves/Polvo Amigurumi rosa_choque.webp';
import pPortaChavesAzul from '../../imagens/people/Porta-chaves/Porta chaves azul.webp';
import pPortaChavesTricolour from '../../imagens/people/Porta-chaves/Porta chaves tricolour.webp';
import pPortaChavesVermelho from '../../imagens/people/Porta-chaves/Porta chaves vermelho.webp';

export const products: ProductItem[] = [
  // GATOS
  { id: 'cat-arranhador', name: 'Arranhador para gatos', image: catArranhador, category: 'cats', description: 'Arranhador para gatos que ajuda a manter as unhas saudáveis e protege os seus móveis. Proporciona ao seu gato um local apropriado para arranhar e esticar.', price: 7, quantity: 1 },
  { id: 'cat-bola-amigurumi', name: 'Bola amigurumi', image: catBolaAmigurumi, category: 'cats', description: 'Brinquedo em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 2, quantity: 1 },
  { id: 'cat-bola-penas', name: 'Bola c/ Penas Gato', image: catBolaPenas, category: 'cats', description: 'Brinquedo em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 2, quantity: 1 },
  { id: 'cat-bola-xs', name: 'Bola XS', image: catBolaXS, category: 'cats', description: 'Brinquedo em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 2, quantity: 1 },
  { id: 'cat-trapilho', name: 'Brinquedo trapilho', image: catTrapilho, category: 'cats', description: 'Brinquedo em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 3, quantity: 1 },
  { id: 'cat-cobra-amigurumi', name: 'Cobra Amigurumi Gato S', image: catCobraAmigurumi, category: 'cats', description: 'Cobra amigurumi feita de linha que brilha com a luz negra. Tem olhos de segurança e é feita de algodão.', price: 2, quantity: 1 },

  // CÃES
  { id: 'dog-bola-amigurumi', name: 'Bola amigurumi', image: dogBolaAmigurumi, category: 'dogs', description: 'Brinquedo para cão em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 2, quantity: 1 },
  { id: 'dog-bola-xs', name: 'Bola XS', image: dogBolaXS, category: 'dogs', description: 'Brinquedo para cão em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 2, quantity: 1 },
  { id: 'dog-trapilho', name: 'Brinquedo trapilho', image: dogTrapilho, category: 'dogs', description: 'Brinquedo para cão em amigurumi. As cores são adaptadas à visão deles. É feito de uma caixa de medicamento vazia ou tendo um chocalho lá dentro. Feito de trapilho que é mais resistente e não se desfia tão facilmente.', price: 3, quantity: 1 },
  { id: 'dog-corda-bola-s', name: 'Corda c/ bola S', image: dogCordaBolaS, category: 'dogs', description: 'Estes brinquedos de corda trançada são perfeitos para sessões interativas de cabo de guerra e para satisfazer o instinto natural de morder do seu cão. Feitos com material durável e colorido, ajudam a promover a higiene oral ao massajar as gengivas e auxiliar na limpeza dos dentes enquanto o seu patudo se diverte.', price: 1.5, quantity: 1 },
  { id: 'dog-corda-bola-xs', name: 'Corda c/ bola XS', image: dogCordaBolaXS, category: 'dogs', description: 'Estes brinquedos de corda trançada são perfeitos para sessões interativas de cabo de guerra e para satisfazer o instinto natural de morder do seu cão. Feitos com material durável e colorido, ajudam a promover a higiene oral ao massajar as gengivas e auxiliar na limpeza dos dentes enquanto o seu patudo se diverte.', price: 1.5, quantity: 1 },
  { id: 'dog-corda-bolas-m', name: 'Corda c/ bolas M', image: dogCordaBolasM, category: 'dogs', description: 'Estes brinquedos de corda trançada são perfeitos para sessões interativas de cabo de guerra e para satisfazer o instinto natural de morder do seu cão. Feitos com material durável e colorido, ajudam a promover a higiene oral ao massajar as gengivas e auxiliar na limpeza dos dentes enquanto o seu patudo se diverte.', price: 1, quantity: 1 },

  // EXÓTICOS
  { id: 'exo-bola-cisel-argola', name: 'Bola Cisel Argola', image: exoBolaCiselArgola, category: 'exotics', description: 'Brinquedo feito de cisal. Material natural e seguro para roedores, ideal para satisfazer o instinto de roer.', price: 2, quantity: 1 },
  { id: 'exo-bolas-cisel', name: 'Bolas Cisel', image: exoBolasCisel, category: 'exotics', description: 'Brinquedo feito de cisal. Material natural e seguro para roedores, ideal para satisfazer o instinto de roer.', price: 5, quantity: 1 },
  { id: 'exo-brinquedo-roedores-l', name: 'Brinquedo roedores L', image: exoBrinquedoRoedoresL, category: 'exotics', description: 'Brinquedo feito de cartão e cisal. Material natural e seguro para roedores, ideal para estimular e entreter.', price: 1.5, quantity: 1 },
  { id: 'exo-brinquedo-roedores', name: 'Brinquedo roedores', image: exoBrinquedoRoedores, category: 'exotics', description: 'Brinquedo feito de cartão e cisal. Material natural e seguro para roedores, ideal para estimular e entreter.', price: 1.5, quantity: 1 },
  { id: 'exo-caixas-roedores', name: 'Caixas para roedores', image: exoCaixasRoedores, category: 'exotics', description: 'Caixas para exóticos feitas de caixas de cartão. As letras são feitas de trapilho e as cores são adaptadas aos roedores ou aos coelhos.', price: 3.5, quantity: 1 },
  { id: 'exo-caixas-roedores-2', name: 'Caixas para roedores (2)', image: exoCaixasRoedores2, category: 'exotics', description: 'Caixas para exóticos feitas de caixas de cartão. As letras são feitas de trapilho e as cores são adaptadas aos roedores ou aos coelhos.', price: 3.5, quantity: 1 },
  { id: 'exo-ovo-pequenos-roedores', name: 'Ovo pequenos roedores', image: exoOvoPequenosRoedores, category: 'exotics', description: 'Cama Ovo de Trapilho: Abrigo Quentinho para Ratazana e Murganho.', price: 7, quantity: 1 },
  { id: 'exo-rede-roedores-grandes', name: 'Rede para roedores grandes', image: exoRedeRoedoresGrandes, category: 'exotics', description: 'Rede para exóticos feita de trapilho porque se for roída por um roedor não se desfaz nem se entrelaça nas patas deles. As cores também são adaptadas à visão deles.', price: 10, quantity: 1 },

  // PESSOAS
  { id: 'people-sweat', name: "Sweat's", image: peopleSweat, category: 'people', description: 'Sweats com pelo por dentro. Há em cinzento claro e rosa. A cinzenta é unissexo e há em tamanho S, M e XL. A rosa é feminino e há em tamanho S, M e L. Ambas têm capuz e são bem quentinhas.', price: 35, quantity: 1 },
  // Amigurumi
  { id: 'people-amigurumi-abobora-spooky', name: 'Amigurumi abóbora spooky S', image: pAmigurumiAbobora, category: 'people', subcategory: 'Amigurumi', description: 'Abóboras de halloween feitas de linha e algodão. A de olhos azuis tem olhos de segurança e a que tem os olhos realistas tem olhos colados com cola quente.', price: 1.5, quantity: 1 },
  { id: 'people-amigurumi-abobora', name: 'Amigurumi abóbora S', image: pAmigurumiAbobora2, category: 'people', subcategory: 'Amigurumi', description: 'Abóboras de halloween feitas de linha e algodão. A de olhos azuis tem olhos de segurança e a que tem os olhos realistas tem olhos colados com cola quente.', price: 3, quantity: 1 },
  { id: 'people-amigurumi-abobora-2', name: 'Amigurumi abóbora S (2)', image: pAmigurumiAbobora3, category: 'people', subcategory: 'Amigurumi', description: 'Abóboras de halloween feitas de linha e algodão. A de olhos azuis tem olhos de segurança e a que tem os olhos realistas tem olhos colados com cola quente.', price: 3, quantity: 1 },
  { id: 'people-amigurumi-bola', name: 'Bola amigurumi', image: pAmigurumiBola, category: 'people', subcategory: 'Amigurumi', description: 'Bola decorativa em amigurumi feita de linha e algodão. Peça artesanal única e colorida.', price: 2, quantity: 1 },
  { id: 'people-amigurumi-caveira', name: 'Caveira Amigurumi', image: pAmigurumiCaveira, category: 'people', subcategory: 'Amigurumi', description: 'Caveira decorativa em amigurumi feita de linha e algodão. Perfeita para decoração temática.', price: 5, quantity: 1 },
  { id: 'people-amigurumi-caveira-2', name: 'Caveira Amigurumi (2)', image: pAmigurumiCaveira2, category: 'people', subcategory: 'Amigurumi', description: 'Caveira decorativa em amigurumi feita de linha e algodão. Perfeita para decoração temática.', price: 5, quantity: 1 },
  { id: 'people-amigurumi-caveira-3', name: 'Caveira Amigurumi (3)', image: pAmigurumiCaveira3, category: 'people', subcategory: 'Amigurumi', description: 'Caveira decorativa em amigurumi feita de linha e algodão. Perfeita para decoração temática.', price: 5, quantity: 1 },
  { id: 'people-amigurumi-cobra', name: 'Cobra Amigurumi', image: pAmigurumiCobra, category: 'people', subcategory: 'Amigurumi', description: 'Cobra amigurumi feita de linha que brilha com a luz negra. Tem olhos de segurança e é feita de algodão.', price: 5, quantity: 1 },
  { id: 'people-amigurumi-happy-l', name: 'Happy Amigurumi L', image: pAmigurumiHappyL, category: 'people', subcategory: 'Amigurumi', description: 'Peça decorativa em amigurumi feita de linha e algodão. Design alegre e colorido.', price: 3, quantity: 1 },
  { id: 'people-amigurumi-happy-s', name: 'Happy Amigurumi S', image: pAmigurumiHappyS, category: 'people', subcategory: 'Amigurumi', description: 'Peça decorativa em amigurumi feita de linha e algodão. Design alegre e colorido.', price: 3, quantity: 1 },
  { id: 'people-amigurumi-happy-2-s', name: 'Happy Amigurumi S (2)', image: pAmigurumiHappy2S, category: 'people', subcategory: 'Amigurumi', description: 'Peça decorativa em amigurumi feita de linha e algodão. Design alegre e colorido.', price: 3, quantity: 1 },
  { id: 'people-amigurumi-mascote', name: 'Mascote Amigurumi', image: pAmigurumiMascote, category: 'people', subcategory: 'Amigurumi', description: 'Este boneco amigurumi é uma peça única e fofa, feita de linha e algodão natural.', price: 4, quantity: 1 },
  { id: 'people-amigurumi-polvo-azul', name: 'Polvo Amigurumi azul', image: pAmigurumiPolvoAzul, category: 'people', subcategory: 'Amigurumi', description: 'Polvo decorativo em amigurumi feito de linha e algodão. Peça artesanal com design fofo e colorido.', price: 7.5, quantity: 1 },
  { id: 'people-amigurumi-polvo-rosa', name: 'Polvo Amigurumi rosa', image: pAmigurumiPolvoRosa, category: 'people', subcategory: 'Amigurumi', description: 'Polvo decorativo em amigurumi feito de linha e algodão. Peça artesanal com design fofo e colorido.', price: 7.5, quantity: 1 },
  { id: 'people-amigurumi-polvo-rosa-2', name: 'Polvo Amigurumi rosa (2)', image: pAmigurumiPolvoRosa2, category: 'people', subcategory: 'Amigurumi', description: 'Polvo decorativo em amigurumi feito de linha e algodão. Peça artesanal com design fofo e colorido.', price: 7.5, quantity: 1 },
  { id: 'people-amigurumi-polvo-rosa-choque', name: 'Polvo Amigurumi rosa choque', image: pAmigurumiPolvoRosaChoque, category: 'people', subcategory: 'Amigurumi', description: 'Polvo decorativo em amigurumi feito de linha e algodão. Peça artesanal com design fofo e colorido.', price: 7.5, quantity: 1 },
  // Misc
  { id: 'people-misc-coracao', name: 'Coração Feltro', image: pMiscCoracao, category: 'people', subcategory: 'Misc', description: 'Coração decorativo feito de linha e algodão. Peça artesanal perfeita para presente ou decoração.', price: 5, quantity: 1 },
  { id: 'people-misc-pata', name: 'Pata Crochet', image: pMiscPata, category: 'people', subcategory: 'Misc', description: 'Amigurumi em forma de pata do logo. Feito de linha e algodão.', price: 4, quantity: 1 },
  { id: 'people-misc-pompom', name: 'Pompom', image: pMiscPompom, category: 'people', subcategory: 'Misc', description: 'Pompom decorativo feito de linha e algodão. Versátil e colorido, ideal para diversos usos.', price: 0.20, quantity: 3 },
  // Porta-chaves
  { id: 'people-portachaves-polvo-azul', name: 'Polvo Amigurumi azul', image: pPortaChavesPolvoAzul, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves em forma de polvo feito em amigurumi com linha e algodão. Prático e decorativo, perfeito para personalizar as suas chaves ou mochila.', price: 7.5, quantity: 1 },
  { id: 'people-portachaves-polvo-rosa', name: 'Polvo Amigurumi rosa', image: pPortaChavesPolvoRosa, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves em forma de polvo feito em amigurumi com linha e algodão. Prático e decorativo, perfeito para personalizar as suas chaves ou mochila.', price: 7.5, quantity: 1 },
  { id: 'people-portachaves-polvo-rosa-2', name: 'Polvo Amigurumi rosa (2)', image: pPortaChavesPolvoRosa2, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves em forma de polvo feito em amigurumi com linha e algodão. Prático e decorativo, perfeito para personalizar as suas chaves ou mochila.', price: 7.5, quantity: 1 },
  { id: 'people-portachaves-polvo-rosa-choque', name: 'Polvo Amigurumi rosa choque', image: pPortaChavesPolvoRosaChoque, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves em forma de polvo feito em amigurumi com linha e algodão. Prático e decorativo, perfeito para personalizar as suas chaves ou mochila.', price: 7.5, quantity: 1 },
  { id: 'people-portachaves-azul', name: 'Porta chaves azul', image: pPortaChavesAzul, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves artesanal feito com linha e algodão. Acessório prático e único para organizar as suas chaves com estilo.', price: 5, quantity: 1 },
  { id: 'people-portachaves-tricolour', name: 'Porta chaves tricolour', image: pPortaChavesTricolour, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves artesanal feito com linha e algodão. Acessório prático e único para organizar as suas chaves com estilo.', price: 1.5, quantity: 1 },
  { id: 'people-portachaves-vermelho', name: 'Porta chaves vermelho', image: pPortaChavesVermelho, category: 'people', subcategory: 'Porta-chaves', description: 'Porta-chaves artesanal feito com linha e algodão. Acessório prático e único para organizar as suas chaves com estilo.', price: 2.5, quantity: 1 },
];
