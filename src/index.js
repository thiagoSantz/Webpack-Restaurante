import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContatos from "./contatos.js";
import "./style.css";

const buttonMenu = document.getElementById("menu-btn");
const buttonHome = document.getElementById("home-btn");
const buttonContatos = document.getElementById("contact-btn");

buttonMenu.addEventListener("click", function () {
  loadMenu(); // remove o card que contém esse botão
});

buttonHome.addEventListener("click", function () {
  loadHome(); // remove o card que contém esse botão
});

buttonContatos.addEventListener("click", function () {
  loadContatos(); // remove o card que contém esse botão
});

loadHome();
