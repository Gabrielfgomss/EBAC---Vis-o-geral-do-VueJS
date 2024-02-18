<script setup>
import { reactive } from 'vue';

const number = reactive({
  number1: 0,
  number2: 0,
})

const operacaoAritmetica = reactive({
  index: 0,
  operacoes: ['Adição', 'Subtração', 'Divisão', 'Multiplicação']
})

function escolherOperacao() {
  if(operacaoAritmetica.index < operacaoAritmetica.operacoes.length - 1) {
    operacaoAritmetica.index = operacaoAritmetica.index + 1
  } else {
    operacaoAritmetica.index = 0;
  }
}

function valorNumerico(e) {
  const id = (e.target.id);
  const arrayTeclas = [...document.getElementsByClassName('calculadora')[0].childNodes];
  const index = arrayTeclas.findIndex((element) => {
    return (element.innerHTML == e.target.value)
  })
  arrayTeclas[index].style.transform = 'scale(0.9)';

  switch (id) {
    case 'number1':
      return number.number1 = parseInt(e.target.value);
    case 'number2':
      return number.number2 = parseInt(e.target.value)
  }
}

function voltarEstado(e) {
  const id = (e.target.id);
  const arrayTeclas = [...document.getElementsByClassName('calculadora')[0].childNodes];
  const index = arrayTeclas.findIndex((element) => {
    return (element.innerHTML == e.target.value)
  })
  arrayTeclas[index].style.transform = 'scale(1)';
}

const resultado = (number1, number2, operacao) => {
  switch (operacao) {
    case 'Adição':
      return (number1 + number2);
    case 'Subtração':
      return (number1 - number2);
    case 'Divisão':
      return (number1/number2).toFixed(2);
    case 'Multiplicação':
      return (number1*number2);
  }
}
</script>

<template>
  <main>
    <div>
      <h1>Insira os valores a serem calculados</h1>
      <div class="valores">
        <input type="number" id="number1" placeholder="Selecione um número" @keyup="valorNumerico" @keydown="voltarEstado" max="9" min="0">
        <input type="number" id="number2" placeholder="Selecione um número" @keyup="valorNumerico" @keydown="voltarEstado" max="9" min="0">
      </div>
      <div class="calculadora">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>0</p>
        <button v-on:click="escolherOperacao">{{ operacaoAritmetica.operacoes[operacaoAritmetica.index] }}</button>
      </div>
    </div>
    <div>
      <h2>Resultado</h2>
      <p>{{ resultado(number.number1,number.number2, operacaoAritmetica.operacoes[operacaoAritmetica.index]) }}</p>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 70%;
    margin: auto;
  }
  div {
    width: 70%;
    margin: auto;
  }
  main > div:last-child {
    p {
      text-align: center;
      font-size: 1.5em;
    }
  }
  h1,h2 {
    text-align: center;
  }
  
  .valores {
    display: flex;
    justify-content: center;
    gap: 1em;
    font-size: 1.5em;
    p {
      border: 1px solid gray;
      padding: 0.5em;
    };
  }
  input[type="number"] {
    margin: 1.5em;
  }
  .calculadora {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    p {
      text-align: center;
      background-color: gray;
      padding: 1em;
      margin: 0.5em 1em;
      border: 1px solid;
      border-color: black;
    }
    button {
      grid-column: span 2;
      padding: 1em;
      margin: 0.5em 1em;
      background-color: gray;
      border: 1px solid;
      border-color: black;
      text-align: center;
    }
  }
  .select {
    display: flex;
    justify-content: center;
  }
</style>
