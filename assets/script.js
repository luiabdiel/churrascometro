// Carne - 400g por pessoa. +6h - 650g
// Cerveja - 1200ml por pessoa. +6h - 2000 ml
// Refrigerante - 1000ml por pessoa. +6h - 1500ml

// Crianças valem por 0.5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let quantidadeTotalDeCarne =
    carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2) * criancas

  let quantidadeTotalDeCerveja = cervejaPorPessoa(duracao) * adultos

  let quantidadeTotalDeBebidas =
    bebidasPorPessoa(duracao) * adultos +
    (bebidasPorPessoa(duracao) / 2) * criancas

  resultado.innerHTML = `<p>${quantidadeTotalDeCarne / 1000} kg de carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    quantidadeTotalDeCerveja / 1000
  )} L de cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(
    quantidadeTotalDeBebidas / 1000
  )} L de refrigentes/água </p>`
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidasPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
