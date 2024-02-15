import toStudy from "./utils.js";
import toPraise from "./utils.js";

const btn1 = document.querySelector("#btn1")
btn1.addEventListener('click', () => {toStudy("Vamos estudar React")})

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    toPraise("O livro React do Maujor é muito bom")})
