function valorDoInput() {
  let valorInput = document.getElementById("input").value;

  const valorDoInput1 = document.getElementById("valorInputP");
  valorDoInput1.innerHTML = valorInput;
}

let resultado = 0;

function adicionar() {
  resultado = resultado + 1;
  /* resultado += 1; */
  const valorDoContador = document.querySelector("#valorContador");
  valorDoContador.innerHTML = resultado;
}
function resetar() {
  const valorDoContador = document.querySelector("#valorContador");

  valorDoContador.innerHTML = resultado = 0;
}

function remover() {
  resultado = Math.max(0, resultado - 1);
  const valorDoContador = document.querySelector("#valorContador");

  valorDoContador.innerHTML = resultado;
}
