const loadMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  // dados dos pratos
  const pratos = [
    {
      nome: "Portuguesa",
      ingredientes: "Molho, queijo, calabresa",
      imgURL:
        "https://images.unsplash.com/photo-1618213837799-25d5552820d3?w=400",
      creditoNome: "Faizan Saeed",
      creditoHref: "https://unsplash.com/pt-br/@faizansaeed",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/pizza-com-calabresa-e-queijo-mwYTNZO0WhA",
    },
    {
      nome: "Calabresa",
      ingredientes: "Molho, queijo, manjericão",
      imgURL:
        "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=400",
      creditoNome: "Fernando Andrade",
      creditoHref: "https://unsplash.com/pt-br/@thisisnando",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/pizza-com-queijo-e-tomate-_P76trHTWDE",
    },
    {
      nome: "Margherita",
      ingredientes: "Molho, queijo, manjericão fresco",
      imgURL:
        "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=400",
      creditoNome: "amirali mirhashemian",
      creditoHref: "https://unsplash.com/pt-br/@amir_v_ali",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/pizza-com-folhas-verdes-e-molho-vermelho-XtLPfib7OuM",
    },
    {
      nome: "Frango",
      ingredientes: "Molho, queijo, frango, catupiry, bacon",
      imgURL:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400",
      creditoNome: "Saahil Khatkhate",
      creditoHref: "https://unsplash.com/pt-br/@saahilkhatkhate",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/pizza-na-mesa-de-madeira-marrom-kfDsMDyX1K0",
    },
    {
      nome: "Quatro Queijos",
      ingredientes: "Molho, mussarela, parmesão, gorgonzola, provolone",
      imgURL:
        "https://images.unsplash.com/photo-1732223229355-95a1433404bf?w=400",
      creditoNome: "Artem Mihailov",
      creditoHref: "https://unsplash.com/pt-br/@mihailovart_pht",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/uma-pizza-sentada-em-cima-de-uma-tabua-de-corte-de-madeira-7wM-Ad3p56E",
    },
    {
      nome: "Napolitana",
      ingredientes: "Molho, queijo, tomate, alho, manjericão",
      imgURL:
        "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=400",
      creditoNome: "Luke Oslizlo",
      creditoHref: "https://unsplash.com/pt-br/@lukaszmtw",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/uma-pizza-em-um-prato-pGYe7qO50UM",
    },
    {
      nome: "Frango Bolonhesa",
      ingredientes: "Molho, queijo, frango e molho bolonhesa",
      imgURL:
        "https://images.unsplash.com/photo-1672856399643-47ddf6b2d6d6?w=400",
      creditoNome: "P S",
      creditoHref: "https://unsplash.com/pt-br/@psparvej03",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/uma-pizza-em-uma-tabua-de-corte-com-uma-espatula-de-madeira-tOXiP-2TTyk",
    },
    {
      nome: "Vegetariana",
      ingredientes: "Molho, queijo, pimentão, cebola, azeitona",
      imgURL:
        "https://images.unsplash.com/photo-1617470702892-e01504297e84?w=400",
      creditoNome: "Laure Noverraz",
      creditoHref: "https://unsplash.com/pt-br/@lornov",
      paginaHref:
        "https://unsplash.com/pt-br/fotografias/pizza-com-queijo-e-folhas-verdes-jsZKLri7toU",
    },
  ];

  // container do menu
  const caixaMenu = document.createElement("div");
  caixaMenu.classList.add("caixa-menu");

  // loop que cria cada prato
  pratos.forEach((prato) => {
    const divPrato = document.createElement("div");
    divPrato.classList.add("prato");

    const cardPrato = document.createElement("div");
    cardPrato.classList.add("card-prato");

    const img = document.createElement("img");
    img.classList.add("img-menu");
    img.src = prato.imgURL;
    img.alt = prato.nome;

    const textoImagem = document.createElement("span");
    textoImagem.classList.add("texto-imagem");
    textoImagem.textContent = "Foto de ";

    const aFoto1 = document.createElement("a");
    aFoto1.textContent = prato.creditoNome;
    aFoto1.href = prato.creditoHref;

    const aFoto2 = document.createElement("a");
    aFoto2.textContent = " na Unsplash";
    aFoto2.href = prato.paginaHref;

    textoImagem.appendChild(aFoto1);
    textoImagem.appendChild(aFoto2);

    cardPrato.appendChild(img);
    cardPrato.appendChild(textoImagem);

    const titulo = document.createElement("span");
    titulo.classList.add("titulo4");
    titulo.textContent = prato.nome;

    const ingredientes = document.createElement("span");
    ingredientes.classList.add("texto1");
    ingredientes.textContent = prato.ingredientes;

    divPrato.appendChild(cardPrato);
    divPrato.appendChild(titulo);
    divPrato.appendChild(ingredientes);

    caixaMenu.appendChild(divPrato);
  });

  // creditos
  const creditos = document.createElement("p");
  creditos.classList.add("credito");
  creditos.textContent = "Foto de ";

  const aCreditos1 = document.createElement("a");
  aCreditos1.textContent = "Nik Owens";
  aCreditos1.href =
    "https://unsplash.com/pt-br/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  const aCreditos2 = document.createElement("a");
  aCreditos2.textContent = " na Unsplash";
  aCreditos2.href =
    "https://unsplash.com/pt-br/fotografias/pizza-na-mesa-de-madeira-marrom-40OJLYVWeeM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  creditos.appendChild(aCreditos1);
  creditos.appendChild(aCreditos2);

  content.appendChild(caixaMenu);
  content.appendChild(creditos);
};

export default loadMenu;
