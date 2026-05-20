const loadContatos = () => {
  /*------------------------------------------------------*/

  const content = document.getElementById("content");
  content.innerHTML = "";

  /*------------------------------------------------------*/

  const caixaConteudo = document.createElement("div");
  caixaConteudo.classList.add("caixa-conteudo", "contato");

  /*--------------------------*/

  const titulo3n1 = document.createElement("span");
  titulo3n1.classList.add("titulo3");
  titulo3n1.textContent = "Entre em contato";

  const texto1n1 = document.createElement("span");
  texto1n1.classList.add("texto1");
  texto1n1.textContent =
    "Tem alguma sugestão ou reclamação a fazer ? Ajude nos a melhorar.";

  /*-----------*/

  const texto1n2 = document.createElement("span");
  texto1n2.classList.add("texto1");
  texto1n2.textContent =
    "Esta página é ficticia e serve de exercício de aprendizado no curso de Full Stack no ";

  const a1n1 = document.createElement("a");
  a1n1.textContent = "The Odin Project";
  a1n1.href = "https://www.theodinproject.com";

  texto1n2.appendChild(a1n1);

  /*-----------*/

  /*--------------------------*/

  caixaConteudo.appendChild(titulo3n1);
  caixaConteudo.appendChild(texto1n1);
  caixaConteudo.appendChild(texto1n2);

  /*------------------------------------------------------*/

  const caixaForm = document.createElement("div");
  caixaForm.classList.add("caixa-conteudo", "contato");

  /*--------------------------*/

  const titulo3n2 = document.createElement("span");
  titulo3n2.classList.add("titulo3");
  titulo3n2.textContent = "Faça sua reserva";

  const formulario = document.createElement("form");

  /*-----------*/

  const input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Seu nome";

  const input2 = document.createElement("input");
  input2.type = "email";
  input2.placeholder = "Email de Contato";

  const input3 = document.createElement("input");
  input3.type = "tel";
  input3.placeholder = "Telefone ou Celular";

  /*-----*/

  const dataHora = document.createElement("div");
  dataHora.classList.add("datahora");

  const input4 = document.createElement("input");
  input4.type = "date";
  const input5 = document.createElement("input");
  input5.type = "time";

  dataHora.appendChild(input4);
  dataHora.appendChild(input5);

  /*-----*/

  const input6 = document.createElement("input");
  input6.type = "number";
  input6.placeholder = "Quantidade de pessoas";

  const input7 = document.createElement("textarea");
  input7.rows = "4";
  input7.placeholder = "Outros pedidos";

  /*-----------*/

  formulario.appendChild(input1);
  formulario.appendChild(input2);
  formulario.appendChild(input3);
  formulario.appendChild(dataHora);
  formulario.appendChild(input6);
  formulario.appendChild(input7);

  /*--------------------------*/

  const botaoEnviar = document.createElement("button");
  botaoEnviar.classList.add("enviar");
  botaoEnviar.textContent = "Enviar Mensagem";

  caixaForm.appendChild(titulo3n2);
  caixaForm.appendChild(formulario);
  caixaForm.appendChild(botaoEnviar);

  /*------------------------------------------------------*/

  const credito = document.createElement("p");
  credito.classList.add("credito");
  credito.textContent = "Foto de ";

  /*-----------*/

  const a1n2 = document.createElement("a");
  a1n2.textContent = "Nik Owens";
  a1n2.href =
    "https://unsplash.com/pt-br/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  const a1n3 = document.createElement("a");
  a1n3.textContent = " na Unsplash";
  a1n3.href =
    "https://unsplash.com/pt-br/fotografias/pizza-na-mesa-de-madeira-marrom-40OJLYVWeeM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  /*-----------*/

  credito.appendChild(a1n2);
  credito.appendChild(a1n3);

  /*------------------------------------------------------*/

  content.appendChild(caixaConteudo);
  content.appendChild(caixaForm);
  content.appendChild(credito);

  /*------------------------------------------------------*/
};

export default loadContatos;
