import imagemMegBoulden from "./imagens/meg-boulden.jpg";

const loadHome = () => {
  //limpa o content do body //content fica no body do template
  const content = document.getElementById("content");
  content.innerHTML = "";

  //div principal
  const caixaConteudo = document.createElement("div");
  caixaConteudo.classList.add("caixa-conteudo");

  //primeiro span
  const span1 = document.createElement("span");
  span1.classList.add("texto1");
  span1.textContent =
    "Experimente nossas saborosas pizzas com borda crocrante e recheio como você nunca viu.";

  //segundo span
  const span2 = document.createElement("span");
  span2.classList.add("texto1");
  span2.textContent =
    "Esta página é ficticia e serve de exercício de aprendizado no curso de Full Stack no ";

  //a dentro do segundo span
  const a1 = document.createElement("a");
  a1.textContent = "Odin Project";
  a1.href = "https://www.theodinproject.com";
  a1.target = "_blank";
  //
  span2.appendChild(a1);
  span2.appendChild(document.createTextNode("."));

  //-----------------------------------

  //div dentro do caixaConteudo
  const cardPrato = document.createElement("div");
  cardPrato.classList.add("card-prato");

  //imagem dentro de caixaPrato
  const imagemHome = document.createElement("img");
  imagemHome.classList.add("imagem-exemplo");
  imagemHome.src = imagemMegBoulden;
  imagemHome.alt = "pizza";

  //primeiro texto da imagem
  const spanTextoImagem1 = document.createElement("span");
  spanTextoImagem1.classList.add("texto-imagem");
  spanTextoImagem1.textContent = "Foto de ";
  //
  const aTextoImagem1 = document.createElement("a");
  aTextoImagem1.textContent = "Meg Boulden";
  aTextoImagem1.href =
    "https://unsplash.com/pt-br/@mboulden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  //
  const aTextoImagem2 = document.createElement("a");
  aTextoImagem2.textContent = " na Unsplash";
  aTextoImagem2.href =
    "https://unsplash.com/pt-br/fotografias/pao-branco-e-marrom-na-bandeja-de-aco-inoxidavel-yiob91CAqN8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  //inserindo a's do spanTextoImagem1
  spanTextoImagem1.appendChild(aTextoImagem1);
  spanTextoImagem1.appendChild(aTextoImagem2);

  //inserindo dentro do caixaPrato
  cardPrato.appendChild(imagemHome);
  cardPrato.appendChild(spanTextoImagem1);

  //-----------------------------------

  //segundo texto da imagem
  const spanTextoImagem2 = document.createElement("span");
  spanTextoImagem2.classList.add("texto1");
  spanTextoImagem2.textContent = "Visite-nos, peça online ou pelo whatsapp.";

  //p solto em content
  const creditos = document.createElement("p");
  creditos.classList.add("credito");
  creditos.textContent = "Foto de ";
  //
  const aCreditos1 = document.createElement("a");
  aCreditos1.textContent = "Nik Owens";
  aCreditos1.href =
    "https://unsplash.com/pt-br/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  //
  const aCreditos2 = document.createElement("a");
  aCreditos2.textContent = " na Unsplash";
  aCreditos2.href =
    "https://unsplash.com/pt-br/fotografias/pao-branco-e-marrom-na-bandeja-de-aco-inoxidavel-yiob91CAqN8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  //inserindo a's do creditos
  creditos.appendChild(aCreditos1);
  creditos.appendChild(aCreditos2);

  //-----------------------------------

  //coloca o conteudo criado no div para inserir
  caixaConteudo.appendChild(span1);
  caixaConteudo.appendChild(span2);
  caixaConteudo.appendChild(cardPrato);
  caixaConteudo.appendChild(spanTextoImagem2);
  //poe o content no container que vai estar no template
  content.appendChild(caixaConteudo);
  content.appendChild(creditos);
};

export default loadHome;
