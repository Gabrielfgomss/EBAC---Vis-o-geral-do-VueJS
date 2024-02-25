<script setup>
import { reactive } from 'vue';

const number = reactive({
  number1: 0,
  number2: 0,
})

const operacaoAritmetica = reactive({
  index: 0,
  operacoes: 'Adição'
})

function valorNumerico(e) {
  const id = (e.target.id);

  switch (id) {
    case 'number1':
      return number.number1 = parseInt(e.target.value);
    case 'number2':
      return number.number2 = parseInt(e.target.value)
  }
}

function resultado(number1, number2, operacao) {
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
        <input 
          type="number" 
          id="number1" 
          placeholder="Selecione um número" 
          @change="valorNumerico">
        <input 
          type="number" 
          id="number2" 
          placeholder="Selecione um número" 
          @change="valorNumerico">
      </div>
      <div class="operacao">
        <select @change="evento => operacaoAritmetica.operacoes = evento.target.value">
          <option value="Adição">Adição</option>
          <option value="Subtração">Subtração</option>
          <option value="Multiplicação">Multiplicação</option>
          <option value="Divisão">Divisão</option>
        </select>
      </div>
    </div>
    <div>
      <h2>Resultado</h2>
      <p>{{ resultado(number.number1,number.number2, operacaoAritmetica.operacoes) }}</p>
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
  
  p {
    text-align: center;
    font-size: 1.5em;
  }
  
  h1,h2 {
    text-align: center;
  }

  .operacao {
    display: flex;
    justify-content: center;
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
  input[type="number"], select {
    margin: 1.5em;
  }
</style>
