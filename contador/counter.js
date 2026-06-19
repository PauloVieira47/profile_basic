function valorDoInput() {
  let valorInput = document.getElementById("input").value;

  const valorDoInput1 = document.getElementById("valorInputP");
  valorDoInput1.innerHTML = valorInput;
}

const valorDoContador = document.querySelector("#valorContador");
let resultado = 0;

function adicionar() {
  resultado = resultado + 1;
  /* resultado += 1; */
  valorDoContador.innerHTML = resultado;
}
function resetar() {
  valorDoContador.innerHTML = resultado = 0;
}

function remover() {
  resultado = Math.max(0, resultado - 1);

  valorDoContador.innerHTML = resultado;
}

for (let indice = 0; indice < 5; indice++) {
  console.log("indices: " + indice);
}

const strings = ["paulo ", "teste ", "macarrao "];

for (let i = 0; i < 2; i++) {
  console.log("strings: " + strings);
}

function adicionar() {
  console.count("clicou em adicionar");
}
function resetar() {
  console.clear();
}
